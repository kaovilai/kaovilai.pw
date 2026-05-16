#!/bin/bash
set -euo pipefail

# Copy Claude config if not already present
if [ ! -f /home/node/.claude/.claude.json ]; then
  cp /workspace/.devcontainer/.claude.json /home/node/.claude/.claude.json
fi

echo "Skipping gh-aw extension install/upgrade in this environment."
