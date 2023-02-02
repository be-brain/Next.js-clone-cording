/** @type {import('tailwindcss').Config} */

// 어느 component 혹은 page에서 tailwind를 사용할 것인지 정의

module.exports = {
  // pages폴더의 모든 폴더(**)의 (js,ts,jsx,tsx확장자를 가진)모든 파일
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
