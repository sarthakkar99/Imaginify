// import type { Metadata } from "next";
// import "@/app/globals.css"; // Global CSS
// import { cn } from "@/lib/utils";
// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// export const metadata: Metadata = {
//   title: "Imagynify",
//   description: "AI powered Image Generator",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={cn("font-IBMPlex antialiased")}>
//         {children} {/* Render the children (sub-layouts or pages) */}
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }

// import type { Metadata } from 'next';
// import { ClerkProvider } from '@clerk/nextjs';
// import '@/app/globals.css'; // Global CSS
// import { cn } from '@/lib/utils';

// export const metadata: Metadata = {
//   title: 'Imagynify',
//   description: 'AI powered Image Generator',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={cn('font-IBMPlex antialiased')}>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
// app/layout.tsx
// import { ClerkProvider } from '@clerk/nextjs';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider
//       appearance={{variables: { colorPrimary: '#624cf5' }}} afterSignOutUrl="/">
//       <html lang="en">
        
//         <body className={inter.className}>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

// app/layout.tsx
// import { ClerkProvider } from '@clerk/nextjs';
// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }} afterSignOutUrl="/">
//       <html lang="en">
//         <body className={inter.className}>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";


import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}