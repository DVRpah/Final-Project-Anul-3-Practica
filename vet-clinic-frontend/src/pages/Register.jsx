import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import translations from '../translations'
import { authService } from '../services/api'

function Register() {
  const { language } = useApp()
  const t = translations[language]
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirm) {
      setError('Parolele nu coincid!')
      return
    }

    setLoading(true)
    try {
      const response = await authService.register({ firstName, lastName, email, password, phone })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Eroare la înregistrare')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">{t.registerTitle}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">{t.registerDesc}</p>

        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Prenume</label>
              <input
                type="text"
                placeholder="Dan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Nume</label>
              <input
                type="text"
                placeholder="Vrancean"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.registerEmail}</label>
            <input
              type="email"
              placeholder="exemplu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Telefon</label>
            <input
              type="text"
              placeholder="069123456"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.registerPassword}</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.registerConfirm}</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 disabled:opacity-50"
          >
            {loading ? 'Se încarcă...' : t.registerBtn}
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          {t.registerHaveAccount}{' '}
          <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
            {t.registerLoginLink}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register