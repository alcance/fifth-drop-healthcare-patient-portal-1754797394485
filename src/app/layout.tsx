import './globals.css'

export const metadata = {
  title: 'fifth-drop-healthcare-patient-portal-1754797394485 - Healthcare Portal',
  description: 'Super drop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}