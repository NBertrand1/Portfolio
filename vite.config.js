import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repository under /Portfolio/.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
