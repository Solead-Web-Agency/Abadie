#!/usr/bin/env bash
# Builds a complete, self-contained backup of the site:
#   site/                     built site, ready to put back online (Vercel, Netlify, Apache)
#   code-source/              source of the current version
#   historique-complet.bundle full git history (git clone historique-complet.bundle)
#   LISEZ-MOI - Restauration du site.txt
# Usage: scripts/backup/build-archive.sh <output-dir>   (run after `npm run build`)
# Prints the path of the created zip.
set -euo pipefail

OUT_DIR=${1:?usage: build-archive.sh <output-dir>}
DATE=$(date -u +%Y-%m-%d)
SHA=$(git rev-parse --short=7 HEAD)
NAME="sauvegarde-pierreabadie-${DATE}-${SHA}"
WORK="$OUT_DIR/$NAME"

[ -f dist/index.html ] || { echo "dist/ manquant : lancer npm run build d'abord" >&2; exit 1; }

rm -rf "$WORK" && mkdir -p "$WORK"

# Built site + routing rules so it runs as-is on the usual hosts.
cp -R dist "$WORK/site"
cp vercel.json "$WORK/site/vercel.json"
printf '/*    /index.html   200\n' > "$WORK/site/_redirects"
cat > "$WORK/site/.htaccess" <<'EOF'
# Hébergement Apache (ex. Amen) : toutes les adresses du site affichent index.html
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
EOF

mkdir -p "$WORK/code-source"
git archive HEAD | tar -x -C "$WORK/code-source"

# Bundle the "main" branch so `git clone historique-complet.bundle` checks it out directly.
[ "$(git rev-parse main 2>/dev/null)" = "$(git rev-parse HEAD)" ] || { echo "HEAD doit être sur main" >&2; exit 1; }
git bundle create "$WORK/historique-complet.bundle" main 2>/dev/null

sed "s/{{DATE}}/${DATE}/" scripts/backup/LISEZ-MOI.txt > "$WORK/LISEZ-MOI - Restauration du site.txt"

(cd "$OUT_DIR" && rm -f "$NAME.zip" && zip -qr -X "$NAME.zip" "$NAME")
echo "$OUT_DIR/$NAME.zip"
