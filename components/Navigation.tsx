import Link from 'next/link'

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const linkClass = (page: string) => 
    currentPage === page 
      ? "text-blue-600 font-semibold" 
      : "text-gray-600 hover:text-gray-900"

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Lanssie
          </Link>
          <div className="space-x-4">
            <Link href="/about" className={linkClass('about')}>
              About
            </Link>
            <Link href="/cv" className={linkClass('cv')}>
              CV
            </Link>
            <Link href="/contact" className={linkClass('contact')}>
              Contact
            </Link>
            <Link href="/vr" className={linkClass('vr')}>
              VR
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

