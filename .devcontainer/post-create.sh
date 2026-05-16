#!/bin/bash
set -euo pipefail

# Copy Claude config if not already present
if [ ! -f /home/node/.claude/.claude.json ]; then
  cp /workspace/.devcontainer/.claude.json /home/node/.claude/.claude.json
fi

# Ensure gh-aw extension version matches the compiled workflow version in the lock file.
# The lock file is .github/aw/actions-lock.json (JSON format), which records the
# gh-aw-actions/setup version corresponding to the gh-aw compiler version used.
install_gh_aw_release() {
  local version="$1"
  local arch asset tmp_dir

  arch="$(uname -m)"
  case "$arch" in
    x86_64) asset="linux-amd64" ;;
    aarch64) asset="linux-arm64" ;;
    armv7l) asset="linux-arm" ;;
    i686) asset="linux-386" ;;
    *)
      echo "Warning: unsupported architecture for gh-aw install: ${arch} (supported: x86_64, aarch64, armv7l, i686)"
      return 1
      ;;
  esac

  tmp_dir="$(mktemp -d)"
  mkdir -p "${tmp_dir}/gh-aw-extension/gh-aw"
  curl -fLsS "https://github.com/github/gh-aw/releases/download/${version}/${asset}" -o "${tmp_dir}/gh-aw-extension/gh-aw/gh-aw"
  chmod +x "${tmp_dir}/gh-aw-extension/gh-aw/gh-aw"
  gh extension install "${tmp_dir}/gh-aw-extension/gh-aw"
  rm -rf "${tmp_dir}"
}

if [ -f /workspace/.github/aw/actions-lock.json ]; then
  LOCK_VERSION=$(jq -r '.entries | to_entries[] | select(.key | startswith("github/gh-aw-actions/setup@")) | .value.version' /workspace/.github/aw/actions-lock.json 2>/dev/null | head -1 || true)
  if [ -z "$LOCK_VERSION" ]; then
    echo "Warning: could not parse gh-aw version from /workspace/.github/aw/actions-lock.json, skipping upgrade"
  else
    INSTALLED_VERSION=$(gh aw version 2>/dev/null | grep -Eo 'v[0-9]+\.[0-9]+\.[0-9]+' | head -1 || echo "none")
    if [ "$LOCK_VERSION" != "$INSTALLED_VERSION" ]; then
      echo "Upgrading gh-aw from ${INSTALLED_VERSION} to ${LOCK_VERSION}..."
      gh extension remove aw 2>/dev/null || true
      install_gh_aw_release "${LOCK_VERSION}" || echo "Warning: gh-aw upgrade failed, using version ${INSTALLED_VERSION}"
    else
      echo "gh-aw ${INSTALLED_VERSION} matches lock file, no upgrade needed"
    fi
  fi
else
  echo "No actions-lock.json found, skipping gh-aw version check"
fi
