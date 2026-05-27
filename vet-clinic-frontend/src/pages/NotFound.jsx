import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <FaPaw className="text-emerald-500 text-8xl mx-auto mb-6" />
        <h1 className="text-9xl font-bold text-emerald-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Pagina nu a fost găsită</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Pagina pe care o cauți nu există sau a fost mutată.</p>
        <Link to="/" className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600">
          Înapoi acasă
        </Link>
      </div>
    </div>
  )
}

export default NotFound