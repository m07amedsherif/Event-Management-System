/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px", // mobile side margins
        lg: "24px", // desktop side margins
      },
    },

    extend: {
      colors: {
        primary: "#7441FF",
        secondary: "#11EDA4",
        tertiary: "#EFD830",

        background: "#FFFFFF",
        text: "#111111",
        textInvert: "#FFFFFF",

        muted: "#E1D6FF",
        card: "#FFFFFF",
        cardSoft: "#C8B5FC",

        success: "#12B76A",
        warning: "#F59E0B",
        error: "#EF4444",

        bg31: "#241352",
        bg32: "#4D3398",
        bg33: "#1E1A2B",
      },

      backgroundImage: {
        gradientBg3:
          "radial-gradient(circle at 10% 20%, rgba(116, 65, 255, 0.15), transparent 45%), linear-gradient(145deg, #130C24 0%, #1E1A2B 35%, #241352 70%, #4D3398 100%)",
        gradientFooter: "linear-gradient(135deg, #E1D6FF 0%, #7441FF 100%)",
        gradientBrand:
          "linear-gradient(135deg, #7441FF 0%, #11EDA4 50%, #EFD830 100%)",
      },

      // typography
      fontSize: {
        h1: ["44px", { lineHeight: "1.1", fontWeight: "800" }],
        h2: ["32px", { lineHeight: "1.15", fontWeight: "800" }],
        h3: ["24px", { lineHeight: "1.2", fontWeight: "800" }],
        h4: ["20px", { lineHeight: "1.25", fontWeight: "800" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "800" }],
        caption: ["14px", { lineHeight: "1.4", fontWeight: "800" }],
        micro: ["12px", { lineHeight: "1.35", fontWeight: "800" }],
      },

      /*
       Spacing tokens 
       */
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },

      /*
       Section spacing helpers 
       */
      margin: {
        "section-sm": "24px",
        "section-md": "32px",
        "section-lg": "48px",
        "section-xl": "64px",
      },
      padding: {
        "section-sm": "24px",
        "section-md": "32px",
        "section-lg": "48px",
        "section-xl": "64px",
      },

      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.1)",
      },

      borderRadius: {
        card: "16px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },

  plugins: [],
};
