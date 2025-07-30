import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque, Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';
import GrainEffect from '@/components/visualEffects/grainEffect';
import Cursor from '@/components/cursor/cursor';

// ---Fonts-----------------------------------------------------
const MainFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const OswaldFont = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

// ---Metadata--------------------------------------------------
export const metadata: Metadata = {
  title: 'Sakib Ahmed | Web & App Developer',
  description:
    'Slinging code like a caffeinated wizard. I craft websites, apps, and occasional existential dread in JavaScript. Frontend, backend, snackend—covered. Creative full-stack developer building modern web and mobile experiences using React, Next.js, Node, and Firebase. Open to freelance and remote work.',
  generator: 'Next.js',
  applicationName: 'Sakib Ahmed Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Sakib Ahmed',
    'Web Developer',
    'App Developer',
    'React',
    'Next.js',
    'JavaScript',
    'Portfolio',
    'Freelancer',
    'Frontend',
    'Backend',
  ],
  authors: [{ name: 'Sakib Ahmed', url: 'https://sakibahmed.dev' }],
  creator: 'Sakib Ahmed',
  publisher: 'Sakib Ahmed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sakibahmed.dev'),
  openGraph: {
    title: 'Sakib Ahmed | Web & App Developer',
    description:
      'Showcasing projects built with React, Node.js, Firebase, and more. Let’s build something amazing together.',
    url: 'https://sakibahmed.dev',
    siteName: 'Sakib Ahmed Portfolio',
    images: [
      {
        url: 'https://sakibahmed.dev/og-image.png', // customize
        width: 1200,
        height: 630,
        alt: 'Sakib Ahmed Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakib Ahmed | Web & App Developer',
    description:
      'Full-stack developer with a passion for building efficient and elegant digital products.',
    creator: '@yourTwitterHandle', // optional
    images: ['https://sakibahmed.dev/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.variable, OswaldFont.variable)}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
