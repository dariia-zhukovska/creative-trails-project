import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import svgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), svgSpritePlugin({
    symbolId: 'img-[name]',
    include: ['./public/img/*.svg'],
  }),
  ],
})
