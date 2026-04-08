import React from 'react';
import { Building, Shovel, Layers, Shield, CheckCircle, Hammer } from 'lucide-react';

interface ConstructionPageProps {
  onPageChange?: (page: string) => void;
}

const ConstructionPage: React.FC<ConstructionPageProps> = ({ onPageChange }) => {
  const services = [
    {
      title: 'Izkop in priprava terena',
      description: 'Strokovno izkopavanje in priprava terena za optimalno postavitev skladiščnih kontejnerjev.',
      features: ['Pregled terena', 'Strojni izkop', 'Odvoz materiala', 'Niveliranje terena']
    },
    {
      title: 'Ravnanje zemljišča',
      description: 'Natančno ravnanje in utrjevanje podlage za stabilno osnovo skladiščnega objekta.',
      features: ['Kompaktiranje tal', 'Drenažni sistem', 'Geotekstil', 'Kontrola kakovosti']
    },
    {
      title: 'Polaganje podlage',
      description: 'Izbira med klasičnim kamnom, mletim kamnom ali asfaltno podlago glede na potrebe.',
      features: ['Klasični kamen', 'Mleti kamen', 'Mleti asfalt', 'Asfaltna podlaga']
    },
    {
      title: 'Postavitev in varnost',
      description: 'Strokovna postavitev kontejnerjev in namestitev celovitih varnostnih sistemov.',
      features: ['Postavitev kontejnerjev', 'Ograja in vrata', 'Video nadzor', 'LED razsvetljava']
    }
  ];

  const projectSteps = [
    { step: '1', title: 'Ogled lokacije', description: 'Brezplačen ogled vaše zemljiške parcele in svetovanje' },
    { step: '2', title: 'Načrtovanje', description: 'Priprava načrta in ponudbe prilagojene vašim potrebam' },
    { step: '3', title: 'Priprava terena', description: 'Izkop, ravnanje in priprava stabilne podlage' },
    { step: '4', title: 'Postavitev', description: 'Postavitev kontejnerjev in namestitev varnostnih sistemov' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 p-4 rounded-full w-fit mx-auto mb-6">
              <Hammer className="h-12 w-12 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Izgradnja Self-Storage
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Imate zemljišče? Mi vam zgradimo celoten skladiščni objekt od A do Ž.
              Od priprave terena do postavitve kontejnerjev in varnostnih sistemov.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kaj vključuje naša storitev
            </h2>
            <p className="text-xl text-gray-600">
              Celovita izvedba skladiščnega projekta od začetka do konca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kako poteka projekt
            </h2>
            <p className="text-xl text-gray-600">
              Od prvega ogleda do dokončane skladiščne lokacije
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-5xl font-bold mb-4 opacity-50">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
                {index < projectSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Zakaj izbrati nas za izgradnjo?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Celovita izvedba</h3>
                    <p className="text-gray-600">Vi imate zemljišče, mi pa poskrbimo za vse ostalo - od priprave do ključa v roke.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl flex-shrink-0">
                    <Shovel className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Strokovna ekipa</h3>
                    <p className="text-gray-600">Izkušeni strokovnjaki, ki poznajo vse vidike gradnje skladiščnih objektov.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl flex-shrink-0">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparentnost</h3>
                    <p className="text-gray-600">Jasna komunikacija, realne ponudbe in ročno izdelan projekt po vaših potrebah.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/src/Photos/slika1.jpg"
                alt="Izgradnja skladišča"
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Imate zemljišče in potrebujete skladišče?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Kontaktirajte nas za brezplačen ogled in ponudbo za vaš projekt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange?.('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Pridobite ponudbo
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300">
              Pokličite 069 633 480
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;
