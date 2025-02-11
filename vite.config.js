// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })

// before it shows this way 
// so do some changes 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Full-Stack-Developer-Roadmap/', // 👈 Important: Update this
});
