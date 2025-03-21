import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "Viamobilidade",
  description: "Sistema de registro de incidentes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <Script src="https://kit.fontawesome.com/832759ddef.js"/>
      </head>
      <body className="bg-gray-300">
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <main style={{ flex: "1" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
