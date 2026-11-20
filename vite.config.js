import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        experience: resolve(__dirname, 'experience.html'),
        projects: resolve(__dirname, 'projects.html'),
        data: resolve(__dirname, 'project-data-management.html'),
        slides: resolve(__dirname, 'project-slide-decks.html'),
        certificates: resolve(__dirname, 'certificates.html'),
      },
    },
  },
});
