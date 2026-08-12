import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
            '@features': path.resolve(import.meta.dirname, './src/features'),
            '@layouts': path.resolve(import.meta.dirname, './src/layouts'),
            '@components': path.resolve(import.meta.dirname, './src/components'),
            '@styles': path.resolve(import.meta.dirname, './src/styles'),
        },
    },
});
