# GitHub Copilot CLI - Slash Commands Reference

Quick reference for all available slash commands in GitHub Copilot CLI.

## 🌐 Global Controls

| Command | Description                      |
| ------- | -------------------------------- |
| `/help` | Show full help documentation     |
| `/`     | Browse available commands        |
| `@`     | Mention files in your prompt     |
| `#`     | Mention issues and pull requests |
| `!`     | Execute shell command directly   |

## 🚀 Agent Environment

| Command   | Description                                         |
| --------- | --------------------------------------------------- |
| `/init`   | Initialize Copilot instructions for this repository |
| `/agent`  | Browse and select from available agents (if any)    |
| `/skills` | Manage skills for enhanced capabilities             |
| `/mcp`    | Manage MCP server configuration                     |
| `/plugin` | Manage plugins and plugin marketplaces              |

## 🤖 Agents / Subagents

| Command     | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `/model`    | Select AI model to use (Claude Sonnet 4.5, Claude Sonnet 4, GPT-5, etc.) |
| `/delegate` | Send session to GitHub and Copilot will create a PR                      |
| `/fleet`    | Enable fleet mode for parallel subagent execution                        |
| `/tasks`    | View and manage background tasks (subagents and shell sessions)          |

## 💻 Code Operations

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `/ide`            | Connect to an IDE workspace                                  |
| `/diff`           | Review the changes made in the current directory             |
| `/pr`             | Operate on pull requests for the current branch              |
| `/review`         | Run code review agent to analyze changes                     |
| `/lsp`            | Manage language server configuration                         |
| `/terminal-setup` | Configure terminal for multiline input support (shift+enter) |

## 🔒 Permissions

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `/allow-all`           | Enable all permissions (tools, paths, and URLs)     |
| `/add-dir`             | Add a directory to the allowed list for file access |
| `/list-dirs`           | Display all allowed directories for file access     |
| `/cwd`                 | Change working directory or show current directory  |
| `/reset-allowed-tools` | Reset the list of allowed tools                     |

## 📁 Session Management

| Command    | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `/resume`  | Switch to a different session (optionally specify session ID or task ID) |
| `/rename`  | Rename the current session, or auto-generate a name                      |
| `/context` | Show context window token usage and visualization                        |
| `/usage`   | Display session usage metrics and statistics                             |
| `/session` | View and manage sessions (with subcommands for details)                  |
| `/compact` | Summarize conversation history to reduce context window usage            |
| `/share`   | Share session or research report to markdown, HTML, or GitHub gist       |
| `/remote`  | Enable remote control of your session from GitHub web and mobile         |
| `/copy`    | Copy the last response to the clipboard                                  |
| `/rewind`  | Rewind the last turn and revert file changes                             |

## ℹ️ Help & Settings

| Command          | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| `/changelog`     | Display changelog for CLI versions (add 'summarize' for AI summary)  |
| `/feedback`      | Provide feedback about the CLI                                       |
| `/theme`         | View or set color mode                                               |
| `/statusline`    | Configure status line items                                          |
| `/footer`        | Configure footer items                                               |
| `/update`        | Update the CLI to the latest version                                 |
| `/version`       | Display version information and check for updates                    |
| `/experimental`  | Show experimental features, or enable/disable experimental mode      |
| `/clear`         | Abandon session and start fresh                                      |
| `/instructions`  | View and toggle custom instruction files                             |
| `/streamer-mode` | Toggle streamer mode (hides preview model names/quota for streaming) |

## 🔍 Other Commands

| Command     | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| `/ask`      | Ask a quick side question without adding to conversation history                           |
| `/env`      | Show loaded environment details (instructions, MCP servers, skills, agents, plugins, LSPs) |
| `/exit`     | Exit the CLI                                                                               |
| `/login`    | Log in to Copilot                                                                          |
| `/logout`   | Log out of an OAuth login session                                                          |
| `/new`      | Start a new conversation                                                                   |
| `/plan`     | Create an implementation plan before coding                                                |
| `/research` | Run deep research investigation using GitHub search and web sources                        |
| `/restart`  | Restart the CLI, preserving the current session                                            |
| `/undo`     | Rewind the last turn and revert file changes (same as /rewind)                             |
| `/user`     | Manage GitHub user list                                                                    |

## ⌨️ Keyboard Shortcuts

| Shortcut     | Description                          |
| ------------ | ------------------------------------ |
| `Shift+Tab`  | Switch modes (normal/plan/autopilot) |
| `Ctrl+S`     | Run command, preserve input          |
| `Ctrl+O/E`   | Expand all timeline                  |
| `Ctrl+C`     | Cancel (press twice to exit)         |
| `Esc`        | Cancel                               |
| `Ctrl+D`     | Shutdown                             |
| `Ctrl+L`     | Clear screen                         |
| `Ctrl+X → O` | Open most recent link                |

### Input Navigation

| Shortcut   | Description                             |
| ---------- | --------------------------------------- |
| `Ctrl+A`   | Go to line start                        |
| `Ctrl+E`   | Go to line end                          |
| `Ctrl+H`   | Delete previous character               |
| `Ctrl+W`   | Delete previous word                    |
| `Ctrl+U`   | Delete from cursor to beginning of line |
| `Ctrl+K`   | Delete from cursor to end of line       |
| `Meta+←/→` | Move cursor by word                     |
| `Ctrl+G`   | Edit prompt in $EDITOR                  |

## 🔧 Custom Instructions

Copilot respects instructions from these locations:

- `CLAUDE.md`
- `GEMINI.md`
- `AGENTS.md` (in git root & cwd)
- `.github/instructions/**/*.instructions.md` (in git root & cwd)
- `.github/copilot-instructions.md`
- `$HOME/.copilot/copilot-instructions.md`
- `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` (additional directories via env var)

## 📚 More Information

- Official Documentation: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli
- Run `/help` in the CLI for interactive help
