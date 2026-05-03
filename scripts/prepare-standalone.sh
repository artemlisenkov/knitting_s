#!/usr/bin/env bash

set -euo pipefail

if [[ ! -f ".next/standalone/server.js" ]]; then
  echo "Missing .next/standalone/server.js. Run npm run build first." >&2
  exit 1
fi

mkdir -p .next/standalone/.next
rm -rf .next/standalone/public
rm -rf .next/standalone/.next/static
cp -R public .next/standalone/
cp -R .next/static .next/standalone/.next/

echo "Standalone bundle prepared in .next/standalone"
