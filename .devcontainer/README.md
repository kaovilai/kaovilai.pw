# DevContainer with Playwright MCP Integration

This devcontainer is configured to work with Claude Code and includes the Playwright MCP server for browser automation capabilities.

## Features

- **Claude Code CLI**: Pre-installed and configured
- **Playwright MCP Server**: Integrated for browser automation and screenshot capabilities
- **Browser Dependencies**: All required system libraries for running Chromium headless
- **Network Security**: Firewall configuration for controlled network access

## Playwright MCP Server

The Playwright MCP server is configured in `.claude.json` and provides browser automation tools to Claude Code, including:

- Navigate to URLs
- Click elements
- Fill forms
- Take screenshots
- Execute JavaScript
- Interact with page elements

### Usage

Once the devcontainer is rebuilt, Claude Code will automatically have access to Playwright MCP tools. You can use these tools through natural language requests like:

- "Take a screenshot of http://localhost:5173"
- "Navigate to my site and click the contact button"
- "Fill out the form with test data"

### Configuration

The MCP server configuration is in `.devcontainer/.claude.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

## Rebuilding the Container

After making changes to the Dockerfile or devcontainer configuration:

1. In VS Code: Command Palette → "Dev Containers: Rebuild Container"
2. Or use the rebuild button in the bottom-left corner

## System Dependencies

The container includes these Playwright browser dependencies:
- libnspr4, libnss3, libdbus-1-3
- libatk1.0-0, libatk-bridge2.0-0
- libcups2, libxkbcommon0, libatspi2.0-0
- libxcomposite1, libxdamage1, libxfixes3
- libxrandr2, libgbm1, libasound2
- fonts-liberation, fonts-noto-color-emoji
- And other required X11 and graphics libraries

## Testing the Integration

To verify Playwright MCP is working:

```bash
# Check if Playwright MCP can be run
npx -y @playwright/mcp@latest --version

# The MCP tools will be automatically available in Claude Code sessions
```

## Troubleshooting

If browser automation isn't working:

1. Ensure the container has been rebuilt after adding the Dockerfile changes
2. Check that `.claude.json` is correctly copied to `/home/node/.claude/.claude.json`
3. Verify browser dependencies are installed: `dpkg -l | grep libnspr4`
4. Check Claude Code can access the MCP server in the session

## Additional Resources

- [Playwright MCP Documentation](https://github.com/microsoft/playwright-mcp)
- [Claude Code MCP Integration](https://docs.claude.com/en/docs/claude-code)
