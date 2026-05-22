import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaDog, FaCat, FaPlus, FaTimes } from 'react-icons/fa'
import { appointmentsService, petsService, doctorsService, servicesService } from '../services/api'

function Appointments() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const [appointments, setAppointments] = useState([])
  const [pets, setPets] = useState([])
  const [doctors, setDoctors] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [saving, setSaving] = useState(false)
  const [newApp, setNewApp] = useState({ petId: '', doctorId: '', serviceId: '', date: '', notes: '' })

  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-600',
    'confirmed': 'bg-emerald-100 text-emerald-600',
    'completed': 'bg-blue-100 text-blue-600',
    'cancelled': 'bg-red-100 text-red-600',
  }

  const statusLabels = {
    'pending': 'În așteptare',
    'confirmed': 'Confirmată',
    'completed': 'Finalizată',
    'cancelled': 'Anulată',
  }

  const fetchData = async () => {
    try {
      const [appRes, petsRes, doctorsRes, servicesRes] = await Promise.all([
        appointmentsService.getByUser(user.id),
        petsService.getByUser(user.id),
        doctorsService.getAll(),
        servicesService.getAll(),
      ])
      setAppointments(appRes.data)
      setPets(petsRes.data)
      setDoctors(doctorsRes.data)
      setServices(servicesRes.data)
    } catch (err) {
      console.error('Eroare:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.id) fetchData()
  }, [user.id])

  const handleAddAppointment = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await appointmentsService.create({
        userId: user.id,
        petId: +newApp.petId,
        doctorId: +newApp.doctorId,
        serviceId: +newApp.serviceId,
        date: new Date(newApp.date),
        notes: newApp.notes,
        status: 'pending',
      })
      setShowModal(false)
      setNewApp({ petId: '', doctorId: '', serviceId: '', date: '', notes: '' })
      fetchData()
    } catch (err) {
      console.error('Eroare la adăugare:', err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Programările mele</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Istoricul tuturor programărilor</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-emerald-500 text-white px-4 md:px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-600 text-sm md:text-base">
            <FaPlus /> <span className="hidden md:inline">Programare nouă</span><span className="md:hidden">Nouă</span>
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Se încarcă...</p>
        ) : appointments.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border border-gray-200 dark:border-gray-700">
            <FaCalendarAlt className="text-gray-300 text-5xl mx-auto mb-4" />
            <p className="text-gray-400">Nu ai programări încă</p>
          </div>
        ) : (
          <>
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                    <th className="p-4">Animal</th>
                    <th className="p-4">Serviciu</th>
                    <th className="p-4">Doctor</th>
                    <th className="p-4">Data</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {appointments.map(app => (
                    <tr key={app.id} className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                            {app.pet?.species === 'pisica' ? <FaCat className="text-emerald-500" /> : <FaDog className="text-emerald-500" />}
                          </div>
                          <span className="font-medium">{app.pet?.name}</span>
                        </div>
                      </td>
                      <td className="p-4">{app.service?.name}</td>
                      <td className="p-4">Dr. {app.doctor?.lastName}</td>
                      <td className="p-4">{new Date(app.date).toLocaleDateString('ro-RO')}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[app.status]}`}>
                          {statusLabels[app.status] || app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-4">
              {appointments.map(app => (
                <div key={app.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                        {app.pet?.species === 'pisica' ? <FaCat className="text-emerald-500" /> : <FaDog className="text-emerald-500" />}
                      </div>
                      <p className="font-semibold text-gray-800 dark:text-white">{app.pet?.name}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[app.status]}`}>
                      {statusLabels[app.status] || app.status}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm ml-12">{app.service?.name} • Dr. {app.doctor?.lastName}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm ml-12">{new Date(app.date).toLocaleDateString('ro-RO')}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Programare nouă</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><FaTimes /></button>
            </div>
            <form onSubmit={handleAddAppointment} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Animal</label>
                <select required value={newApp.petId} onChange={e => setNewApp({...newApp, petId: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500">
                  <option value="">Selectează animalul</option>
                  {pets.map(pet => <option key={pet.id} value={pet.id}>{pet.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Serviciu</label>
                <select required value={newApp.serviceId} onChange={e => setNewApp({...newApp, serviceId: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500">
                  <option value="">Selectează serviciul</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.name} — {s.price} MDL</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Doctor</label>
                <select required value={newApp.doctorId} onChange={e => setNewApp({...newApp, doctorId: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500">
                  <option value="">Selectează doctorul</option>
                  {doctors.map(d => <option key={d.id} value={d.id}>Dr. {d.firstName} {d.lastName} — {d.specialization}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Data și ora</label>
                <input type="datetime-local" required value={newApp.date} onChange={e => setNewApp({...newApp, date: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Note</label>
                <textarea value={newApp.notes} onChange={e => setNewApp({...newApp, notes: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" rows={3} />
              </div>
              <button type="submit" disabled={saving}
                className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 disabled:opacity-50">
                {saving ? 'Se salvează...' : 'Creează programare'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Appointments