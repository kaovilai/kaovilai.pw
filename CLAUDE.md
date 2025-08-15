# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Tiger Kaovilai's personal portfolio website built with Vue 3, TypeScript, and Vue CLI. The site features a modern, responsive design with typing animations and deploys to GitHub Pages.

## Development Commands

### Setup and Development
```bash
npm install                    # Install dependencies
npm run serve                  # Start development server with hot-reload
npm run build                  # Build for production (outputs to docs/ for GitHub Pages)
npm run lint                   # Lint and fix code style issues
```

### Testing
```bash
npm run test:unit              # Run Jest unit tests
npm run test:e2e               # Run Nightwatch end-to-end tests
```

## Architecture

### Build Configuration
- **Vue CLI 4.5** with modern build mode enabled
- **Production builds** output to `docs/` directory for GitHub Pages deployment
- **Vue.config.js** sets relative public path for production builds
- **TypeScript** support with Vue 3 composition API

### Component Structure
- **App.vue**: Root component that imports and renders HelloWorld and Footer
- **HelloWorld.vue**: Main content component containing portfolio information, skills, and social links
- **TypingComponent.vue**: Reusable typing animation component with configurable delays
- **Footer.vue**: Site footer component

### Styling
- Uses CSS custom properties for NCSU-themed color scheme
- Responsive design with flexbox layouts
- Dark theme with red accent colors
- External devicons library for technology icons

### Testing Setup
- **Jest** for unit testing with Vue Test Utils
- **Nightwatch** for E2E testing with ChromeDriver
- Test files located in `tests/unit/` and `tests/e2e/`

## Key Features
- Animated typing effects throughout the site
- Responsive design optimized for mobile and desktop
- GitHub Pages deployment via `docs/` folder
- Integration with external services (GitHub stats, calendar scheduling)
- TypeScript for type safety

## Development Notes
- The site uses Vue 3 with the Options API (not Composition API)
- TypingComponent supports various configuration options for animation behavior
- Production builds use modern JavaScript with legacy fallbacks
- ESLint configured with Vue 3 and TypeScript rules