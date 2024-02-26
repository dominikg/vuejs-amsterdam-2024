import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from "mdsvex";
import { importAssets } from 'svelte-preprocess-import-assets';
import createShikiHighlighter from './src/utils/shiki-highlighter.js'
const shiki = await createShikiHighlighter({
	theme: 'github-dark',
	showLineNumbers: () => false
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:['.svelte','.svx','.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx','.md'],
			highlight: {
				highlighter:shiki,
			},
		}),
		importAssets(),
		vitePreprocess()
	]
};

export default config;
