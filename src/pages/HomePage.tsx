import React from 'react';
import Hero from '../components/Hero';
import betoniranje from '../Photos/betoniranje.jpg';
import luka1 from '../Photos/luka1.jpg';
import gradnja from '../Photos/gradnja.jpg';
import { Container, Building, Users, Award, ArrowRight, Star, Hammer, MapPin, CheckCircle, Clock, Lock, Shield } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {

  return (
    <div>
      <Hero onPageChange={onPageChange} />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše storitve na enem mestu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kontejnerji, najem skladišč in celoten izgradnja - vse kar potrebujete
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Container className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Kontejnerji</h3>
                </div>

                <img
                  src={luka1}
                  alt="Kontejnerji"
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Premium kontejnerji za vse potrebe - od skladiščenja do transporta.
                  Certificirani, varni in po konkurenčnih cenah.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">10', 20' in 40' kontejnerji</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Jeklena konstrukcija</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Hitra dostava z razkladom</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Možnost prilagoditve</span>
                  </div>
                </div>

                <button
                  onClick={() => onPageChange('containers')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  <span>Raziščite ponudbo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Najem skladišč</h3>
                </div>

                <img
                  src="/src/Photos/slika4.jpg"
                  alt="Najem skladišč"
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Najemite skladiščne hale ali šotore v Ptuju.
                  Fleksibilni pogoji in moderna infrastruktura.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Skladiščne hale in šotoja</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Možna izposoja viličarja</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Lokacija Ptuj</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">500+ paletnih mest</span>
                  </div>
                </div>

                <button
                  onClick={() => onPageChange('storage')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  <span>Odkrijte več</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Izgradnja</h3>
                </div>

                <img
                  src={betoniranje}
                  alt="Izgradnja skladišča"
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1248516/pexels-photo-1248516.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Imate zemljišče? Mi zgradimo skladišče od A do Ž.
                  Priprava terena, gradnja in varnostni sistemi.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Priprava terena in temeljev</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Postavitev montažne hale</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Postavitev kontejnerjev</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Varnostni sistemi</span>
                  </div>
                </div>

                <button
                  onClick={() => onPageChange('construction')}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  <span>Odkrijte več</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* NEW: Container Rental Highlight */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-2 mb-6">
              <Star className="h-4 w-4 fill-white" /> Novo v ponudbi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Najem skladiščnega kontejnerja
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl">
              Varno in dostopno skladiščenje v kontejnerju 20' ali 40' na lokacijah <strong className="text-amber-400">Ptuj</strong> in <strong className="text-amber-400">Maribor</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-400/20 p-2 rounded-xl">
                      <Container className="h-6 w-6 text-amber-400" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Kontejner 20'</h4>
                  </div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> 6 x 2,4 x 2.,6 m (~14 m²)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Jeklena konstrukcija</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Varno zaklepanje</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Vodotesno</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-400/20 p-2 rounded-xl">
                      <Container className="h-6 w-6 text-amber-400" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Kontejner 40'</h4>
                  </div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> 12 x 2,4 x 2,9 m (~28 m²)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Jeklena konstrukcija</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Varno zaklepanje</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Vodotesno</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">Dostop <strong className="text-white">24/7</strong> kadarkoli</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <p className="text-blue-200 text-sm"><strong className="text-white">Vaš ključ</strong>, vaša ključavnica</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">V <strong className="text-white">ograjenem</strong> in varovanem prostoru</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">Lokaciji <strong className="text-white">Ptuj</strong> in <strong className="text-white">Maribor</strong></p>
                </div>
              </div>
            </div>


            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-amber-400/20 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/10 px-6 py-4 border-b border-white/10">
                <h4 className="text-white font-bold text-lg">Cenik najema <span className="text-blue-300 font-normal text-sm">/ kos / mesec + DDV</span></h4>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { period: '1 – 12 mesecev', price: '120 €' },
                  { period: '13 – 24 mesecev', price: '100 €' },
                  { period: '25 – 36 mesecev', price: '80 €' },
                  { period: '37 – 48 mesecev', price: '70 €' },
                  { period: '49 – 60 mesecev', price: '65 €', best: true },
                ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between px-6 py-4 ${row.best ? 'bg-amber-400/10' : 'hover:bg-white/5'} transition-colors`}>
                      <div className="flex items-center gap-3">
                        {row.best && <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">Najboljša cena</span>}
                        <span className="text-blue-100">{row.period}</span>
                      </div>
                      <div>
                        <span className={`font-bold text-xl ${row.best ? 'text-amber-400' : 'text-white'}`}>{row.price}</span>
                        <span className="text-blue-400 text-sm ml-1">+ DDV</span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>


          <div className="text-center">
            <button
                onClick={() => onPageChange('storage')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105"
            >
              Več o najemu kontejnerjev
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Številke, ki govorijo namesto nas
            </h2>
            <p className="text-xl text-blue-200">
              Zaupanje strank je naš največji uspeh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">250+</div>
              <div className="text-blue-200 font-medium">Dostavljenih kontejnerjev</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-200 font-medium">Skladiščnih projektov</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">6+</div>
              <div className="text-blue-200 font-medium">Let izkušenj</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200 font-medium">Zadovoljstvo strank</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Pripravite se na novi skladiščni projekt?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Naša ekipa strokovnjakov je pripravljena vam pomagati. Brezplačna svetovanja,
                  hitri odzivni časi in konkurenčne cene.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <Award className="h-6 w-6 mr-3 text-cyan-300" />
                    <span>Brezplačen ogled in svetovanje</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Users className="h-6 w-6 mr-3 text-cyan-300" />
                    <span>Izkušena ekipa strokovnjakov</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Star className="h-6 w-6 mr-3 text-cyan-300" />
                    <span>Garancija zadovoljstva</span>
                  </div>
                </div>
                <button
                  onClick={() => onPageChange('contact')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Pridobite brezplačno ponudbo
                </button>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src={gradnja}
                  alt="Skladišče"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-800/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;