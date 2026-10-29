import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black text-gray-100">
          <header className="max-w-3xl mx-auto border-b border-zinc-800">

            <div className="max-w-2xl mx-auto px-8 py-6 flex justify-between items-center">
              
              <nav className="flex items-center w-full text-zinc-400 text-sm">

                <div className="flex gap-6"> 
                  <Link href="/" className="text-zinc-100 hover:text-white transition-colors">
                    Junhyeok Kim
                  </Link>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                  <Link href="/publications" className="hover:text-white transition-colors">
                    Publications
                  </Link>
                  <Link href="/cv" className="hover:text-white transition-colors">
                    CV
                  </Link>
                </div>

                <div className="flex gap-4 ml-auto text-zinc-500 hover:text-white transition-colors">
                  <a
                    href="mailto:visual713@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/junhyeok-kim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </nav>
            </div>
          </header>

          <main className="max-w-2xl mx-auto px-8 py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}