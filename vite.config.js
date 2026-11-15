import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repository under /Portfolio/.
// Both HTML entry points are built so search engines receive language-specific metadata.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        en: 'en/index.html',
      },
    },
  },
})
