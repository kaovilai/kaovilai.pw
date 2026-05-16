#!/bin/bash
set -uo pipefail

# Copy Claude config if not already present
if [ ! -f /home/node/.claude/.claude.json ]; then
  cp /workspace/.devcontainer/.claude.json /home/node/.claude/.claude.json
fi

# Ensure gh-aw extension version matches the compiled workflow version in the lock file
if [ -f /workspace/.github/aw/actions-lock.json ]; then
  LOCK_VERSION=$(jq -r '.entries | to_entries[] | select(.key | startswith("github/gh-aw-actions/setup@")) | .value.version' /workspace/.github/aw/actions-lock.json 2>/dev/null | head -1 || true)
  INSTALLED_VERSION=$(gh extension list 2>/dev/null | grep 'gh-aw' | awk '{print $3}' || echo "none")

  if [ -n "$LOCK_VERSION" ] && [ "$LOCK_VERSION" != "$INSTALLED_VERSION" ]; then
    echo "Upgrading gh-aw from ${INSTALLED_VERSION} to ${LOCK_VERSION}..."
    gh extension remove aw 2>/dev/null || true
    gh extension install github/gh-aw@${LOCK_VERSION}
  else
    echo "gh-aw ${INSTALLED_VERSION} matches lock file, no upgrade needed"
  fi
fi
