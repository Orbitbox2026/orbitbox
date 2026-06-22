export const LINKS = {
  docs: 'https://docs.kentest.dev',
  github: 'https://github.com/orbitbox2026/orbitbox',
  discord: 'https://discord.gg/kentest',
  npm: 'https://www.npmjs.com/package/@kentest/kentest-cli',
  twitter: 'https://x.com/kentestdev',
} as const;

export const NAV = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: LINKS.docs },
] as const;

export const FEATURES = [
  {
    icon: '🌐',
    title: 'Real Browser Tests',
    description:
      'Runs tests in live cloud browsers — no mocks, no stubs. Your actual UI gets verified on every run.',
  },
  {
    icon: '🤖',
    title: 'Agent-Optimized Output',
    description:
      'Failure bundles contain root cause, suggested fix, DOM snapshots, and screenshots in one JSON payload.',
  },
  {
    icon: '⚡',
    title: 'Instant Feedback Loop',
    description:
      'Create test → run → get failure → fix → rerun. The whole cycle in under two minutes.',
  },
  {
    icon: '🔗',
    title: 'Works With Any Agent',
    description:
      'First-class support for Claude, Cursor, Cline, and Codex via installable skill files.',
  },
  {
    icon: '📊',
    title: 'Deterministic Output',
    description:
      'JSON output mode, predictable exit codes, and idempotent re-runs. Built for scripting.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'API keys stored at 0o600 in ~/.kentest. All traffic over TLS. No data leaves your project boundary.',
  },
] as const;

export const STEPS = [
  {
    number: '01',
    title: 'Install & authenticate',
    code: 'npm install -g @kentest/kentest-cli\nkentest setup',
    description: 'One command installs the CLI. `setup` walks you through API key configuration and agent skill installation.',
  },
  {
    number: '02',
    title: 'Create a test',
    code: 'kentest test create proj_123 \\\n  --name "User can log in" \\\n  --desc "Fill /login form and verify redirect" \\\n  --run --wait',
    description: 'Describe the behavior in plain language. KenTest generates and runs the test automatically.',
  },
  {
    number: '03',
    title: 'Get the failure bundle',
    code: 'kentest test failure get \\\n  proj_123 test_456 run_789 --json',
    description: 'One command returns root cause, suggested fix, screenshots, and DOM snapshot — everything the agent needs to fix the bug.',
  },
] as const;

export const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for solo developers and side projects.',
    features: [
      '200 test runs / month',
      '3 projects',
      'Community support',
      'JSON output',
      '7-day run history',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For teams shipping fast with AI coding agents.',
    features: [
      'Unlimited test runs',
      'Unlimited projects',
      'Priority support',
      'Failure bundle API',
      '90-day run history',
      'Agent skill updates',
      'CI/CD integration',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom limits, SLAs, and dedicated support.',
    features: [
      'Everything in Pro',
      'SSO / SAML',
      'Dedicated infrastructure',
      'SLA guarantee',
      'Custom integrations',
      'Onboarding support',
    ],
    cta: 'Contact us',
    highlighted: false,
  },
] as const;

export const FAQS = [
  {
    q: 'How is KenTest different from Playwright or Cypress?',
    a: "Playwright and Cypress are test frameworks — you write the test code. KenTest is a platform: you describe the behavior in plain language, KenTest generates and runs the tests in the cloud, and returns results in a format optimized for AI agents to consume and act on.",
  },
  {
    q: 'Which AI agents are supported?',
    a: 'KenTest ships skill files for Claude (Anthropic), Cursor, Cline, and OpenAI Codex. Install with `kentest agent install <name>`. Any agent that can run shell commands can use the CLI directly.',
  },
  {
    q: 'Can I use it in CI/CD pipelines?',
    a: 'Yes. Set KENTEST_API_KEY as an environment variable and use --json and exit codes to integrate with any pipeline. `kentest setup --from-env --yes` handles non-interactive setup.',
  },
  {
    q: 'What does the failure bundle contain?',
    a: "A single JSON object with: summary, rootCause, suggestedFix, per-step breakdown (expected vs actual), screenshot URLs, DOM snapshot, and browser logs. Designed so an agent can fix the bug without navigating a dashboard.",
  },
  {
    q: 'Is my application data secure?',
    a: 'Tests run in isolated cloud containers that are destroyed after each run. Screenshots and DOM snapshots are encrypted at rest and deleted after your configured retention period.',
  },
] as const;
