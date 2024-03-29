import { sveltekit } from '@sveltejs/kit/vite';
import inspect from 'vite-plugin-inspect'

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),inspect()],
	resolve:{
		alias:{
			'$components':'/src/components',
			'$assets':'/src/assets'
		}
	}
});
