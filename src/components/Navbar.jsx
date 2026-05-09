import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-emerald-500 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">DVRVET</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-emerald-200">Acasă</Link>
        <Link to="/login" className="hover:text-emerald-200">Login</Link>
        <Link to="/register" className="bg-white text-emerald-500 px-4 py-1 rounded-full font-semibold hover:bg-emerald-100">Înregistrare</Link>
      </div>
    </nav>
  )
}

export default Navbar