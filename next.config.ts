import { withIntlayer } from 'next-intlayer/server';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.104'],
};

/**
 * Workaround for an intlayer 9.3.x bug.
 *
 * On `next build`, `withIntlayer` scans the built dictionaries to tree-shake
 * unused node-type plugins. Its React-element detector still expects the
 * pre-React-19 element shape (with `_store` / `_owner`). React 19 serializes
 * elements as `{ type, key, ref, props }`, which the detector misreads as a
 * Solid node — so it emits `INTLAYER_NODE_TYPE_REACT_NODE=false` and drops the
 * plugin that turns serialized JSX dictionary values back into React elements.
 * Every JSX value in a `.data.tsx` file then crashes prerendering with
 * React error #31 ("Objects are not valid as a React child").
 *
 * Stripping those two env vars keeps the plugin enabled. Remove this once the
 * upstream detector handles the React 19 element shape.
 */
const stripBrokenIntlayerEnv = (config: NextConfig): NextConfig => {
  if (!config.env) return config;

  const broken = new Set(['INTLAYER_NODE_TYPE_REACT_NODE', 'INTLAYER_NODE_TYPE_PREACT_NODE']);

  return {
    ...config,
    env: Object.fromEntries(Object.entries(config.env).filter(([key]) => !broken.has(key)))
  };
};

export default withIntlayer(nextConfig).then(stripBrokenIntlayerEnv);
