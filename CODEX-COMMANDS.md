# Codex CLI Slash Commands

Reference for the built-in slash commands documented on the OpenAI page: <https://developers.openai.com/codex/cli/slash-commands>.

Source checked: April 24, 2026.

## How Slash Commands Work

- Type `/` in the composer to open the slash-command picker.
- Start typing to filter commands.
- If a task is already running, type a slash command and press `Tab` to queue it for the next turn.
- Some commands open an interactive picker instead of executing immediately.
- A few commands have aliases:
  - `/exit` is the same as `/quit`
  - `/approvals` still works as an alias for `/permissions`
  - `/clean` still works as an alias for `/stop`

## Session Control

### `/model`

Choose the active model and, when supported, the reasoning effort.

Use it when you want to switch between a lighter model for speed and a stronger model for deeper work.

### `/fast`

Toggle Fast mode for supported models.

Use `/fast on`, `/fast off`, or `/fast status` when you want to trade depth for speed or check the current setting.

### `/personality`

Choose the communication style for responses.

Useful when you want Codex to be more concise, more explanatory, or less stylized without rewriting your instructions.

Notes:

- Supported personalities are `friendly`, `pragmatic`, and `none`.
- If the active model does not support personality instructions, the command is hidden.

### `/plan`

Switch the current conversation into plan mode and optionally send an inline planning prompt.

Use it when you want Codex to propose an execution plan before implementation.

Example:

```text
/plan Propose a migration plan for this service
```

Note: this command is temporarily unavailable while a task is already running.

### `/new`

Start a new conversation inside the same CLI session.

Use it when you want a fresh chat context but do not need to leave the terminal.

### `/clear`

Clear the terminal and start a fresh chat.

Use it when you want both a new conversation and a clean screen.

Important difference:

- `/clear` resets the visible transcript and starts a new chat.
- `Ctrl+L` only clears the terminal view and keeps the current chat.

### `/resume`

Resume a saved conversation from the session list.

Use it to continue an older CLI session without starting over.

### `/fork`

Fork the current conversation into a new thread.

Use it when you want to explore an alternate approach without losing the current transcript.

### `/agent`

Switch the active agent thread.

Use it to inspect or continue work in a spawned subagent thread.

### `/quit`

Exit the CLI immediately.

Use it when you are done with the session.

### `/exit`

Alias for `/quit`.

## Permissions, Sandbox, and Experiments

### `/permissions`

Set what Codex can do without asking first.

Use it to relax or tighten approval requirements mid-session, for example switching between more automatic execution and a review-heavy mode.

### `/sandbox-add-read-dir`

Grant sandbox read access to an extra directory.

Use it when sandboxed commands need to read from an absolute path outside the current readable roots.

Notes:

- This command is available only when the CLI is running natively on Windows.
- The path must be an existing absolute directory.

### `/experimental`

Toggle experimental features.

Use it to enable optional features such as subagents or other in-progress capabilities exposed by the CLI.

Note: some changes may require a restart.

## Inspection and Status

### `/status`

Display session configuration and token usage.

Use it to confirm the active model, approval policy, writable roots, and remaining context capacity.

### `/debug-config`

Print config-layer and requirements diagnostics.

Use it when effective settings do not match what you expect from `config.toml`.

It is especially useful for debugging:

- config precedence
- policy sources
- allowed approval policies
- allowed sandbox modes
- configured MCP servers
- rules and experimental network settings

### `/statusline`

Configure TUI footer status-line fields interactively.

Use it to pick and reorder footer items such as model, context usage, rate limits, branch, tokens, session id, current directory, and Codex version.

### `/title`

Configure the terminal window or tab title interactively.

Use it to show items such as project, thread, branch, model, status, spinner, or task progress in the terminal title bar.

### `/ps`

Show background terminals and recent output.

Use it to check long-running commands without leaving the main transcript.

Note: background terminals appear when `unified_exec` is in use; otherwise the list may be empty.

## Conversation and Context Management

### `/compact`

Summarize the visible conversation to free tokens.

Use it after long exchanges to preserve important context while reducing token pressure.

### `/copy`

Copy the latest completed Codex output.

Use it when you want the latest finished response or plan text in your clipboard without manual selection.

Shortcut: `Ctrl+O`

Notes:

- If a turn is still running, it copies the latest completed output, not the in-progress one.
- It is unavailable before the first completed output and immediately after a rollback.

### `/mention`

Attach a file or folder to the conversation.

Use it to direct Codex to specific paths you want it to inspect next.

Example:

```text
/mention src/lib/api.ts
```

## Code, Review, and Repository Work

### `/diff`

Show the Git diff, including untracked files.

Use it to review edits before testing, staging, or committing.

### `/review`

Ask Codex to review the current working tree.

Use it after changes are made when you want a second pass focused on behavior changes, regressions, and missing tests.

Note: it uses the current session model unless `review_model` is set in `config.toml`.

### `/init`

Generate an `AGENTS.md` scaffold in the current directory.

Use it to create persistent repository instructions for future Codex sessions.

## Integrations, Apps, Plugins, and MCP

### `/mcp`

List configured Model Context Protocol tools.

Use it to confirm which MCP servers and tools Codex can call in the current session.

### `/apps`

Browse apps and insert them into your prompt.

Use it when you want to attach an app as `$app-slug` and then ask Codex to use it.

### `/plugins`

Browse installed and discoverable plugins.

Use it to inspect plugin capabilities, install suggested plugins, or manage whether installed plugins are enabled.

## Support and Account

### `/feedback`

Send logs and diagnostics to the Codex maintainers.

Use it when you need to report an issue or provide debugging information to support.

### `/logout`

Sign out of Codex.

Use it to clear local credentials, especially on a shared machine.

## Common Workflows

### 1. Start a new task cleanly

```text
/clear
/model
/permissions
```

Typical use:

- Start with a fresh screen and conversation.
- Pick the model for the job.
- Set the approval mode before Codex begins work.

### 2. Plan before editing

```text
/plan Propose the implementation plan
/mention path/to/file
/status
```

Typical use:

- Move into planning mode.
- Attach the most relevant files.
- Verify the session state before execution.

### 3. Review code changes safely

```text
/diff
/review
/copy
```

Typical use:

- Inspect the raw Git diff.
- Ask Codex for a review focused on risks and missing tests.
- Copy the review summary or next-step plan.

### 4. Keep a long session under control

```text
/status
/compact
/statusline
```

Typical use:

- Check context pressure and session details.
- Compact the conversation when it gets long.
- Make context and token information visible in the footer.

### 5. Explore alternatives without losing progress

```text
/fork
/agent
/resume
```

Typical use:

- Fork the current thread to try a second approach.
- Switch between agent or thread contexts.
- Return to saved sessions later.

### 6. Work with external tools and integrations

```text
/mcp
/apps
/plugins
```

Typical use:

- Confirm which MCP tools are available.
- Add an app mention to the prompt.
- Inspect or enable plugins for additional capabilities.

### 7. Manage long-running terminal work

```text
/ps
/stop
```

Typical use:

- Check background command progress.
- Stop all background terminals for the current session when needed.

## Practical Recommendations

- Use `/status` early if you are unsure which model or approval mode is active.
- Use `/mention` before asking for file-specific edits or reviews.
- Use `/diff` and `/review` together before committing.
- Use `/compact` proactively in long sessions instead of waiting until context gets tight.
- Use `/fork` when you want parallel exploration without losing the original thread.
- Use `/init` once per repo or subdirectory when recurring project instructions would help.
