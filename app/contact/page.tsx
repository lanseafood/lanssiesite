import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">Lanssie</Link>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/cv" className="text-gray-600 hover:text-gray-900">CV</Link>
              <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
              <Link href="/vr" className="text-gray-600 hover:text-gray-900">VR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 mb-6">Feel free to reach out to me!</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">Add your email here</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
              <a 
                href="https://github.com/lanseafood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                lanseafood
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">Add your LinkedIn profile</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

