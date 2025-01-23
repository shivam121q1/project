import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css'; // Ensure this is loaded for global styles

// Load fonts with correct weights and subsets
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Expanded metadata with Open Graph and Twitter
export const metadata: Metadata = {
  title: "LoginKaro",
  description: "Login page for LoginKaro. Secure your account with ease.",
  authors: [{ name: "LoginKaro", url: "project-five-rust.vercel.app" }], 
  
  openGraph: {
    title: "LoginKaro | Login",
    description: "Login page for LoginKaro. Secure your account with ease.",
    url: "project-five-rust.vercel.app",
    siteName: "LoginKaro",
    images: [
      {
        url: "https://image-processor-storage.s3.us-west-2.amazonaws.com/uploads/42bea90a35b8c48426c89309abdabbbd/image-mods-modifypng.png",
        width: 1200,
        height: 630,
        alt: "LoginKaro Login",
      }
    ],
    type: "website",
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
