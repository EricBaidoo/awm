import "./globals.css";
import { montserrat, inter, cormorant } from '@/lib/fonts';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata = {
  title: {
    default: 'Anointed Word Ministries | Wilmington, DE',
    template: '%s | Anointed Word Ministries',
  },
  description: 'Anointed Word Ministries — A Spirit-filled church in Wilmington, Delaware, led by Apostle Joyce Cofield. Join us for worship, prayer, and the transforming Word of God.',
  keywords: ['church', 'Wilmington', 'Delaware', 'Anointed Word', 'ministry', 'worship', 'prayer', 'Apostle Joyce Cofield'],
  authors: [{ name: 'Anointed Word Ministries' }],
  openGraph: {
    title: 'Anointed Word Ministries',
    description: 'Reconciling lives from dead places to resurrected life in Christ',
    type: 'website',
    locale: 'en_US',
    siteName: 'Anointed Word Ministries',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable} ${cormorant.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
