import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">Lanssie</Link>
            <div className="space-x-4">
              <Link href="/about" className="text-blue-600 font-semibold">About</Link>
              <Link href="/cv" className="text-gray-600 hover:text-gray-900">CV</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/vr" className="text-gray-600 hover:text-gray-900">VR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 mb-4">
            Hi, I'm Lanssie. Welcome to my personal website!
          </p>
          <p className="text-lg text-gray-700">
            This is where I share my projects, thoughts, and experiences. Feel free to explore and get in touch.
          </p>
        </div>
      </main>
    </div>
  )
}

