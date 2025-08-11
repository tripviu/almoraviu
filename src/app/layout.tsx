import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Almoraviu — Halal-friendly stays. For everyone.",
  description: "Find halal-friendly hotels worldwide with clear filters and honest pricing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
