import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	base: '',
	plugins: [react(), viteTsconfigPaths()],
	publicDir: 'public',
	server: {
		open: true,
        port: 5173
	}
})
