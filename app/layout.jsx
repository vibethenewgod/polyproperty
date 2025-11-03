import "./globals.css"
import "./fontawesome"

export const metadata = {
  title: "Poly Property Limited - Ibadan Real Estate",
  description:
    "Poly Property Limited - Premier real estate agency in Ibadan offering residential, commercial, and property management services",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
