// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import "./globals.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Asang | Architecture & Interiors",
//   description:
//     "Asang creates thoughtful architectural spaces and refined interiors.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         {/* <Navbar /> */}

//         <main className="flex-1">
//           {children}
//         </main>

//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }
















import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";


import GoogleAnalytics from "./components/GoogleAnalytics";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asang | Architecture & Interiors",
  description:
    "Asang creates thoughtful architectural spaces and refined interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Navbar */}
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}