"use client";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import QueryClientProvider from "@/provider/QueryClientProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ming">
      <body>
          <QueryClientProvider>
            <div className="flex flex-col min-h-screen">
              <header className="bg-gray-200 sticky top-0">
              </header>
              <main className="flex-grow bg-gray-100">{children}</main>
              <Toaster />
            </div>
          </QueryClientProvider>
      </body>
    </html>
  );
}