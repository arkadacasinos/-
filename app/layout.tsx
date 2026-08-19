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
        <meta name="yandex-verification" content="2a7d3991d0868b20" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly83YTBlNGEuY29tLz9zZXJpYWw9NjEzNTU4ODgmY3JlYXRpdmVfaWQ9NzY3NQ=="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
