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
  metadataBase: new URL("https://www.themindclaritystudio.com"),

  alternates: {
    canonical: "https://www.themindclaritystudio.com",
  },
  title: "The Mind Clarity Studio | For Stronger Minds, Think Lavina",

  description:
    "The Mind Clarity Studio by Lavina Pratap Bhambhani offers psychology-based coaching, emotional wellness guidance, career mentorship, research consulting, workshops, and personal development programs designed to help individuals achieve clarity, confidence, and meaningful growth.",

  keywords: [
    "The Mind Clarity Studio",
    "Lavina Pratap Bhambhani",
    "Lavina Bhambhani",

    // Psychology
    "Psychologist",
    "Mental Health Expert",
    "Clinical Psychology",
    "Counselling",
    "Psychological Coaching",
    "Mind Coaching",
    "Mental Wellness",
    "Mental Wellbeing",
    "Emotional Wellness",
    "Emotional Wellbeing",
    "Emotional Intelligence",
    "Emotional Resilience",
    "Stress Management",
    "Self Awareness",
    "Mindset Coaching",

    // Personal Growth
    "Personal Growth",
    "Personal Development",
    "Self Development",
    "Life Coaching",
    "Confidence Building",
    "Clarity and Confidence",
    "Goal Setting",
    "Decision Making",
    "Mindset Mastery",

    // Education & Research
    "Educator",
    "Researcher",
    "Research Consultant",
    "Academic Mentor",
    "Research Guidance",
    "Academic Consulting",
    "Publication Mentorship",
    "Research Methodology",
    "Research Scholar Support",

    // Career & Mentorship
    "Career Mentor",
    "Career Guidance",
    "Professional Development",
    "Leadership Development",
    "Student Mentorship",
    "Career Coaching",

    // Workshops & Training
    "Corporate Training",
    "Corporate Workshops",
    "Leadership Training",
    "Employee Wellbeing",
    "Mental Health Workshops",
    "Personal Development Workshops",
    "Training Programs",

    // Author
    "Author",
    "International Author",
    "Published Author",

    // Brand
    "Think Lavina",
    "For Stronger Minds Think Lavina",
    "The Mind Clarity Studio by Lavina",
    "Mind Clarity Studio",

    // Location SEO
    "Psychologist in Ahmedabad",
    "Psychologist in Gujarat",
    "Career Mentor in Ahmedabad",
    "Mental Wellness Ahmedabad",
    "Life Coach Gujarat",
    "Counsellor Ahmedabad",
    "Psychologist India",
  ],

  authors: [{ name: "Lavina Pratap Bhambhani" }],
  creator: "The Mind Clarity Studio",
  publisher: "The Mind Clarity Studio",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "The Mind Clarity Studio | For Stronger Minds, Think Lavina",
    description: "Build Clarity, Strengthen Resilience, Create Meaningful Growth.",

    url: "https://www.themindclaritystudio.com",
    siteName: "The Mind Clarity Studio",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "The Mind Clarity Studio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Mind Clarity Studio | For Stronger Minds, Think Lavina",
    description: "Build Clarity, Strengthen Resilience, Create Meaningful Growth.",
    images: ["/images/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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