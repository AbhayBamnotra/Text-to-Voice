import tailwindcss from '@tailwindcss/vite'
import React from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [React(), tailwindcss()],
})