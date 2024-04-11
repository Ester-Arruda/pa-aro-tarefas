import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  },
  base: '/pacaro-tarefas'
})
