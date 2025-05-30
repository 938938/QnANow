import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        defaultWhite: '#FDFAF6',
        defaultBrown: '#FAF1E6',
        defaultMint: '#E4EFE7',
        defaultGreen: '#99BC85',
      },
    },
  },
  plugins: [],
};
export default config;
