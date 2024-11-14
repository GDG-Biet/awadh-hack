
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from 'next/font/google'
import  Providers  from './provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      
      <body className={poppins.className}>
      <div className="w-full flex justify-center fixed top-10 z-40">
          <Navbar></Navbar>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
