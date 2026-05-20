import { FaUsers, FaCalendarAlt, FaUserMd, FaDog } from 'react-icons/fa'

function Admin() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Panou Admin</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gestionează clinica DVRVET</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaUsers className="text-emerald-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Utilizatori</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">24</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaUserMd className="text-emerald-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Doctori</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">3</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-emerald-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Programări azi</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">8</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <FaDog className="text-emerald-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Animale</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">31</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Programări recente</h2>
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
              <tr className="text-gray-700 dark:text-gray-300">
                <td className="py-3">Dan Vrancean</td>
                <td className="py-3">Max</td>
                <td className="py-3">Consultație</td>
                <td className="py-3">Dr. Popescu</td>
                <td className="py-3">18 Mai 2025</td>
                <td className="py-3"><span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-xs">Confirmată</span></td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-300">
                <td className="py-3">Ana Vrancean</td>
                <td className="py-3">Luna</td>
                <td className="py-3">Vaccinare</td>
                <td className="py-3">Dr. Ionescu</td>
                <td className="py-3">20 Mai 2025</td>
                <td className="py-3"><span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">În așteptare</span></td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-300">
                <td className="py-3">Lucia Fretescu</td>
                <td className="py-3">Rocky</td>
                <td className="py-3">Analize</td>
                <td className="py-3">Dr. Mihai</td>
                <td className="py-3">21 Mai 2025</td>
                <td className="py-3"><span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Anulată</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Admin