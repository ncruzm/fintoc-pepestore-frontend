
import "./globals.css";
import AppNavbar from "./(components)/Navbar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-screen min-h-screen bg-white text-black"
      >       
      <Providers>
          <AppNavbar />
          {children}        
      </Providers> 
      </body>
    </html>
  );
}
