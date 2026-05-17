#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
MIN_NODE_VERSION="20.9.0"

require_command() {
  local command_name="$1"

  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "Missing required command: $command_name" >&2
    exit 1
  fi
}

check_node_version() {
  local current_version

  current_version="$(node -p "process.versions.node")"

  if ! node -e "
    const current = process.versions.node.split('.').map(Number);
    const required = '$MIN_NODE_VERSION'.split('.').map(Number);

    for (let index = 0; index < required.length; index += 1) {
      if ((current[index] ?? 0) > required[index]) process.exit(0);
      if ((current[index] ?? 0) < required[index]) process.exit(1);
    }

    process.exit(0);
  "; then
    echo "Node.js $MIN_NODE_VERSION or newer is required. Current version: $current_version" >&2
    exit 1
  fi
}

prepare_env_file() {
  cd "$APP_ROOT"

  if [[ -f ".env" || -f ".env.local" ]]; then
    return
  fi

  cp ".env.example" ".env.local"
  echo "Created .env.local from .env.example"
  echo "Update .env.local with real credentials before running the app."
}

install_dependencies() {
  cd "$APP_ROOT"
  npm ci
}

verify_native_dependencies() {
  cd "$APP_ROOT"
  node -e "require('sharp')"
}

main() {
  require_command node
  require_command npm
  check_node_version
  prepare_env_file
  install_dependencies
  verify_native_dependencies

  echo ""
  echo "Project setup complete."
  echo "Next steps:"
  echo "  1. Fill in .env.local if needed"
  echo "  2. Run: npm run dev"
}

main "$@"
