"use client";
import "./globals.css";
import QueryClientProvider from "@/provider/QueryClientProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <QueryClientProvider>
            <div className="flex flex-col min-h-screen">
              <header className="bg-gray-200 sticky top-0">
              </header>

              <main className="flex-grow bg-gray-100 p-1">{children}</main>
            </div>
          </QueryClientProvider>
      </body>
    </html>
  );
}