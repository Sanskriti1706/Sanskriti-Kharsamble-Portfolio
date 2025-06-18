import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sanskriti Kharsamble - Full Stack Developer",
  description: "Full Stack Developer | Cloud Enthusiast | Award-Winning Innovator. Masters in Computer Science student with expertise in Java, React, Spring Boot, and AWS.",
  keywords: "Full Stack Developer, Java, React, Spring Boot, AWS, Cloud Computing, Software Engineer",
  authors: [{ name: "Sanskriti Kharsamble" }],
  openGraph: {
    title: "Sanskriti Kharsamble - Full Stack Developer",
    description: "Full Stack Developer | Cloud Enthusiast | Award-Winning Innovator",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.className}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
