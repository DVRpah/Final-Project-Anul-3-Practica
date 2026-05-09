import { Link } from 'react-router-dom'
import { FaStethoscope, FaSyringe, FaFlask } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <section className="bg-emerald-50 py-18 px-8 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 mb-4">
          Bine ați venit la DVRVET
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Clinica veterinară unde animalele voastre sunt pe primul loc. 
          Programați o vizită rapid și ușor online.
        </p>
        <Link 
          to="/register" 
          className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600"
        >
          Programează acum
        </Link>
      </section>

      <section className="py-10 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Serviciile noastre
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <FaStethoscope className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultații</h3>
            <p className="text-gray-500">Consultații generale pentru toate tipurile de animale.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <FaSyringe className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vaccinări</h3>
            <p className="text-gray-500">Program complet de vaccinare pentru sănătatea animalului.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <FaFlask className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Analize</h3>
            <p className="text-gray-500">Analize de laborator rapide și precise.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home