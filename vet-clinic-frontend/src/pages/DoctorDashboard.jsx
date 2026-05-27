import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaDog, FaCat } from 'react-icons/fa'
import api from '../services/api'
import { useApp } from '../context/AppContext'
import translations from '../translations'

function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const { language } = useApp()
  const t = translations[language]

  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-600',
    'confirmed': 'bg-emerald-100 text-emerald-600',
    'completed': 'bg-blue-100 text-blue-600',
    'cancelled': 'bg-red-100 text-red-600',
  }

  const statusLabels = {
    'pending': t.statusPending,
    'confirmed': t.statusConfirmed,
    'completed': t.statusCompleted,
    'cancelled': t.statusCancelled,
  }

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await api.get(`/appointments/doctor/${user.doctorId}`)
        setAppointments(res.data)
      } catch (err) {
        console.error('Eroare:', err)
      } finally {
        setLoading(false)
      }
    }
    if (user.doctorId) fetchAppointments()
  }, [user.doctorId])

  const today = appointments.filter(a => {
    const d = new Date(a.date)
    const now = new Date()
    return d.toDateString() === now.toDateString()
  })

  const upcoming = appointments.filter(a => new Date(a.date) >= new Date())

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t.dashboardTitle}, Dr. {user.firstName}! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t.dashboardDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.doctorAppointmentsToday}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : today.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.dashboardUpcoming}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : upcoming.length}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.dashboardTotal}</p>
            <h3 className="text-3xl font-bold text-emerald-500">{loading ? '...' : appointments.length}</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{t.doctorAllAppointments}</h2>
          {loading ? (
            <p className="text-gray-400 text-center">{t.dashboardLoading}</p>
          ) : appointments.length === 0 ? (
            <div className="text-center py-12">
              <FaCalendarAlt className="text-gray-300 text-5xl mx-auto mb-4" />
              <p className="text-gray-400">{t.appointmentsNoData}</p>
            </div>
          ) : (
            <>
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                      <th className="pb-3">{t.doctorClient}</th>
                      <th className="pb-3">{t.appointmentsPet}</th>
                      <th className="pb-3">{t.appointmentsService}</th>
                      <th className="pb-3">{t.appointmentsDate}</th>
                      <th className="pb-3">{t.appointmentsStatus}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {appointments.map(app => (
                      <tr key={app.id} className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3">{app.user?.firstName} {app.user?.lastName}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                              {app.pet?.species === 'pisica' ? <FaCat className="text-emerald-500 text-sm" /> : <FaDog className="text-emerald-500 text-sm" />}
                            </div>
                            {app.pet?.name}
                          </div>
                        </td>
                        <td className="py-3">{app.service?.name}</td>
                        <td className="py-3">{new Date(app.date).toLocaleDateString('ro-RO')} {new Date(app.date).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}</td>
                        <td className="py-3">
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
                  <div key={app.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-800 dark:text-white">{app.user?.firstName} {app.user?.lastName}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[app.status]}`}>
                        {statusLabels[app.status] || app.status}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{app.pet?.name} • {app.service?.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date(app.date).toLocaleDateString('ro-RO')}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard