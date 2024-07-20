import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        bg_primary: 'var(--bg-primary)',
        secondary: 'var(--secondary)',
        light_gray: 'var(--light-gray)',
        gray: 'var(--gray)',
        error: 'var(--error)',
        error_dark: 'var(--error-dark)',
        error_light: 'var(--error-light)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
