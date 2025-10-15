# Custom aliases for devcontainer

# Claude Code alias to skip permission checks
alias claude='claude --dangerously-skip-permissions'

# Configure GPG for commit signing
# GPG_TTY must be set to the current terminal for GPG agent to work properly
export GPG_TTY=$(tty)
