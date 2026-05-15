import "./globals.css";

export const metadata = {
  title: "Project Vault",
  description: "AI-powered personal project tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
