#!/usr/bin/env bash
# Publish this folder to https://github.com/mohsingitdev/mohsingitdev.io (Pages: main, /docs)
set -euo pipefail
REPO="https://github.com/mohsingitdev/mohsingitdev.io.git"
SRC="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
git clone "$REPO" "$TMP/repo"
cd "$TMP/repo"
git checkout main
# replace tracked files with this project (keep .git); old content stays in history
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
rsync -a --exclude node_modules --exclude docs --exclude .git --exclude .DS_Store "$SRC/" ./
npm install
npm run build
git add -A
git commit -m "Replace site with v3 build; add business toolkit (GTM, LinkedIn playbook, client pack); new README" || { echo "nothing to commit"; exit 0; }
git push origin main
echo "Pushed. Pages updates in ~1 min: https://mohsinqureshi.io/"
