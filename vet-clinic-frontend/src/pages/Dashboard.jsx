import { FaDog, FaCat, FaCalendarAlt, FaPlus } from 'react-icons/fa'

function Dashboard() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Bună ziua, Dan! 👋</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Bine ai revenit la DVRVET</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Animale înregistrate</p>
            <h3 className="text-3xl font-bold text-emerald-500">2</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Programări viitoare</p>
            <h3 className="text-3xl font-bold text-emerald-500">1</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Programări totale</p>
            <h3 className="text-3xl font-bold text-emerald-500">5</h3>
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
              <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <FaDog className="text-emerald-500 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Max</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Labrador • 3 ani</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <FaCat className="text-emerald-500 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Luna</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Pisică Persană • 2 ani</p>
                </div>
              </div>
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
              <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-gray-700 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-emerald-500 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Consultație — Max</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">20 Mai 2025 • 10:00</p>
                  <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">Confirmată</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard