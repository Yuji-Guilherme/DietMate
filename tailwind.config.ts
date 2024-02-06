import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'off-white': '#F9F8D0',
      'new-orange': '#FE9400',
      'primary-blue': '#031818',
      'secondary-blue': '#072C2C',
      'light-yellow': '#FFF2B0',
      'medium-yellow': '#F6EBB7',
      ...colors
    },
    borderWidth: {
      '1': '1px',
      '3': '3px',
      '8': '8px'
    },
    screens: {
      sm: { min: '0px', max: '450px' },
      tablet: { min: '451px', max: '768px' },
      'md-': { min: '769px', max: '1024px' },
      md: { min: '451px', max: '1024px' }
    },
    extend: {}
  },
  plugins: []
};
export default config;
