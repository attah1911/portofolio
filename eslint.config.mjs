import nextVitals from 'eslint-config-next/core-web-vitals';

// `eslint-config-next/core-web-vitals` is a flat-config array and already
// ignores `.next/`, `out/`, `build/`, and `next-env.d.ts`.
/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  {
    // Intlayer content dictionaries hold prose — apostrophes and quotes in JSX
    // text are intentional there, not markup mistakes.
    files: ['**/*.data.tsx', '**/*.metadata.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  }
];

export default eslintConfig;
