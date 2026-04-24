import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/CHANNEL">
            Open Channel Notes
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/CODEX-COMMANDS">
            Browse Codex Commands
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Almanac documentation for AI tools, LLM patterns, and prompt engineering notes.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <Link className={styles.card} to="/docs/CHANNEL">
                <Heading as="h2">Channel Concept</Heading>
                <p>Positioning, tone, mission, and format for the educational channel.</p>
              </Link>
              <Link className={styles.card} to="/docs/CODEX-COMMANDS">
                <Heading as="h2">Codex Commands</Heading>
                <p>Reference for Codex CLI slash commands, grouped by topic and workflow.</p>
              </Link>
              <Link className={styles.card} to="/docs/ai">
                <Heading as="h2">AI Tools</Heading>
                <p>Tooling notes including Codex, Copilot CLI, and Ghostty shortcuts.</p>
              </Link>
              <Link className={styles.card} to="/docs/llm">
                <Heading as="h2">LLM Notes</Heading>
                <p>RAG patterns, prompt hacking concepts, and model-oriented documentation.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
