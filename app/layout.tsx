import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { WhatsAppChatWidget } from '@/components/WhatsAppChatWidget';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Débouchage Bruxelles & Wallonie | Debouchage Turbo',
  description:
    'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7. WC, évier, égout, curage haute pression et fosse septique. Devis gratuit.',
  openGraph: {
    title: 'Débouchage Bruxelles & Wallonie | Debouchage Turbo',
    description:
      'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7. WC, évier, égout, curage haute pression et fosse septique. Devis gratuit.',
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Débouchage Bruxelles & Wallonie | Debouchage Turbo',
    description:
      'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7. WC, évier, égout, curage haute pression et fosse septique. Devis gratuit.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${dmSans.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="font-sans bg-white text-slate-900 antialiased selection:bg-[#e11d24] selection:text-white"
      >
        {children}
        <WhatsAppChatWidget />
      </body>
    </html>
  );
}
