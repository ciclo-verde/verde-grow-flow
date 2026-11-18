// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build only when GITHUB_PAGES=true (set by .github/workflows/deploy.yml).
// Lovable preview/publish keep the default SSR build at "/".
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBase = "/verde-grow-flow/";

export default defineConfig({
  ...(isGitHubPages ? { vite: { base: pagesBase } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    ...(isGitHubPages
      ? {
          router: { basepath: pagesBase },
          pages: [{ path: "/" }],
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
