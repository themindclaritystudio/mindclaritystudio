import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "The Mind Clarity Studio | For Stronger Minds, Think Lavina",
  description:
    "The Mind Clarity Studio by Lavina Pratap Bhambhani offers psychology-based coaching, emotional wellness guidance, career mentorship, research consulting, workshops, and personal development programs designed to help individuals achieve clarity, confidence, and meaningful growth.",
  keywords: [
    "The Mind Clarity Studio",
    "Lavina Pratap Bhambhani",
    "Psychologist",
    "Career Mentor",
    "Mental Wellness",
    "Personal Growth",
    "Emotional Wellbeing",
    "Career Guidance",
    "Research Consultant",
    "Life Coaching",
    "Workshops",
    "Mentorship",
  ],
  icons:{
    icon:"/favicon.ico"
  },
  authors: [{ name: "Lavina Pratap Bhambhani" }],
  creator: "The Mind Clarity Studio",
  publisher: "The Mind Clarity Studio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
