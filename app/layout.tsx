import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { MotionProvider } from '@/components/motion-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codenrs.com'),
  title: {
    default: 'CODENRS | Web Development, SaaS & AI Product Agency',
    template: '%s | CODENRS',
  },
  description: 'CODENRS is a digital agency building high-performance web platforms, mobile apps, and SaaS products — including PulseBoard (Jira dashboards), RevivaIQ (Odoo ERP), and PocketLens (AI finance tracking).',
  keywords: [
    'web development agency',
    'Next.js development',
    'SaaS product development',
    'UI/UX design agency',
    'SEO optimization',
    'Jira dashboard app',
    'Odoo ERP module',
    'AI mobile app development',
  ],
  authors: [{ name: 'CODENRS' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'CODENRS | Web Development, SaaS & AI Product Agency',
    description: 'High-performance web platforms, mobile apps, and SaaS products built by CODENRS.',
    type: 'website',
    url: 'https://codenrs.com',
    siteName: 'CODENRS',
    images: [{ url: '/wordmark.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CODENRS | Web Development, SaaS & AI Product Agency',
    description: 'High-performance web platforms, mobile apps, and SaaS products built by CODENRS.',
    images: ['/wordmark.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CODENRS',
    url: 'https://codenrs.com',
    logo: 'https://codenrs.com/wordmark.png',
    email: 'support@codenrs.com',
    sameAs: ['https://www.linkedin.com/in/nrshagor/'],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MotionProvider>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
