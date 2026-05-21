import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import translations from '../translations'

function Footer() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <footer className="bg-emerald-600 dark:bg-gray-950 text-white py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaPaw /> DVRVET
          </h3>
          <p className="text-emerald-100 dark:text-gray-400 text-sm">
            {t.footerDesc}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t.footerNav}</h3>
          <ul className="space-y-2 text-emerald-100 dark:text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">{t.navHome}</Link></li>
            <li><Link to="/login" className="hover:text-white">{t.navLogin}</Link></li>
            <li><Link to="/register" className="hover:text-white">{t.navRegister}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t.footerContact}</h3>
          <ul className="space-y-2 text-emerald-100 dark:text-gray-400 text-sm">
            <li>📍 Chișinău, Moldova</li>
            <li>📞 +373 69 389 977</li>
            <li>✉️ dan07vr@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto border-t border-emerald-500 dark:border-gray-700 mt-8 pt-6 text-center text-emerald-100 dark:text-gray-400 text-sm">
        © 2025 DVRVET. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer