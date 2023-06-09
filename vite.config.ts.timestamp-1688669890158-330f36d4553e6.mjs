// vite.config.ts
import { defineConfig } from "file:///D:/IT/LaSoft/Theory/React/creative-trails-project/node_modules/vite/dist/node/index.js";
import react from "file:///D:/IT/LaSoft/Theory/React/creative-trails-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/IT/LaSoft/Theory/React/creative-trails-project/node_modules/vite-plugin-svgr/dist/index.js";
import svgSpritePlugin from "file:///D:/IT/LaSoft/Theory/React/creative-trails-project/node_modules/vite-plugin-svg-sprite/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    svgr(),
    react(),
    svgSpritePlugin({
      symbolId: "img-[name]",
      include: ["./public/img/*.svg"]
    })
  ],
  server: {
    hmr: {
      overlay: false
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJVFxcXFxMYVNvZnRcXFxcVGhlb3J5XFxcXFJlYWN0XFxcXGNyZWF0aXZlLXRyYWlscy1wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxJVFxcXFxMYVNvZnRcXFxcVGhlb3J5XFxcXFJlYWN0XFxcXGNyZWF0aXZlLXRyYWlscy1wcm9qZWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JVC9MYVNvZnQvVGhlb3J5L1JlYWN0L2NyZWF0aXZlLXRyYWlscy1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xyXG5pbXBvcnQgc3ZnU3ByaXRlUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1zcHJpdGUnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpLCBzdmdTcHJpdGVQbHVnaW4oe1xyXG4gICAgc3ltYm9sSWQ6ICdpbWctW25hbWVdJyxcclxuICAgIGluY2x1ZGU6IFsnLi9wdWJsaWMvaW1nLyouc3ZnJ10sXHJcbiAgfSksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhtcjoge1xyXG4gICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8scUJBQXFCO0FBRzVCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLEtBQUs7QUFBQSxJQUFHLE1BQU07QUFBQSxJQUFHLGdCQUFnQjtBQUFBLE1BQ3pDLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQSxJQUNoQyxDQUFDO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
