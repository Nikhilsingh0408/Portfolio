// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ UNCOMMENT THIS
import path from 'path';

export default defineConfig({
  plugins: [
    react(), // ✅ INCLUDE THIS
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
});
