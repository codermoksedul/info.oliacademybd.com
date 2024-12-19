import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oli Academy",
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main className="sm:max-w-[440px] md:my-3 w-full mx-auto border overflow-hidden bg-white overflow-y-auto border-slate-200 sm:rounded-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}
