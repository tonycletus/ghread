import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/bin/ghread.ts', 'src/index.ts'],
  format: ['cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'node18',
  outDir: 'dist',
  splitting: false,
  treeshake: true,
  tsconfig: './tsconfig.json',
});
