import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { FaSun, FaMoon, FaPaw } from 'react-icons/fa'

function Navbar() {
  const { darkMode, toggleDarkMode, language, setLanguage } = useApp()

  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <FaPaw />
        DVRVET
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-emerald-200 dark:hover:text-emerald-400">Acasă</Link>
        <Link to="/login" className="hover:text-emerald-200 dark:hover:text-emerald-400">Login</Link>
        <Link to="/register" className="bg-white dark:bg-emerald-500 text-emerald-500 dark:text-white px-4 py-1 rounded-full font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-600 border border-transparent dark:border-emerald-400">
  Înregistrare
</Link>

        <div className="flex gap-1 bg-emerald-600 dark:bg-emerald-500 rounded-full px-1 py-1">
          {['ro', 'ru', 'en'].map(lang => (
            <button
              key={lang}
               onClick={() => setLanguage(lang)}
                 className={`px-2 py-1 rounded-full text-sm font-semibold transition-all ${
                language === lang
                ? 'bg-white text-emerald-600 dark:bg-emerald-700 dark:text-white'
               : 'text-white hover:bg-emerald-400 dark:hover:bg-emerald-600'
                   }`}
                          >
                 {lang.toUpperCase()}
            </button>
           ))}
        </div>

        <button
          onClick={toggleDarkMode}
          className="bg-emerald-600 dark:bg-gray-700 p-2 rounded-full hover:bg-emerald-400 transition-all"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar