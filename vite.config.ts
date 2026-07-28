import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * The commit this build came from, reported to the GitCMS editor so it can warn
 * when the preview is running behind the branch it publishes to.
 */
function currentCommit(): string {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __SITE_COMMIT__: JSON.stringify(currentCommit()),
  },
  server: {
    port: 6176,
    strictPort: true,
  },
});
