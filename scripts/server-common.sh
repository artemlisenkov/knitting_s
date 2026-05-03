#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_ROOT="${APP_ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}"
ENV_FILE="${ENV_FILE:-/etc/webapp/webapp.env}"
UPLOADS_DIR="${UPLOADS_DIR:-/var/www/shared/uploads}"
SERVICE_NAME="${SERVICE_NAME:-shop}"
DEFAULT_NODE_OPTIONS="--max-old-space-size=3072"

load_server_env() {
  if [[ ! -f "$ENV_FILE" ]]; then
    echo "Missing env file: $ENV_FILE" >&2
    exit 1
  fi

  set -a
  source "$ENV_FILE"
  set +a

  export NODE_OPTIONS="${NODE_OPTIONS:-$DEFAULT_NODE_OPTIONS}"
}

prepare_uploads_link() {
  mkdir -p "$UPLOADS_DIR"
  rm -rf "$APP_ROOT/.next/standalone/public/uploads"
  ln -s "$UPLOADS_DIR" "$APP_ROOT/.next/standalone/public/uploads"
}

build_standalone_bundle() {
  cd "$APP_ROOT"
  npm ci
  npm run build
  ./scripts/prepare-standalone.sh
  prepare_uploads_link
}

restart_service() {
  sudo systemctl restart "$SERVICE_NAME"
  sudo systemctl status "$SERVICE_NAME" --no-pager
}
