import { FaCalendarAlt, FaDog, FaCat, FaPlus } from 'react-icons/fa'

function Appointments() {
  const appointments = [
    { id: 1, pet: 'Max', petType: 'dog', service: 'Consultație', doctor: 'Dr. Popescu', date: '20 Mai 2025', time: '10:00', status: 'Confirmată' },
    { id: 2, pet: 'Luna', petType: 'cat', service: 'Vaccinare', doctor: 'Dr. Ionescu', date: '15 Apr 2025', time: '11:30', status: 'Finalizată' },
    { id: 3, pet: 'Max', petType: 'dog', service: 'Analize', doctor: 'Dr. Mihai', date: '10 Mar 2025', time: '09:00', status: 'Finalizată' },
    { id: 4, pet: 'Luna', petType: 'cat', service: 'Consultație', doctor: 'Dr. Popescu', date: '01 Feb 2025', time: '14:00', status: 'Anulată' },
  ]

  const statusColors = {
    'Confirmată': 'bg-emerald-100 text-emerald-600',
    'Finalizată': 'bg-blue-100 text-blue-600',
    'Anulată': 'bg-red-100 text-red-600',
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Programările mele</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Istoricul tuturor programărilor</p>
          </div>
          <button className="bg-emerald-500 text-white px-4 md:px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-600 text-sm md:text-base">
            <FaPlus /> <span className="hidden md:inline">Programare nouă</span><span className="md:hidden">Nouă</span>
          </button>
        </div>

        <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                <th className="p-4">Animal</th>
                <th className="p-4">Serviciu</th>
                <th className="p-4">Doctor</th>
                <th className="p-4">Data</th>
                <th className="p-4">Ora</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {appointments.map(app => (
                <tr key={app.id} className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                        {app.petType === 'dog' ? <FaDog className="text-emerald-500" /> : <FaCat className="text-emerald-500" />}
                      </div>
                      <span className="font-medium">{app.pet}</span>
                    </div>
                  </td>
                  <td className="p-4">{app.service}</td>
                  <td className="p-4">{app.doctor}</td>
                  <td className="p-4">{app.date}</td>
                  <td className="p-4">{app.time}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[app.status]}`}>
                      {app.status}
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
                    {app.petType === 'dog' ? <FaDog className="text-emerald-500" /> : <FaCat className="text-emerald-500" />}
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-white">{app.pet}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[app.status]}`}>
                  {app.status}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm ml-12">{app.service} • {app.doctor}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm ml-12">{app.date} • {app.time}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Appointments