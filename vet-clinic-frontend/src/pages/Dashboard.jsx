import { useState, useEffect } from 'react'
import { FaDog, FaCat, FaCalendarAlt, FaPlus } from 'react-icons/fa'
import { petsService, appointmentsService } from '../services/api'

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petsRes = await petsService.getByUser(user.id)
        setPets(petsRes.data)

        const appRes = await appointmentsService.getByUser(user.id)
        setAppointments(appRes.data)
      } catch (err) {
        console.error('Eroare la încărcarea datelor:', err)
      } finally {
        setLoading(false)
      }
    }

    if (user.id) fetchData()
  }, [user.id])

  const upcomingAppointments = appointments.filter(a => new Date(a.date) >= new Date())

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Bună ziua, {user.firstName}! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Bine ai revenit la DVRVET</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Animale înregistrate</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : pets.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Programări viitoare</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : upcomingAppointments.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Programări totale</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : appointments.length}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Animalele mele</h2>
              <button className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-emerald-600">
                <FaPlus /> Adaugă
              </button>
            </div>
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-400 text-center">Se încarcă...</p>
              ) : pets.length === 0 ? (
                <p className="text-gray-400 text-center">Nu ai animale înregistrate</p>
              ) : (
                pets.map(pet => (
                  <div key={pet.id} className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      {pet.species === 'pisica' ? (
                        <FaCat className="text-emerald-500 text-xl" />
                      ) : (
                        <FaDog className="text-emerald-500 text-xl" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{pet.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {pet.breed} • {pet.age} ani
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Programări viitoare</h2>
              <button className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-emerald-600">
                <FaPlus /> Nouă
              </button>
            </div>
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-400 text-center">Se încarcă...</p>
              ) : upcomingAppointments.length === 0 ? (
                <p className="text-gray-400 text-center">Nu ai programări viitoare</p>
              ) : (
                upcomingAppointments.map(app => (
                  <div key={app.id} className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-emerald-500 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {app.service?.name} — {app.pet?.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {new Date(app.date).toLocaleDateString('ro-RO')}
                      </p>
                      <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard