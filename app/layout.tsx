import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rishil Kadakia",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white text-black px-6 py-16">
          <section className="max-w-4xl mx-auto">
            
            {/* NAVBAR */}
            <nav className="flex gap-6 mb-10 text-lg">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </nav>

            {/* PAGE CONTENT */}
            {children}

          </section>
        </main>
      </body>
    </html>
  );
}