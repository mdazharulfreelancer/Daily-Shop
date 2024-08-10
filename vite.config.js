import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy : {
      '/api/v1' : {
        target :'https://daily-shop-backend.vercel.app',
         rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'),
        changeOrigin: true,
     
      }
    },
    hmr: {
      overlay: false, // Disable HMR overlay to avoid double logs
    },
  }
  
})

