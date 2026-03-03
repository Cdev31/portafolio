import { Navbar } from "@/components";
import "../index.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cdev31</title>
      </head>
      <body
       className="bg-gray-900"
      >
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
