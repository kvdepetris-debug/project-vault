import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Vault",
  description: "Personal project tracker with notes, files, timelines, reminders, and AI assistance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
