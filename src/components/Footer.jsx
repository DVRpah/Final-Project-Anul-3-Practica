import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-emerald-600 dark:bg-gray-950 text-white py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaPaw /> DVRVET
          </h3>
          <p className="text-emerald-100 dark:text-gray-400 text-sm">
            Clinica veterinară unde animalele voastre sunt pe primul loc.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigare</h3>
          <ul className="space-y-2 text-emerald-100 dark:text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Acasă</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Înregistrare</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-emerald-100 dark:text-gray-400 text-sm">
            <li> Chișinău, Moldova</li>
            <li> +373 69 123 456</li>
            <li> contact@dvrvet.md</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto border-t border-emerald-500 dark:border-gray-700 mt-8 pt-6 text-center text-emerald-100 dark:text-gray-400 text-sm">
        © 2025 DVRVET. Toate drepturile rezervate.
      </div>
    </footer>
  )
}

export default Footer