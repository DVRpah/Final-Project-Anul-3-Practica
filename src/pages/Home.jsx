import { Link } from 'react-router-dom'
import { FaStethoscope, FaSyringe, FaFlask, FaUserMd, FaDog, FaCat } from 'react-icons/fa'

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      
      <section className="bg-emerald-50 dark:bg-gray-800 py-18 px-8 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
          Bine ați venit la DVRVET
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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

      <section className="py-12 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Pacienți fericiți</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Ani de experiență</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">3</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Doctori specializați</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-8 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Serviciile noastre
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaStethoscope className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Consultații</h3>
            <p className="text-gray-500 dark:text-gray-400">Consultații generale pentru toate tipurile de animale.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaSyringe className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Vaccinări</h3>
            <p className="text-gray-500 dark:text-gray-400">Program complet de vaccinare pentru sănătatea animalului.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaFlask className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Analize</h3>
            <p className="text-gray-500 dark:text-gray-400">Analize de laborator rapide și precise.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-emerald-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Cum funcționează?
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Înregistrează-te</h3>
            <p className="text-gray-500 dark:text-gray-400">Creează un cont gratuit în câteva secunde.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Alege serviciul</h3>
            <p className="text-gray-500 dark:text-gray-400">Selectează serviciul dorit și doctorul preferat.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Vino la clinică</h3>
            <p className="text-gray-500 dark:text-gray-400">Prezintă-te la ora programată și lasă-ne să avem grijă de animalul tău.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Echipa noastră
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaUserMd className="text-emerald-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Dr. Alexandru Popescu</h3>
            <p className="text-emerald-500 font-medium mb-2">Medic Generalist</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">10 ani experiență în medicina veterinară generală.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaUserMd className="text-emerald-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Dr. Maria Ionescu</h3>
            <p className="text-emerald-500 font-medium mb-2">Chirurg Veterinar</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Specializată în chirurgie și ortopedie veterinară.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaUserMd className="text-emerald-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Dr. Ion Mihai</h3>
            <p className="text-emerald-500 font-medium mb-2">Dermatolog Veterinar</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Expert în boli de piele și alergii la animale.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-emerald-50 dark:bg-gray-800">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
    Pacienții noștri
  </h2>
  <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaDog className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">Max</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Labrador</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaCat className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">Luna</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Pisică Persană</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaDog className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">Charlie</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Husky</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaCat className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">Mimi</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Pisică Siameză</p>
    </div>
  </div>
</section>
<section className="py-16 px-8 bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
    Ce spun clienții noștri
  </h2>
  <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"Servicii excelente! Doctorul a fost foarte atent cu câinele meu. Recomand cu căldură!"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Daniel Pinzaru</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Proprietar Labrador</p>
        </div>
      </div>
    </div>
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"Am venit în urgență și am fost primiți imediat. Personalul este foarte profesionist!"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Ana Vrancean</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Proprietar Pisică</p>
        </div>
      </div>
    </div>
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"Programarea online este foarte ușoară. Nu mai stau la coadă! Mulțumesc DVRVET!"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Eugen Ceban</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Proprietar Husky</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home