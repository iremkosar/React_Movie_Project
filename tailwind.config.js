/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#1A161F",
        Gray: " #9CA4AB",
        customPurple: " #B43FEB",
        grayColor: "#f9f9f9",
        Graycolor: "#78828A",
        Black: "#1B1F16",
        inputgray: " #F9F9F9",
        payGray: "#78828A",
        line: "#E9EBED",
        price: "#171725",
      },
      fontSize: {
        size16: "16px",
        size14: "14px",
        size18: "18px",
      },
      screens: {
        ss: "360px",
      },
      padding: {
        btn: "550px",
        btn2: "588px",
        btn3: "592px",
        Btn: "440px",
        Btn2: "460px",
      },
      width: {
        588: "588px",
        138: "138px",
        264: "264px",
      },
      gap: {
        px: "400px",
        px2: "410px",
      },
    },
  },
  plugins: [],
};
