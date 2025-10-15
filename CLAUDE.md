# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Tiger Kaovilai's personal portfolio website built with Vue 3, TypeScript, and Vite. The site features a modern, responsive design with typing animations and deploys to GitHub Pages.

## Development Commands

### Setup and Development
```bash
npm install                    # Install dependencies
npm run dev                    # Start Vite development server with hot-reload
npm run build                  # Build for production (outputs to docs/ for GitHub Pages)
npm run preview                # Preview production build locally
npm run lint                   # Lint and fix code style issues
```

### Testing
```bash
npm run test:unit              # Run Jest unit tests (legacy - may not be fully configured)
npm run test:e2e               # Run Nightwatch end-to-end tests (legacy - may not be fully configured)
```

## Architecture

### Build Configuration
- **Vite** as the build tool (migrated from Vue CLI)
- **Production builds** output to `docs/` directory for GitHub Pages deployment
- **vite.config.ts** configures build output directory and path aliases (`@` points to `src/`)
- **TypeScript** support with Vue 3
- Entry point is `index.html` which loads `/src/main.ts`

### Component Structure
- **App.vue**: Root component that imports and renders HelloWorld and Footer
- **HelloWorld.vue**: Main content component containing portfolio information, skills, and social links
- **TypingComponent.vue**: Reusable typing animation component with configurable delays
- **Home.vue**: Additional page component
- **Footer.vue**: Site footer component

### Styling
- Uses CSS custom properties for NCSU-themed color scheme
- Responsive design with flexbox layouts
- Dark theme with red accent colors
- External devicons library for technology icons

### CI/CD
- **GitHub Actions** workflow runs on push/PR to main branch (node.js.yml)
- Automatically runs `npm run build` and `npm run lint` on Node.js 22.x
- Deploys to GitHub Pages from the `docs/` folder
- Ignores changes to docs/, workflows, and markdown files to prevent unnecessary builds

## Key Features
- Animated typing effects throughout the site
- Responsive design optimized for mobile and desktop
- GitHub Pages deployment via `docs/` folder
- Integration with external services (GitHub stats, Calendly scheduling)
- TypeScript for type safety

## Development Notes
- The site uses Vue 3 with the Options API (not Composition API)
- TypingComponent supports various configuration options for animation behavior
- ESLint configured with Vue 3 and TypeScript rules
- Component names have relaxed rules: `vue/multi-word-component-names` and `vue/no-reserved-component-names` are disabled
- Legacy config files (vue.config.js, babel.config.js, jest.config.js) still exist but Vite is the active build tool

## DevContainer
- Includes Claude Code CLI with Playwright MCP server integration
- Pre-configured for browser automation and screenshot capabilities
- See `.devcontainer/README.md` for details on Playwright integration