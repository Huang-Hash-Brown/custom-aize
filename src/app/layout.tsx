import type { Metadata, Viewport } from 'next'
import { Geist_Mono as FontMono, Inter as FontSans } from 'next/font/google'

import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

import './globals.css'

import { Providers } from '@/contexts/providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI'
  ],
  authors: [
    {
      name: 'Xiaoming',
      url: 'https://github.com/Huang-Hash-Brown'
    }
  ],
  creator: 'Xiaoming',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadcn'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background overscroll-none font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
