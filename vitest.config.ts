import react from '@vitejs/plugin-react'

import { resolve } from 'path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/test/setup.ts'],
		define: {
			'process.env.NODE_ENV': '"test"'
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			shared: resolve(__dirname, './src/shared'),
			entities: resolve(__dirname, './src/entities'),
			app: resolve(__dirname, './src/app'),
			pages: resolve(__dirname, './src/pages'),
			widgets: resolve(__dirname, './src/widgets')
		}
	}
})
