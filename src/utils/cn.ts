// configuration:
// npm install -D tailwind tailwind-merge clsx tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// tailwind.config.js
// content: ['./src/**/*.{js,jsx,ts,tsx}',],

// src/index.css
// @tailwind base; @tailwind components; @tailwind utilities;

import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
