import type { Metadata } from "next";
import "./globals.css";
import "../styles/portfolio.css";

export const metadata: Metadata = {
  title: "Aryan Sharma",
  description: "Portfolio of Aryan Sharma - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* External CSS dependencies */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="shortcut icon" href="/02.png" type="image/x-icon" />
      </head>
      <body>
        {children}
        {/* EmailJS script loaded after body */}
        <script src="https://cdn.emailjs.com/dist/email.min.js" type="text/javascript" async></script>
      </body>
    </html>
  );
}
