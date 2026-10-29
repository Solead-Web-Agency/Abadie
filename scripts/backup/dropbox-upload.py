"""Uploads a backup zip to the firm's Dropbox folder and keeps the latest N.

Environment:
  DROPBOX_APP_KEY, DROPBOX_APP_SECRET, DROPBOX_REFRESH_TOKEN  (GitHub secrets)
  DROPBOX_FOLDER   folder path in the Dropbox account, e.g. "/Sauvegardes site pierreabadie.com"
  KEEP             number of archives to keep (default 10)

Usage: python3 scripts/backup/dropbox-upload.py <zip>
Exits 0 without uploading when the Dropbox credentials are not configured yet.
"""
import json
import os
import sys
import urllib.parse
import urllib.request

PREFIX = 'sauvegarde-pierreabadie-'


def api(url, data=None, headers=None, token=None):
    req = urllib.request.Request(url, data=data, headers=headers or {}, method='POST')
    if token:
        req.add_header('Authorization', f'Bearer {token}')
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return json.loads(r.read() or b'{}')
    except urllib.error.HTTPError as e:
        sys.exit(f'Dropbox API error {e.code} on {url}: {e.read().decode(errors="replace")}')


def rpc(endpoint, args, token):
    return api(
        f'https://api.dropboxapi.com/2/{endpoint}',
        data=json.dumps(args).encode(),
        headers={'Content-Type': 'application/json'},
        token=token,
    )


def main():
    zip_path = sys.argv[1]
    env = {k: os.environ.get(k, '').strip() for k in
           ('DROPBOX_APP_KEY', 'DROPBOX_APP_SECRET', 'DROPBOX_REFRESH_TOKEN', 'DROPBOX_FOLDER')}
    missing = [k for k, v in env.items() if not v]
    if missing:
        print(f'::warning::Sauvegarde Dropbox non configurée (manque : {", ".join(missing)}). '
              'Archive générée mais non envoyée.')
        return

    token = api(
        'https://api.dropboxapi.com/oauth2/token',
        data=urllib.parse.urlencode({
            'grant_type': 'refresh_token',
            'refresh_token': env['DROPBOX_REFRESH_TOKEN'],
            'client_id': env['DROPBOX_APP_KEY'],
            'client_secret': env['DROPBOX_APP_SECRET'],
        }).encode(),
        headers={'Content-Type': 'application/x-www-form-urlencoded'},
    )['access_token']

    folder = '/' + env['DROPBOX_FOLDER'].strip('/')
    name = os.path.basename(zip_path)
    with open(zip_path, 'rb') as f:
        body = f.read()  # ~35 MB, under the 150 MB single-upload limit
    # Dropbox-API-Arg must be ASCII: json.dumps escapes accents by default.
    meta = api(
        'https://content.dropboxapi.com/2/files/upload',
        data=body,
        headers={
            'Content-Type': 'application/octet-stream',
            'Dropbox-API-Arg': json.dumps({'path': f'{folder}/{name}', 'mode': 'overwrite'}),
        },
        token=token,
    )
    print(f'Envoyé : {meta["path_display"]} ({meta["size"] / 1048576:.1f} Mo)')

    # Rotation: names start with the date, so alphabetical order = chronological order.
    keep = int(os.environ.get('KEEP') or 10)
    entries = rpc('files/list_folder', {'path': folder}, token)['entries']
    backups = sorted(e['name'] for e in entries
                     if e['.tag'] == 'file' and e['name'].startswith(PREFIX) and e['name'].endswith('.zip'))
    for old in backups[:-keep]:
        rpc('files/delete_v2', {'path': f'{folder}/{old}'}, token)
        print(f'Ancienne archive supprimée : {old}')
    print(f'{min(len(backups), keep)} archive(s) conservée(s).')


if __name__ == '__main__':
    main()
