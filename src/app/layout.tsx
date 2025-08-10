import "./globals.css";

export const metadata = {
  title: "Tripviu",
  description: "Halal-friendly stays. For everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
