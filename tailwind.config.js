/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        Almoraviu: {
          ink: "#0b1f1a",
          brand: "#0E6B4E",
          gold: "#d6b36a",
        },
      },
      typography: ({ theme }) => ({
        Almoraviu: {
          css: {
            "--tw-prose-body": theme("colors.gray.800"),
            "--tw-prose-headings": theme("colors.gray.900"),
            "--tw-prose-links": theme("colors.Almoraviu.brand"),
            "--tw-prose-bold": theme("colors.gray.900"),
            "--tw-prose-counters": theme("colors.gray.600"),
            "--tw-prose-bullets": theme("colors.gray.400"),
            "--tw-prose-hr": theme("colors.gray.200"),
            "--tw-prose-quotes": theme("colors.gray.900"),
            "--tw-prose-quote-borders": theme("colors.Almoraviu.gold"),
            "--tw-prose-captions": theme("colors.gray.600"),
            "--tw-prose-code": theme("colors.gray.900"),
            "--tw-prose-pre-code": theme("colors.gray.100"),
            "--tw-prose-pre-bg": theme("colors.gray.900"),
            "--tw-prose-th-borders": theme("colors.gray.300"),
            "--tw-prose-td-borders": theme("colors.gray.200"),
            a: { textDecoration: "none", borderBottom: `1px solid ${theme("colors.Almoraviu.brand")}` },
            "a:hover": { opacity: .85 },
            h1: { letterSpacing: "-0.02em" },
            h2: { letterSpacing: "-0.02em", borderBottom: `1px solid ${theme("colors.gray.200")}`, paddingBottom: "0.25rem" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            blockquote: { borderLeftColor: theme("colors.Almoraviu.gold"), backgroundColor: "#fffef8" },
            code: { backgroundColor: "#f6f6f6", padding: "0.15rem 0.35rem", borderRadius: "0.375rem" },
            "pre code": { backgroundColor: "transparent", padding: 0 },
            img: { borderRadius: "0.75rem", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" },
            table: { overflow: "hidden", borderRadius: "0.5rem" },
            th: { backgroundColor: "#fafafa" },
          }
        }
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
