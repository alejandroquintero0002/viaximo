import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viaximo - Autenticación',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}