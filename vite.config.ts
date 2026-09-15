import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const deferCssPlugin = () => {
  return {
    name: 'defer-css',
    enforce: 'post' as const,
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet"(.*?) href="(.*?\.css)">/g,
        `<link rel="preload" as="style" href="$2">\n    <link rel="stylesheet" href="$2" media="print" onload="this.media='all'">\n    <noscript><link rel="stylesheet" href="$2"></noscript>`
      );
    },
  };
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), deferCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'motion/react': 'framer-motion',
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true,
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'X-XSS-Protection': '1; mode=block',
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'X-XSS-Protection': '1; mode=block',
      },
    },
    build: {
      target: 'esnext',
      modulePreload: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            const normalized = id.replace(/\\/g, '/');
            if (
              normalized.includes('/node_modules/react/') ||
              normalized.includes('/node_modules/react-dom/') ||
              normalized.includes('/node_modules/react-router/') ||
              normalized.includes('/node_modules/react-router-dom/') ||
              normalized.includes('/node_modules/scheduler/')
            ) {
              return 'vendor-react';
            }
            if (normalized.includes('/node_modules/framer-motion/')) {
              return 'vendor-motion';
            }
            if (normalized.includes('/node_modules/gsap/')) {
              return 'vendor-gsap';
            }
            if (normalized.includes('/node_modules/lucide-react/')) {
              return 'vendor-lucide';
            }
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name?.split('.').pop() || '';
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
              extType = 'fonts';
            }
            return `assets/[name]-[hash][extname]`;
          }
        }
      },
      chunkSizeWarningLimit: 1000,
    }
  };
});
