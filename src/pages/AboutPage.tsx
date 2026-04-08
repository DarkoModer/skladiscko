import React from 'react';
import { Award, Users, Target, Heart, TrendingUp } from 'lucide-react';
import dostava from "../Photos/dostava2.jpeg"

interface AboutPageProps {
  onPageChange?: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Zanesljivost',
      description: 'Vsak projekt izvedemo pravočasno in v skladu z dogovorjenimi standardi kakovosti.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Prilagodljivost',
      description: 'Prilagajamo se potrebam strank in iščemo optimalne rešitve za vsak projekt.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Kakovost',
      description: 'Uporabljamo kakovostne materiale in preverjene tehnologije za dolgotrajne rešitve.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Poštenost',
      description: 'Transparentno komuniciramo, nudimo poštene cene in držimo obljube.'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Ustanovitev podjetja Skladiščko z vizijo zagotavljanja kakovostnih skladiščnih rešitev' },
    { year: '2021', event: 'Prvi večji projekt skladiščnih kontejnerjev in začetek specializacije' },
    { year: '2022', event: 'Razširitev storitev na celovito pripravo terena in postavitev objektov' },
    { year: '2023', event: 'Doseženih 100+ dostavljenih kontejnerjev in 15 skladiščnih projektov' },
    { year: '2024', event: 'Uvedba naprednih varnostnih sistemov in LED razsvetljave' },
    { year: '2025', event: 'Razširitev poslovanja z najemnimi storitvami in dodatnimi lokacijami v Ptuju' },
    { year: '2026', event: 'Praznujemo več kot 250+ uspešno dostavljenih kontejnerjev zadovoljnim strankam' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O podjetju Skladiščko
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Zaupanja vreden ponudnik skladiščnih rešitev z več kot 6 leti izkušenj.
              Specializirani za kakovostne kontejnerje in kompleksne skladiščne projekte.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša misija</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Strankam zagotavljamo varno in zanesljivo skladiščenje ter celovite rešitve,
                ki izpolnjujejo potrebe sodobnega poslovanja in zasebnih uporabnikov.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl text-white">
              <h2 className="text-3xl font-bold mb-6">Naša vizija</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Vodilni ponudnik skladiščnih rešitev v regiji, prepoznaven po hitrosti,
                zanesljivosti in strokovnosti pri vsakem projektu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše vrednote
            </h2>
            <p className="text-xl text-gray-600">
              Načela, ki vodijo naše delo vsak dan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-300">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Naša pot skozi leta
            </h2>
            <p className="text-xl text-gray-600">
              Od začetka do danes - ključni mejniki naše rasti
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold min-w-fit">
                    {item.year}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">100. kontejner dostavljen!</h3>
                </div>
                <img
                  src={dostava}
                  alt="Dostavljeni kontejnerji"
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
                />
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Z velikim ponosom sporočamo, da smo uspešno dostavili 100. kontejner naši zadovoljni stranki!
                  Ta mejnik predstavlja pomemben dosežek v naši zgodbi in potrditev zaupanja, ki nam ga izkazujete.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Vsak projekt je bil izveden s skrbnostjo, profesionalnostjo in predanostjo kakovosti,
                  ki je postala naš zaščitni znak. Zahvaljujemo se vsem našim strankam za zaupanje in
                  podporo na tej poti. Vaše zadovoljstvo je naša največja nagrada!
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold text-center text-lg">
                    Hvala za vašo zvestobo! 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pripravljeni za sodelovanje?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Kontaktirajte nas za brezplačno svetovanje in konkurenčno ponudbo
          </p>
          <button
            onClick={() => onPageChange?.('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Kontaktirajte nas
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;