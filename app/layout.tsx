import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navigation/Topbar'
import Footer from './components/Navigation/Footer'
import FloatingChat from './components/Navigation/FloatingChat'

export const metadata: Metadata = {
  title: 'BdSoft.org — Software Company & Developer Growth Platform',

  description:
    'BdSoft.org is a modern software company focused on web applications, mobile apps, SaaS platforms, automation systems, and custom software solutions while helping freshers become skilled senior developers through real-world experience and teamwork.',

  keywords: [
    'BdSoft',
    'BdSoft.org',
    'Software Company',
    'Web Development',
    'Mobile App Development',
    'SaaS Platform',
    'Custom Software',
    'Software Solutions',
    'Bangladesh Software Company',
    'Developer Team',
    'Freshers to Senior Developers',
    'API Development',
    'Automation Systems',
  ],

  authors: [{ name: 'BdSoft.org' }],

  creator: 'BdSoft.org',

  openGraph: {
    title: 'BdSoft.org — Software Company & Developer Growth Platform',

    description:
      'Building innovative software solutions and transforming freshers into skilled senior developers through practical experience, teamwork, and real-world projects.',

    siteName: 'BdSoft.org',

    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full h-16 bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 text-white flex items-center px-4 z-50">
            <Navbar />
          </nav>

          {/* Main Content */}
          <main className="grow pt-16">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Message Button */}
          <FloatingChat/>
          

        </div>
      </body>
    </html>
  )
}