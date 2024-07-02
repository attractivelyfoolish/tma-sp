import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        titleProp: true,
        dimensions: false
      },
      include: '**/*.svg'
    }),
    basicSsl()
  ],
  define: {
    'process.env': {}
  },
  build: {
    outDir: './docs'
  },
  base: '/tma-sp/'
})
