import Link from 'next/link'
import Image from 'next/image'

export default function Surprise() {
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-white/10 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">Lanssie</Link>
            <div className="space-x-4">
              <Link href="/about" className="text-white/80 hover:text-white">About</Link>
              <Link href="/cv" className="text-white/80 hover:text-white">CV</Link>
              <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
              <Link href="/vr" className="text-white/80 hover:text-white">VR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Surprise!</h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-8">
          <p className="text-lg text-white mb-4">
            This is your surprise page! You can add your birthday page content here.
          </p>
          <p className="text-white/80">
            The parallax scrolling effect from your original surprise.html can be added here.
          </p>
        </div>
      </main>
    </div>
  )
}

