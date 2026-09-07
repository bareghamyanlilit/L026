import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Աշոտ և Լարիսա",
  description: "Աշոտ և Լարիսա",
  openGraph: {
    title: "Աշոտի և Լարիսայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://ashot-larisa.vercel.app",
    siteName: "Աշոտ և Լարիսա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
