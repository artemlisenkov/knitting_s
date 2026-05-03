#!/usr/bin/env bash

set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/server-common.sh"

load_server_env

cd "$APP_ROOT/.next/standalone"
exec env HOSTNAME="${HOSTNAME:-0.0.0.0}" PORT="${PORT:-3000}" node server.js
