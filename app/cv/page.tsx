import Link from 'next/link'

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">Lanssie</Link>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/cv" className="text-blue-600 font-semibold">CV</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/vr" className="text-gray-600 hover:text-gray-900">VR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Curriculum Vitae</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600">Add your education details here</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-600">Add your work experience here</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-600">Add your skills here</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <p className="text-gray-600">Add your projects here</p>
          </section>
        </div>
      </main>
    </div>
  )
}

