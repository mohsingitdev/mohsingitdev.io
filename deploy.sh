#!/usr/bin/env bash
# Publish this folder to https://github.com/mohsingitdev/mohsingitdev.io (Pages: main, /docs)
# Site URL: https://mohsingitdev.github.io/mohsingitdev.io/  (no custom domain)
set -euo pipefail
REPO="https://github.com/mohsingitdev/mohsingitdev.io.git"
SRC="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
git clone "$REPO" "$TMP/repo"
cd "$TMP/repo"
# replace site files with this project; keep .git and the business/ documents
find . -mindepth 1 -maxdepth 1 ! -name .git ! -name business -exec rm -rf {} +
rsync -a --exclude node_modules --exclude docs --exclude .git --exclude .DS_Store \
  --exclude mohsingitdev.io --exclude business --exclude CNAME "$SRC/" ./
npm install
npm run build
rm -f docs/CNAME
if grep -rq "mohsinqureshi\.io" docs/index.html; then echo "ERROR: old domain still in build"; exit 1; fi
touch docs/.nojekyll
git add -A
git commit -m "Deploy portfolio v3" || { echo "nothing to commit"; exit 0; }
git push origin main
echo "Pushed. Live in ~1-2 min: https://mohsingitdev.github.io/mohsingitdev.io/"
