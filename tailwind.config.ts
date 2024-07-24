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
        primary_light: 'var(--primary-light)',
        secondary: 'var(--secondary)',
        secondary_light: 'var(--secondary-light)',
        error: 'var(--error)',
        error_dark: 'var(--error-dark)',
        error_light: 'var(--error-light)',
        gray: 'var(--gray)',
        light_gray: 'var(--light-gray)',
        dark_gray: 'var(--dark-gray)',
        bg_primary: 'var(--bg-primary)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
