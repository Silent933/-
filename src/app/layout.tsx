import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نواة / Nawah — وكالة التطوير الرقمي | Digital Agency Syria',
  description: 'نواة — تصميم وتطوير المواقع والتطبيقات والبرمجيات في سوريا. Nawah builds world-class websites, apps and software for Syrian businesses.',
  metadataBase: new URL('https://nawah.dev'),
  openGraph: {
    type: 'website',
    siteName: 'نواة / Nawah',
    locale: 'ar_SY',
    title: 'نواة / Nawah — Digital Agency Syria',
    description: 'We are the core from which your digital product is built.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
