 Best places to learn GitHub Actions:

  - Official docs: https://docs.github.com/en/actions
  - Workflow syntax reference: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
  - GitHub Pages with Actions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
  - GitHub Actions Marketplace: https://github.com/marketplace?type=actions
  - Official starter workflows: https://github.com/actions/starter-workflows

  For this project specifically, start with:

  - .github/workflows/deploy.yml

  The key concepts to learn first are:

  - on: what triggers the workflow
  - jobs: isolated units of work
  - steps: commands or reusable actions inside a job
  - permissions: what the workflow token can do
  - uses: calling a reusable action like actions/checkout@v4
  - run: executing shell commands like npm run build


› also about workflows


• For GitHub Actions workflows specifically, start here:

  - Workflow basics: https://docs.github.com/en/actions/writing-workflows/about-workflows
  - Workflow syntax reference: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
  - Events that trigger workflows: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
  - Workflow commands: https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions
  - Reusing workflows: https://docs.github.com/en/actions/sharing-automations/reusing-workflows
  - Managing workflow runs: https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs

  In your project, the workflow file is:

  .github/workflows/deploy.yml

  Its structure is:

  name: Deploy to GitHub Pages

  on:
    push:
      branches:
        - main
    workflow_dispatch:

  This means it runs automatically when you push to main, and manually when you trigger it from the GitHub UI.

  jobs:
    build:
      ...
    deploy:
      needs: build

  This means there are two jobs. deploy only runs after build succeeds.

  steps:
    - uses: actions/checkout@v4
    - run: npm ci
    - run: npm run build

  Steps either use existing actions or run shell commands.

  The shortest mental model: a workflow is a YAML recipe that GitHub runs in a clean virtual machine when a trigger happens.