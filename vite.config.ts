import react from '@vitejs/plugin-react'

import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'

import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	base: '',
	plugins: [
		react(),
		viteTsconfigPaths(),
		federation({
			name: 'musicApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./MusicApp': './src/app/App.tsx'
			},
			shared: [
				'react',
				'react-dom',
				'react-redux',
				'react-router-dom',
				'nirvana-uikit'
			]
		})
	],
	server: {
		port: 5173,
		strictPort: true
	},
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
})
