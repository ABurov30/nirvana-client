import react from '@vitejs/plugin-react';



import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';



import viteTsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
	base: '',
	plugins: [
		react(),
		viteTsconfigPaths(),
		federation({
			name: 'musicApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./main': './src/entry.js'
			}
		})
	],
	server: {
		port: 5173,
		open: true,
		strictPort: true
	}
})