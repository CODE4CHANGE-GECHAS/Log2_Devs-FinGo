import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  server: {
    proxy: {
      '/chat': {
        target: 'https://fingo-chatbot.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
