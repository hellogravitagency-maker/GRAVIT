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
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    server: {
      allowedHosts: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'esnext',
      modulePreload: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-gsap': ['gsap', '@gsap/react'],
            'vendor-framer': ['framer-motion'],
            'vendor-lucide': ['lucide-react']
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
