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
        defaultBlack2: '#181823',
        defaultBlue: '#537FE7',
        defaultLightblue: '#C0EEF2',
        defaultCreamGray: '#E9F8F9',
        defaultDarkturquoise: '#08D9D6',
        defaultRadicalred: '#FF2E63',
        defaultMidnightexpress: '#252A34',
        defaultWisper: '#EAEAEA',
      },
    },
  },
  plugins: [],
};
export default config;
