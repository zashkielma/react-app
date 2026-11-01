import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import Header from "@/components/header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Mi App",
  description: "Aplicación Next.js con shadcn y Poppins",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <TooltipProvider>
          <Header /> 
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}