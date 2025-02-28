import { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 8px rgba(0, 0, 0, 0.6)",
        customHover: "0 2px 8px rgba(255, 255, 255, 0.6)",
      },
      transitionDuration: {
        500: "500ms",
      },
      scale: {
        105: "1.05",
      },
    },
  },
};

export default config;
