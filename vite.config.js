import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Ini akan mengatasi error "process is not defined"
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
})