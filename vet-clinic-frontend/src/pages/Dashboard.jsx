import { useState, useEffect } from 'react'
import { FaDog, FaCat, FaCalendarAlt, FaPlus, FaTimes } from 'react-icons/fa'
import { petsService, appointmentsService } from '../services/api'
import { useApp } from '../context/AppContext'
import translations from '../translations'
import { Link } from 'react-router-dom'

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const { language } = useApp()
  const t = translations[language]

  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddPet, setShowAddPet] = useState(false)
  const [newPet, setNewPet] = useState({ name: '', species: 'caine', breed: '', age: '', weight: '', image: '' })
  const [savingPet, setSavingPet] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewPet({...newPet, image: reader.result})
      }
      reader.readAsDataURL(file)
    }
  }

  const fetchData = async () => {
    try {
      const petsRes = await petsService.getByUser(user.id)
      setPets(petsRes.data)
      const appRes = await appointmentsService.getByUser(user.id)
      setAppointments(appRes.data)
    } catch (err) {
      console.error('Eroare:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.id) fetchData()
  }, [user.id])

  const handleAddPet = async (e) => {
    e.preventDefault()
    setSavingPet(true)
    try {
      await petsService.create({ ...newPet, userId: user.id, age: +newPet.age, weight: +newPet.weight })
      setShowAddPet(false)
      setNewPet({ name: '', species: 'caine', breed: '', age: '', weight: '', image: '' })
      fetchData()
    } catch (err) {
      console.error('Eroare la adăugare:', err)
    } finally {
      setSavingPet(false)
    }
  }

  const upcomingAppointments = appointments.filter(a => new Date(a.date) >= new Date())

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t.dashboardTitle}, {user.firstName}! 
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t.dashboardDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.dashboardPets}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : pets.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.dashboardUpcoming}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : upcomingAppointments.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.dashboardTotal}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : appointments.length}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.dashboardMyPets}</h2>
              <button onClick={() => setShowAddPet(true)} className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-emerald-600">
                <FaPlus /> {t.dashboardAddPet}
              </button>
            </div>
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-400 text-center">{t.dashboardLoading}</p>
              ) : pets.length === 0 ? (
                <p className="text-gray-400 text-center">{t.dashboardNoPets}</p>
              ) : (
                pets.map(pet => (
                  <div key={pet.id} className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                    {pet.image ? (
                      <img src={pet.image} alt={pet.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                        {pet.species === 'pisica' ? <FaCat className="text-emerald-500 text-xl" /> : <FaDog className="text-emerald-500 text-xl" />}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 dark:text-white">{pet.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{pet.breed} • {pet.age} ani</p>
                    </div>
                    <button
                      onClick={async () => {
                        if (window.confirm(`Ștergi animalul ${pet.name}?`)) {
                          await petsService.delete(pet.id)
                          fetchData()
                        }
                      }}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.dashboardMyAppointments}</h2>
              <Link to="/appointments" className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-emerald-600">
                <FaPlus /> {t.dashboardNewApp}
              </Link>
            </div>
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-400 text-center">{t.dashboardLoading}</p>
              ) : upcomingAppointments.length === 0 ? (
                <p className="text-gray-400 text-center">{t.dashboardNoAppointments}</p>
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

      {showAddPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t.addPetTitle}</h3>
              <button onClick={() => setShowAddPet(false)} className="text-gray-400 hover:text-gray-600">
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleAddPet} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.addPetName}</label>
                <input type="text" required value={newPet.name} onChange={e => setNewPet({...newPet, name: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.addPetSpecies}</label>
                <select value={newPet.species} onChange={e => setNewPet({...newPet, species: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500">
                  <option value="caine">{t.addPetDog}</option>
                  <option value="pisica">{t.addPetCat}</option>
                  <option value="altul">{t.addPetOther}</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.addPetBreed}</label>
                <input type="text" value={newPet.breed} onChange={e => setNewPet({...newPet, breed: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.addPetAge}</label>
                  <input type="number" value={newPet.age} onChange={e => setNewPet({...newPet, age: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{t.addPetWeight}</label>
                  <input type="number" value={newPet.weight} onChange={e => setNewPet({...newPet, weight: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Fotografie</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
                />
                {newPet.image && (
                  <img src={newPet.image} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-xl" />
                )}
              </div>
              <button type="submit" disabled={savingPet}
                className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 disabled:opacity-50">
                {savingPet ? t.addPetSaving : t.addPetBtn}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard