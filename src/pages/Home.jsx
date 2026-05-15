import { Link } from 'react-router-dom'
import { FaStethoscope, FaSyringe, FaFlask, FaUserMd, FaDog, FaCat, FaPaw } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import translations from '../translations'

function Home() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">

      <section className="bg-emerald-50 dark:bg-gray-800 py-18 px-8 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.heroDesc}
        </p>
        <Link to="/register" className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600">
          {t.heroBtn}
        </Link>
      </section>

      <section className="py-12 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.statsPatients}</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.statsYears}</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">3</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.statsDoctors}</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-8 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t.servicesTitle}
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaStethoscope className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.service1}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.service1Desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaSyringe className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.service2}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.service2Desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
            <FaFlask className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.service3}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.service3Desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-emerald-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t.howTitle}
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.step1}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.step1Desc}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.step2}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.step2Desc}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{t.step3}</h3>
            <p className="text-gray-500 dark:text-gray-400">{t.step3Desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
    {t.teamTitle}
  </h2>
  <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
        <FaUserMd className="text-emerald-500 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{t.doctor1}</h3>
      <p className="text-emerald-500 font-medium mb-2">{t.doctor1Role}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.doctor1Desc}</p>
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
        <FaUserMd className="text-emerald-500 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{t.doctor2}</h3>
      <p className="text-emerald-500 font-medium mb-2">{t.doctor2Role}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.doctor2Desc}</p>
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
        <FaUserMd className="text-emerald-500 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{t.doctor3}</h3>
      <p className="text-emerald-500 font-medium mb-2">{t.doctor3Role}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.doctor3Desc}</p>
    </div>
  </div>
</section>

      <section className="py-16 px-8 bg-emerald-50 dark:bg-gray-800">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
    {t.patientsTitle}
  </h2>
  <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaDog className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">{t.pet1Name}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.pet1Breed}</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaCat className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">{t.pet2Name}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.pet2Breed}</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaDog className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">{t.pet3Name}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.pet3Breed}</p>
    </div>
    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-sm">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <FaCat className="text-emerald-500 text-4xl" />
      </div>
      <p className="font-semibold text-gray-800 dark:text-white">{t.pet4Name}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.pet4Breed}</p>
    </div>
  </div>
</section>

      <section className="py-16 px-8 bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
    {t.testimonialsTitle}
  </h2>
  <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{t.testimonial1}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Daniel Pinzaru</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t.ownerDog}</p>
        </div>
      </div>
    </div>
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{t.testimonial2}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Ana Vrancean</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t.ownerCat}</p>
        </div>
      </div>
    </div>
    <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{t.testimonial3}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
          <FaUserMd className="text-emerald-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">Eugen Ceban</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t.ownerHusky}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home