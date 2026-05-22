import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import translations from '../translations'
import { authService } from '../services/api'

function Login() {
  const { language } = useApp()
  const t = translations[language]
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await authService.login({ email, password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Email sau parolă incorectă')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">{t.loginTitle}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">{t.loginDesc}</p>

        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.loginEmail}</label>
            <input
              type="email"
              placeholder="exemplu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.loginPassword}</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 disabled:opacity-50"
          >
            {loading ? 'Se încarcă...' : t.loginBtn}
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          {t.loginNoAccount}{' '}
          <Link to="/register" className="text-emerald-600 font-semibold hover:underline">
            {t.loginRegisterLink}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login