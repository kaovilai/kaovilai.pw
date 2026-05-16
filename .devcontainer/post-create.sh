#!/bin/bash
set -euo pipefail

# Copy Claude config if not already present
if [ ! -f /home/node/.claude/.claude.json ]; then
  cp /workspace/.devcontainer/.claude.json /home/node/.claude/.claude.json
fi

# Ensure gh-aw extension version matches the compiled workflow version in the lock file.
# The lock file is .github/aw/actions-lock.json (JSON format), which records the
# gh-aw-actions/setup version corresponding to the gh-aw compiler version used.
if [ -f /workspace/.github/aw/actions-lock.json ]; then
  LOCK_VERSION=$(jq -r '.entries | to_entries[] | select(.key | startswith("github/gh-aw-actions/setup@")) | .value.version' /workspace/.github/aw/actions-lock.json 2>/dev/null | head -1 || true)
  if [ -z "$LOCK_VERSION" ]; then
    echo "Warning: could not parse gh-aw version from /workspace/.github/aw/actions-lock.json, skipping upgrade"
  else
    INSTALLED_VERSION=$(gh extension list 2>/dev/null | grep 'gh-aw' | awk '{print $3}' || echo "none")
    if [ "$LOCK_VERSION" != "$INSTALLED_VERSION" ]; then
      echo "Upgrading gh-aw from ${INSTALLED_VERSION} to ${LOCK_VERSION}..."
      gh extension remove aw 2>/dev/null || true
      gh extension install github/gh-aw@${LOCK_VERSION} || echo "Warning: gh-aw upgrade failed, using version ${INSTALLED_VERSION}"
    else
      echo "gh-aw ${INSTALLED_VERSION} matches lock file, no upgrade needed"
    fi
  fi
else
  echo "No actions-lock.json found, skipping gh-aw version check"
fi
