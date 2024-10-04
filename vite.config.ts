import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { basePath } from './src/constants/paths.constant';

export default defineConfig({
	plugins: [vue()],
	base: basePath,
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		outDir: './dist/',
		cssCodeSplit: false,
	},
});
