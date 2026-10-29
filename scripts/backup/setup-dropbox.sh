#!/usr/bin/env bash
# One-time setup of the Dropbox backup: asks for the Dropbox app key/secret,
# gets a refresh token and stores the three values as GitHub Actions secrets.
# Usage: scripts/backup/setup-dropbox.sh   (requires gh, logged in)
set -euo pipefail
REPO=Solead-Web-Agency/Abadie

read -rp "App key Dropbox : " KEY
read -rsp "App secret Dropbox : " SECRET; echo

URL="https://www.dropbox.com/oauth2/authorize?client_id=${KEY}&response_type=code&token_access_type=offline"
echo "Une page Dropbox va s'ouvrir : clique sur « Continuer » puis « Autoriser », et copie le code affiché."
open "$URL" 2>/dev/null || echo "Ouvre ce lien : $URL"
read -rp "Code affiché par Dropbox : " CODE

REFRESH=$(curl -s https://api.dropboxapi.com/oauth2/token \
  -d code="$CODE" -d grant_type=authorization_code -u "$KEY:$SECRET" \
  | python3 -c "import sys, json; d = json.load(sys.stdin); print(d.get('refresh_token') or sys.exit('Erreur Dropbox : ' + json.dumps(d)))")

gh secret set DROPBOX_APP_KEY -R "$REPO" --body "$KEY"
gh secret set DROPBOX_APP_SECRET -R "$REPO" --body "$SECRET"
gh secret set DROPBOX_REFRESH_TOKEN -R "$REPO" --body "$REFRESH"
echo "C'est bon : les 3 secrets Dropbox sont enregistrés dans GitHub."
