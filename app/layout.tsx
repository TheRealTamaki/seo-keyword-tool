import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEO Keyword Tool',
  description: 'Personal SEO Keyword Research & Rank Tracking Tool',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-border bg-card">
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-primary">SEO Keyword Tool</h1>
            </nav>
          </header>
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
            {children}
          </main>
          <footer className="border-t border-border bg-card mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 SEO Keyword Tool. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
