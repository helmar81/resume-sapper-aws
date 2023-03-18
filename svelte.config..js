import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
          postcss: true,
        }),
      ],

    kit: {
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: null,
            precompress: false
            }),
            prerender: {
            default: true
            }
    }
};

export default config;