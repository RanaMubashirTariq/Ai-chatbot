module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "black-300": "var(--black-300)",
        "black-400": "var(--black-400)",
        "black-800": "var(--black-800)",
        bright: "var(--bright)",
        "color-schemeprimary-01": "var(--color-schemeprimary-01)",
        "neutral-01": "var(--neutral-01)",
        "neutral-02": "var(--neutral-02)",
        "neutral-03": "var(--neutral-03)",
        "neutral-04": "var(--neutral-04)",
        "neutral-05": "var(--neutral-05)",
        "neutral-100": "var(--neutral-100)",
        "neutral-300": "var(--neutral-300)",
        "neutral-50": "var(--neutral-50)",
        "neutral-500": "var(--neutral-500)",
        stateinfo: "var(--stateinfo)",
        "text-colortitle-color": "var(--text-colortitle-color)",
        "theme-schemeprimary-01": "var(--theme-schemeprimary-01)",
        white: "var(--white)",
        "x3-background-colorswhite-color":
          "var(--x3-background-colorswhite-color)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "big-buttton-2": "var(--big-buttton-2-font-family)",
        "h-extra": "var(--h-extra-font-family)",
        "heading-display-h1": "var(--heading-display-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "medium-button": "var(--medium-button-font-family)",
        "paragraph-p1-size-18px-medium":
          "var(--paragraph-p1-size-18px-medium-font-family)",
        "paragraph-p1-size-18px-regular":
          "var(--paragraph-p1-size-18px-regular-font-family)",
        "paragraph-p1-size-18px-semibold":
          "var(--paragraph-p1-size-18px-semibold-font-family)",
        "paragraph-p2-size-16px-medium":
          "var(--paragraph-p2-size-16px-medium-font-family)",
        "paragraph-p2-size-16px-regular":
          "var(--paragraph-p2-size-16px-regular-font-family)",
        "small-button": "var(--small-button-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      animation: {
        slide: 'slide 15s linear infinite',
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
  safelist: ['animate-slide'],
};
