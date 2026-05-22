import { useState, useEffect } from 'react'
import { FaUsers, FaCalendarAlt, FaUserMd, FaDog, FaPlus, FaTimes } from 'react-icons/fa'
import { appointmentsService, doctorsService, servicesService } from '../services/api'
import api from '../services/api'

function Admin() {
  const [appointments, setAppointments] = useState([])
  const [doctors, setDoctors] = useState([])
  const [services, setServices] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('appointments')

  const [showDoctorModal, setShowDoctorModal] = useState(false)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [newDoctor, setNewDoctor] = useState({ firstName: '', lastName: '', specialization: '', phone: '', email: '' })
  const [newService, setNewService] = useState({ name: '', description: '', price: '', duration: '' })

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
      const [appRes, doctorsRes, servicesRes, usersRes] = await Promise.all([
        appointmentsService.getAll(),
        doctorsService.getAll(),
        servicesService.getAll(),
        api.get('/users'),
      ])
      setAppointments(appRes.data)
      setDoctors(doctorsRes.data)
      setServices(servicesRes.data)
      setUsers(usersRes.data)
    } catch (err) {
      console.error('Eroare:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAddDoctor = async (e) => {
    e.preventDefault()
    try {
      await api.post('/doctors', newDoctor)
      setShowDoctorModal(false)
      setNewDoctor({ firstName: '', lastName: '', specialization: '', phone: '', email: '' })
      fetchData()
    } catch (err) {
      console.error('Eroare:', err)
    }
  }

  const handleAddService = async (e) => {
    e.preventDefault()
    try {
      await api.post('/services', { ...newService, price: +newService.price, duration: +newService.duration })
      setShowServiceModal(false)
      setNewService({ name: '', description: '', price: '', duration: '' })
      fetchData()
    } catch (err) {
      console.error('Eroare:', err)
    }
  }

  const handleDeleteDoctor = async (id) => {
    if (window.confirm('Ștergi doctorul?')) {
      await api.delete(`/doctors/${id}`)
      fetchData()
    }
  }

  const handleDeleteService = async (id) => {
    if (window.confirm('Ștergi serviciul?')) {
      await api.delete(`/services/${id}`)
      fetchData()
    }
  }

  const handleStatusChange = async (id, status) => {
    await appointmentsService.update(id, { status })
    fetchData()
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Panou Admin</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gestionează clinica DVRVET</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaUsers className="text-emerald-500 text-lg" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 dark:text-gray-400 text-xs">Utilizatori</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{loading ? '...' : users.length}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaUserMd className="text-emerald-500 text-lg" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 dark:text-gray-400 text-xs">Doctori</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{loading ? '...' : doctors.length}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-emerald-500 text-lg" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 dark:text-gray-400 text-xs">Programări totale</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{loading ? '...' : appointments.length}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaDog className="text-emerald-500 text-lg" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 dark:text-gray-400 text-xs">Servicii</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{loading ? '...' : services.length}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {['appointments', 'doctors', 'services'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === tab ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {tab === 'appointments' ? 'Programări' : tab === 'doctors' ? 'Doctori' : 'Servicii'}
            </button>
          ))}
        </div>

        {activeTab === 'appointments' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Toate programările</h2>
            {loading ? <p className="text-gray-400 text-center">Se încarcă...</p> : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Animal</th>
                      <th className="pb-3">Serviciu</th>
                      <th className="pb-3">Doctor</th>
                      <th className="pb-3">Data</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {appointments.map(app => (
                      <tr key={app.id} className="text-gray-700 dark:text-gray-300">
                        <td className="py-3">{app.user?.firstName} {app.user?.lastName}</td>
                        <td className="py-3">{app.pet?.name}</td>
                        <td className="py-3">{app.service?.name}</td>
                        <td className="py-3">Dr. {app.doctor?.lastName}</td>
                        <td className="py-3">{new Date(app.date).toLocaleDateString('ro-RO')}</td>
                        <td className="py-3">
                          <select value={app.status} onChange={e => handleStatusChange(app.id, e.target.value)}
                            className={`px-2 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${statusColors[app.status]}`}>
                            <option value="pending">În așteptare</option>
                            <option value="confirmed">Confirmată</option>
                            <option value="completed">Finalizată</option>
                            <option value="cancelled">Anulată</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Doctori</h2>
              <button onClick={() => setShowDoctorModal(true)} className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-emerald-600">
                <FaPlus /> Adaugă doctor
              </button>
            </div>
            <div className="space-y-3">
              {doctors.map(doc => (
                <div key={doc.id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Dr. {doc.firstName} {doc.lastName}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{doc.specialization}</p>
                    <p className="text-gray-400 text-sm">{doc.email} • {doc.phone}</p>
                  </div>
                  <button onClick={() => handleDeleteDoctor(doc.id)} className="text-red-400 hover:text-red-600 p-2">
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Servicii</h2>
              <button onClick={() => setShowServiceModal(true)} className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-emerald-600">
                <FaPlus /> Adaugă serviciu
              </button>
            </div>
            <div className="space-y-3">
              {services.map(s => (
                <div key={s.id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{s.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{s.description}</p>
                    <p className="text-emerald-500 font-semibold">{s.price} MDL • {s.duration} min</p>
                  </div>
                  <button onClick={() => handleDeleteService(s.id)} className="text-red-400 hover:text-red-600 p-2">
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showDoctorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Adaugă doctor</h3>
              <button onClick={() => setShowDoctorModal(false)} className="text-gray-400 hover:text-gray-600"><FaTimes /></button>
            </div>
            <form onSubmit={handleAddDoctor} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Prenume</label>
                  <input type="text" required value={newDoctor.firstName} onChange={e => setNewDoctor({...newDoctor, firstName: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Nume</label>
                  <input type="text" required value={newDoctor.lastName} onChange={e => setNewDoctor({...newDoctor, lastName: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Specializare</label>
                <input type="text" required value={newDoctor.specialization} onChange={e => setNewDoctor({...newDoctor, specialization: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                <input type="email" value={newDoctor.email} onChange={e => setNewDoctor({...newDoctor, email: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Telefon</label>
                <input type="text" value={newDoctor.phone} onChange={e => setNewDoctor({...newDoctor, phone: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600">
                Adaugă doctor
              </button>
            </form>
          </div>
        </div>
      )}

      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Adaugă serviciu</h3>
              <button onClick={() => setShowServiceModal(false)} className="text-gray-400 hover:text-gray-600"><FaTimes /></button>
            </div>
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Nume serviciu</label>
                <input type="text" required value={newService.name} onChange={e => setNewService({...newService, name: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Descriere</label>
                <textarea value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" rows={2} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Preț (MDL)</label>
                  <input type="number" required value={newService.price} onChange={e => setNewService({...newService, price: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Durată (min)</label>
                  <input type="number" value={newService.duration} onChange={e => setNewService({...newService, duration: e.target.value})}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600">
                Adaugă serviciu
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin