import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mohamed Kallel | Software Engineer",
    template: "%s | Mohamed Kallel",
  },
  description:
    "Portfolio of Mohamed Kallel, a final-year Software Engineering student at Polytechnique Montréal focused on full-stack development, mobile applications, embedded systems and software architecture.",
  keywords: [
    "Mohamed Kallel",
    "Software Engineer",
    "Software Engineering",
    "Full Stack Developer",
    "Mobile Developer",
    "Embedded Systems",
    "Polytechnique Montréal",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Kallel" }],
  creator: "Mohamed Kallel",
  openGraph: {
    title: "Mohamed Kallel | Software Engineer",
    description:
      "Software engineering portfolio featuring full-stack, mobile, embedded and technical projects.",
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
      <body>{children}</body>
    </html>
  );
}