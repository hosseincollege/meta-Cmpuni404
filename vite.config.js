import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // ✅ پورت دلخواه
    open: true        // اختیاری: auto open browser
  }
})
