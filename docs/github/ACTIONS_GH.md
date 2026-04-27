# GitHub Actions

GitHub Actions workflows are YAML recipes that GitHub runs in a clean virtual machine when a trigger happens.

## Start Here

| Resource | Use it for | Link |
| --- | --- | --- |
| Official GitHub Actions docs | Main learning path and reference docs | https://docs.github.com/en/actions |
| Workflow basics | Understanding what workflows are and how they run | https://docs.github.com/en/actions/writing-workflows/about-workflows |
| Workflow syntax reference | Looking up exact YAML syntax | https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions |
| Events that trigger workflows | Choosing when a workflow should run | https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows |
| Workflow commands | Using commands that communicate with the runner | https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions |
| Reusing workflows | Sharing workflow logic across repositories | https://docs.github.com/en/actions/sharing-automations/reusing-workflows |
| Managing workflow runs | Viewing, rerunning, and managing workflow executions | https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs |
| GitHub Pages with Actions | Deploying GitHub Pages through custom workflows | https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages |
| GitHub Actions Marketplace | Finding reusable actions | https://github.com/marketplace?type=actions |
| Official starter workflows | Example workflow templates from GitHub | https://github.com/actions/starter-workflows |

## Project Workflow

For this project, start with:

```text
.github/workflows/deploy.yml
```

That workflow deploys the site to GitHub Pages.

## Key Concepts

| Concept | Meaning |
| --- | --- |
| `on` | Defines what triggers the workflow. |
| `jobs` | Defines isolated units of work. |
| `steps` | Defines commands or reusable actions inside a job. |
| `permissions` | Controls what the workflow token can do. |
| `uses` | Calls a reusable action, such as `actions/checkout@v4`. |
| `run` | Executes shell commands, such as `npm run build`. |

## Workflow Structure

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:
```

This workflow runs automatically when changes are pushed to `main`. It can also be triggered manually from the GitHub UI with `workflow_dispatch`.

```yaml
jobs:
  build:
    # ...

  deploy:
    needs: build
```

This defines two jobs. The `deploy` job runs only after `build` succeeds.

```yaml
steps:
  - uses: actions/checkout@v4
  - run: npm ci
  - run: npm run build
```

Steps either use existing actions or run shell commands.

## Mental Model

1. A trigger happens, such as a push to `main`.
2. GitHub starts a clean runner.
3. The workflow runs its jobs.
4. Each job runs its steps in order.
5. Later jobs can depend on earlier jobs with `needs`.
