import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://evacasino83.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Eva Casino — официальный сайт, зеркало и игра онлайн без лишнего риска — обзор 2',
  description: 'Eva Casino: понятный гид по официальному сайту, рабочему зеркалу и игре онлайн. Проверяйте адрес, читайте правила, устанавливайте личные лимиты и сохраняйте контроль. Сверяйте адрес до регистрации.',
  applicationName: 'Eva Casino',
  generator: 'Next.js',
  keywords: ['eva casino', 'ева казино', 'eva casino официальный сайт', 'ева казино зеркало', 'ева казино онлайн'],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Eva Casino',
    title: 'Eva Casino — понятная навигация по игре онлайн',
    description: 'Практический гид по официальному сайту, зеркалу, мобильному доступу и ответственному игровому поведению.',
  },
  twitter: {
    card: 'summary',
    title: 'Eva Casino — официальный сайт и рабочее зеркало',
    description: 'Короткий и честный гид по поиску Eva Casino онлайн.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: '#f5f7f5',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
