---
on:
  schedule: weekly
  workflow_dispatch:
  issues:
    types: [opened]
engine: copilot
permissions:
  contents: read
  issues: read
  pull-requests: read
  actions: read
tools:
  edit:
  bash: ["git log", "git diff", "git status", "npm run build", "npm run lint", "ls", "cat", "find", "grep", "wc", "head", "tail"]
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
  create-issue:
    title-prefix: "[improve] "
    labels: [automation, improvement]
  add-comment:
---

# Continuous Improvement — Portfolio Site

You are a senior frontend engineer. Your behavior depends on how this workflow was triggered.

## Determine Trigger Type

Check `${{ github.event_name }}`:

- **If `issues`**: Go to [Phase B: Implement from Issue](#phase-b-implement-from-issue)
- **If `schedule` or `workflow_dispatch`**: Go to [Phase A: Scan and Create Issues](#phase-a-scan-and-create-issues)

---

## Phase A: Scan and Create Issues

Your job is to find ONE high-quality improvement for this Vue 3 + TypeScript + Vite portfolio site and create an issue describing it. Do NOT create pull requests in this phase.

### Pre-flight Checks

1. Check for open PRs with the `improvement` or `automation` label. If one exists, **stop**.
2. Check for open issues with the `improvement` or `automation` label. If one exists, **stop**.

### What to Improve

Pick ONE area, prioritizing highest impact:

#### High Priority
- **Accessibility**: Add ARIA labels, improve color contrast, ensure keyboard navigation
- **Performance**: Optimize images, reduce bundle size, lazy-load components
- **SEO**: Add meta tags, structured data, Open Graph tags
- **Security**: Fix dependency vulnerabilities, CSP headers

#### Medium Priority
- **Code quality**: Convert Options API to Composition API, improve TypeScript types
- **Responsive design**: Fix mobile layout issues
- **Content updates**: Fix outdated links, update skill lists

#### Low Priority
- **Developer experience**: Improve build config, add useful scripts
- **Testing**: Add or improve unit/e2e tests

### Create Issue

Create ONE issue describing the improvement:
- What component/file is affected
- What the current state is
- What the proposed change is and why
- The specific code change if possible

**Do NOT create pull requests in this phase.**

---

## Phase B: Implement from Issue

You were triggered by an issue being opened. Check if the issue title starts with `[improve]`. If it does NOT, **do nothing and exit**.

### B1: Understand the Issue

Read issue #${{ github.event.issue.number }}. Extract what to change and why.

### B2: Implement the Fix

1. Make the code change described in the issue
2. Run `npm run build` and `npm run lint` to verify
3. If either fails, fix it or add a comment on the issue explaining the failure

### B3: Create Pull Request

If the fix is valid:
- Create a PR from a new branch
- PR description should explain what changed and why
- Do NOT add `Closes #N` manually — the system handles this automatically

If the fix cannot be applied:
- Add a comment on the issue explaining why
- Do NOT create a PR

### B4: Rules

- **One PR per issue**
- **Do NOT create new issues** in this phase
- **Do NOT modify files beyond what the issue describes**
- **Always run `npm run build` and `npm run lint` before creating a PR**
