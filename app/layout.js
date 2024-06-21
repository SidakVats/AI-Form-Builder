import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ScrollTop from "./_components/ScroolTop";

import { Wix_Madefor_Text } from "next/font/google";

const Wix_Madefor_Text_init = Wix_Madefor_Text({
  subsets: ["latin"],
  variable: "--font-wix",
});

export const metadata = {
  title: "AI Form Builder",
  description: "@ Copywrite wwww.sidakvats.in",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Wix_Madefor_Text_init.className} bg-white` }>
          <Header />
          <Toaster />
          {children}
          <ScrollTop />
        </body>
      </html>
    </ClerkProvider>
  );
}
