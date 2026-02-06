import type { Metadata } from "next";
// Remove Geist fonts as we use system fonts defined in global.css
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Operational Opener | 止まらない、説明できる業務へ。",
  description: "Power Automateで自動化した業務、作った人がいなくなったら、説明できますか？属人化した自動化を、会社資産に変える。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col bg-flow-bg text-foreground">
        <Header />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
