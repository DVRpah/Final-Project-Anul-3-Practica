import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { FaSun, FaMoon, FaPaw, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa'
import translations from '../translations'

function Navbar() {
  const { darkMode, toggleDarkMode, language, setLanguage } = useApp()
  const t = translations[language]
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
    setMenuOpen(false)
  }

  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white px-4 py-4 shadow-md">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <FaPaw />
          DVRVET
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-emerald-200 dark:hover:text-emerald-400">{t.navHome}</Link>

          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-emerald-200 dark:hover:text-emerald-400">Dashboard</Link>
              <Link to="/appointments" className="hover:text-emerald-200 dark:hover:text-emerald-400">Programări</Link>
              {user.role === 'admin' && (
              <Link to="/admin" className="bg-emerald-700 dark:bg-emerald-600 text-white px-4 py-1 rounded-full font-semibold hover:bg-emerald-800 text-sm">
                Admin
              </Link>
                )}
              <span className="text-emerald-200 text-sm">Bună, {user.firstName}!</span>
              <button
                onClick={handleLogout}
                className="bg-white dark:bg-red-500 text-emerald-500 dark:text-white px-4 py-1 rounded-full font-semibold hover:bg-emerald-50 dark:hover:bg-red-600 flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-emerald-200 dark:hover:text-emerald-400">{t.navLogin}</Link>
              <Link to="/register" className="bg-white dark:bg-emerald-500 text-emerald-500 dark:text-white px-4 py-1 rounded-full font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-600 border border-transparent dark:border-emerald-400">
                {t.navRegister}
              </Link>
            </>
          )}

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

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-emerald-200">{t.navHome}</Link>

          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-emerald-200">Dashboard</Link>
              <Link to="/appointments" onClick={() => setMenuOpen(false)} className="hover:text-emerald-200">Programări</Link>
              {user.role === 'admin' && (
              <Link to="/admin" onClick={() => setMenuOpen(false)} className="bg-emerald-700 text-white px-4 py-1 rounded-full font-semibold text-center">
               Admin
              </Link>
                  )}
              <button onClick={handleLogout} className="bg-white text-emerald-500 px-4 py-1 rounded-full font-semibold text-left flex items-center gap-2">
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-emerald-200">{t.navLogin}</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="bg-white text-emerald-500 px-4 py-1 rounded-full font-semibold text-center hover:bg-emerald-50">
                {t.navRegister}
              </Link>
            </>
          )}

          <div className="flex gap-1 bg-emerald-600 rounded-full px-1 py-1 w-fit">
            {['ro', 'ru', 'en'].map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded-full text-sm font-semibold transition-all ${
                  language === lang
                    ? 'bg-white text-emerald-600'
                    : 'text-white hover:bg-emerald-400'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-400 transition-all w-fit"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar