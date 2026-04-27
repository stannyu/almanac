import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  almanacSidebar: [
    'CHANNEL',
    'CODEX-COMMANDS',
    {
      type: 'category',
      label: 'AI',
      link: {
        type: 'doc',
        id: 'ai/index',
      },
      items: [
        'ai/tools/codex-slash-commands',
        'ai/tools/copilot-cli-commands',
        'ai/tools/ghostty',
        {
          type: 'category',
          label: 'Skills',
          items: ['ai/skills/skills-links'],
        },
      ],
    },
    {
      type: 'category',
      label: 'LLM',
      link: {
        type: 'doc',
        id: 'llm/index',
      },
      items: ['llm/rag/index', 'llm/prompt-hacking/index'],
    },
    {
      type: 'category',
      label: 'Health',
      items: ['health/hip-exercises'],
    },
    {
      type: 'category',
      label: 'Github',
      items: ['github/ACTIONS_GH'],
    },
  ],
};

export default sidebars;
