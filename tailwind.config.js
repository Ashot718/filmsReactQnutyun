/** @type {import('tailwindcss').Config} */
 export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
  screens: {
    "2xl": { "max": "1535px " },
    "xl": { "max": "1279px " },
    "lg": { "max": "1023px " },
    "md": { "max": "767px " },
    "sm": { "max": "639px " },
  }
};
export const plugins = [];
