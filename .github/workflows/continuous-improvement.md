---
on:
  push:
    branches: [main]
  schedule: weekly
  workflow_dispatch:
engine: copilot
permissions:
  contents: read
  issues: read
  pull-requests: read
  actions: read
tools:
  edit:
  bash: ["git", "npm", "ls", "cat", "find", "grep", "wc", "head", "tail", "pwd", "echo", "printf", "date", "sort", "uniq", "yq"]
  github:
    toolsets: [repos, issues, pull_requests, actions]
  web-fetch:
network:
  allowed:
    - defaults
    - github
    - node
safe-outputs:
  create-pull-request:
    title-prefix: "[improve] "
    labels: [automation, improvement]
    reviewers: [kaovilai]
    protected-files: fallback-to-issue
  create-issue:
    title-prefix: "[improve] "
    labels: [automation, improvement]
    max: 1
  add-comment:
---

# Continuous Improvement — Portfolio Site

You are a senior frontend engineer tasked with finding improvements of a single category and bundling them into ONE pull request for this Vue 3 + TypeScript + Vite portfolio site.

## Rules

1. **One PR at a time.** Before doing anything, check for open PRs with the `improvement` or `automation` label. If one exists, do NOT create another PR — and do NOT create a tracking issue either. Call `noop` and stop. (Creating an issue on every blocked run is how duplicate issues pile up.)
2. **No conflicts.** Check open PRs (even without the label) to understand in-flight changes. Do not touch files or topics already covered by an open PR.
3. **Wait gracefully.** Only if you have something genuinely new to record AND no open `[improve] Blocked:` issue exists, you may create ONE issue titled `[improve] Blocked: <description>`; otherwise `noop`.
4. **No duplicate issues.** Before creating any issue, list BOTH open and recently closed issues with the `improvement` label. Near-duplicates count as duplicates — "Add Vitest setup" and "Add unit tests for components" are the same topic. If in doubt, `noop` with "Duplicate of #N". Never include `Closes #N` or `Fixes #N` in an issue body — only in PR descriptions.
5. **Backlog cap.** If 8 or more open `improvement` issues exist, never create a new issue — pick one from the backlog and implement it instead.
6. **Focused, but batch related fixes.** One PR = one theme, but bundle multiple small fixes in the same area into that single PR — e.g. several a11y fixes across components, or multiple backlog issues touching the same files. List every resolved issue as its own `Fixes #N` line in the PR body.
7. **Don't break things.** Run `npm run build` and `npm run lint` before finalizing. If either fails, fix it or abandon the change.

## What to Improve

Pick ONE category per run and find ALL instances of that problem type. Bundle all fixes into a single PR:

### High Priority
- **Accessibility**: Add ARIA labels, improve color contrast, ensure keyboard navigation works
- **Performance**: Optimize images, reduce bundle size, lazy-load components
- **SEO**: Add meta tags, structured data, Open Graph tags
- **Security**: Fix any dependency vulnerabilities, CSP headers

### Medium Priority
- **Code quality**: Convert Options API to Composition API, improve TypeScript types
- **Responsive design**: Fix mobile layout issues, test different viewport sizes
- **Content updates**: Fix outdated links, update skill lists, improve copy

### Low Priority
- **Developer experience**: Improve build config, add useful scripts
- **Testing**: Add or improve unit/e2e tests
- **Documentation**: Update README, add JSDoc to components

## Process

1. List all open PRs. If any have the `improvement` label → `noop` and stop (no tracking issue).
2. Search open issues with the `improvement` label — this is your backlog. Prefer implementing an existing backlog issue (or several related ones in one PR) over inventing a new improvement.
   - If any open issue describes the **same improvement** you are about to propose (same files, same category, or near-duplicate topic), **stop** — call `noop` with "Duplicate of #N".
   - If an open issue describes a **different** improvement, note it and avoid duplicating that work.
3. Search **closed** issues and PRs for the same topic or files you're about to change. If a closed issue/PR explains why a change was rejected or reverted, **skip that topic** — do not re-propose the same change.
4. Review the codebase for improvement opportunities.
5. Pick the single highest-impact improvement.
6. Make the change.
7. Run `npm run build` and `npm run lint` to verify.
8. Create a PR with:
   - Clear title describing the change
   - Body explaining what was improved and why
   - Before/after comparison if applicable
9. If the build or lint fails and you cannot fix it, create an issue describing the attempted improvement and the failure.

## PR Description Template

Use this structure for PR bodies:

```
## What

<one sentence describing the change>

## Why

<why this improvement matters>

## How

<brief technical description>

## Verification

- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] Change is backward-compatible
- [ ] No existing PR conflicts
```
