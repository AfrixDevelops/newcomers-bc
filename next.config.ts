import type { NextConfig } from 'next';

/**
 * GitHub Pages serves a project repo from a sub-path
 * (username.github.io/<repo>), so every asset URL needs that prefix.
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH from the repo name.
 * Locally, and on a custom domain, it is empty and the site sits at "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // Emit a plain static site into ./out - no Node server required.
  output: 'export',

  basePath,
  assetPrefix: basePath || undefined,

  // Pages has no image optimizer, so ship images as-is.
  images: { unoptimized: true },

  // Emit /housing/index.html instead of /housing.html so static hosts
  // resolve the route without a trailing-slash redirect.
  trailingSlash: true,
};

export default nextConfig;
