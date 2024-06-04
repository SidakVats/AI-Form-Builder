import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ScrollTop from "./_components/ScroolTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Form Builder",
  description: "@ Copywrite wwww.sidakvats.in",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Toaster />
        {children}
        <ScrollTop/>
       
        </body>
    </html></ClerkProvider>
  );
}
