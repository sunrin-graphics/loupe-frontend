import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
});
