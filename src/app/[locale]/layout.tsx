import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Almarai, Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Grain } from '@/components/ui/grain';
import { Preloader } from '@/components/layout/preloader';
import { Cursor } from '@/components/ui/cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SectionLabel } from '@/components/ui/section-label';
import { BackTop } from '@/components/ui/back-top';
import '@/app/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700', '800'],
  variable: '--font-arabic',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      data-theme="light"
      className={`${plusJakartaSans.variable} ${inter.variable} ${almarai.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0E1C3D" />
        <link rel="canonical" href={`https://nawah.dev/${locale}`} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <LenisProvider>
              <Cursor />
              <ScrollProgress />
              <SectionLabel />
              <Grain />
              <Preloader />
              <Navbar />
              <main id="main">
                {children}
              </main>
              <BackTop />
              <Footer />
            </LenisProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
