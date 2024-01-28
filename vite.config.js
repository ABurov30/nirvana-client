import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

import viteTsconfigPaths from 'vite-tsconfig-paths'

console.log(1)

export default defineConfig({
	base: '',
	plugins: [react(), viteTsconfigPaths()],
	server: {
		open: true,
		port: 5173
	}
})
