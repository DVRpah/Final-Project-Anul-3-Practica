import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Bună ziua!</h2>
        <p className="text-gray-500 text-center mb-8">Introduceți datele pentru a vă autentifica</p>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="exemplu@email.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Parolă</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600">
          Autentificare
        </button>

        <p className="text-center text-gray-500 mt-4">
          Nu ai cont?{' '}
          <Link to="/register" className="text-emerald-600 font-semibold hover:underline">
            Înregistrează-te
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login