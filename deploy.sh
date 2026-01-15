#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/home/chaves/serg_strapi"
BRANCH="main"
NODE_ENV="production"

ts() { date +"%Y-%m-%d %H:%M:%S"; }
log() { echo "[$(ts)] $*"; }

cd "$APP_DIR"

log "Pulling latest code (origin/$BRANCH) with fast-forward only..."
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

log "Installing dependencies..."
export NODE_ENV="$NODE_ENV"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

log "Cleaning build artifacts..."
rm -rf .cache .strapi build dist

log "Building Strapi admin..."
npm run build

log "Restarting alwaysdata Node.js site (if configured)..."
# Restart endpoint example from alwaysdata docs:
# POST https://api.alwaysdata.com/v1/site/<SITE_ID>/restart/  [oai_citation:1‡Alwaysdata Help](https://help.alwaysdata.com/en/api/examples/)
if [ -n "${ALWAYS_API_KEY:-}" ] && [ -n "${ALWAYS_ACCOUNT:-}" ] && [ -n "${ALWAYS_SITE_ID:-}" ]; then
  curl -fsS -X POST \
    --basic --user "${ALWAYS_API_KEY} account=${ALWAYS_ACCOUNT}:" \
    "https://api.alwaysdata.com/v1/site/${ALWAYS_SITE_ID}/restart/" \
    >/dev/null
  log "Restart requested via alwaysdata API."
else
  log "SKIP restart: set ALWAYS_API_KEY, ALWAYS_ACCOUNT, ALWAYS_SITE_ID to auto-restart."
  log "Manual restart: alwaysdata panel → Web → Sites → your Node.js site → Restart."
fi

log "Done."