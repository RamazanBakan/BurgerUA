import { defineConfig } from 'vite';


export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5125',
                changeOrigin: true,
            },
        },
    },
});
