import * as colors from '@radix-ui/colors';
import { Metadata, Viewport } from 'next';
import { Albert_Sans, JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import resumeConfig from '../../edit-me/config/resumeConfig';

// STYLES
import { personal } from '@content';
import { headers } from 'next/headers';
import { protocol, vercelURL } from 'src/helpers/env';
import { fullName } from 'src/helpers/utils';
import { twMerge } from 'tailwind-merge';
import { ThemeSetting } from '../../edit-me/types/Config';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const accentColor = resumeConfig.accentColor;

const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
});

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${host || vercelURL}`;
  const siteName = `${fullName} Professional Résumé`;
  const title = `CV | ${fullName} | Technical Lead @ AKQA`;
  const description = `Professional résumé for ${fullName}.`;

  return {
    metadataBase: new URL(baseURL),
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: [
      'resume',
      fullName,
      'next.js',
      'pdf',
      'Sitecore',
      '.NET',
      'Software Developer',
      'Technical Lead',
      'Auckland',
      'New Zealand',
      'software development',
    ],
    openGraph: {
      type: 'profile',
      firstName: personal.givenName,
      lastName: personal.familyName,
      title,
      description,
      siteName,
      url: baseURL,
    },
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
    },
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  // @ts-ignore
  themeColor: colors[accentColor][`${accentColor}9`],
  width: 'device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={twMerge(albert.variable, jetBrainsMono.variable)}
    >
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
