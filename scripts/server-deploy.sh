#!/usr/bin/env bash

set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/server-common.sh"

cd "$APP_ROOT"

if [[ "${SKIP_GIT_PULL:-0}" != "1" ]]; then
  git pull --ff-only
fi

load_server_env
build_standalone_bundle
restart_service
