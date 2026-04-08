import React from 'react';
import { CheckCircle, MapPin, Warehouse, Home, Container, Star,  Shield, Package, Truck, Anchor, CarFront } from 'lucide-react';
import sotor from "../Photos/skladiscni_sotor.webp";
import hala from "../Photos/montazna_hala.jpg";
import storage from "../Photos/storage1.png";

interface StoragePageProps {
  onPageChange?: (page: string) => void;
}

const StoragePage: React.FC<StoragePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 p-4 rounded-full w-fit mx-auto mb-6">
              <Warehouse className="h-12 w-12 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Najem skladiščnih prostorov
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Najemite skladiščne hale ali šotore v Ptuju po ugodnih cenah.
              Fleksibilni pogoji in moderna infrastruktura.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Options Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naša ponudba najema
            </h2>
            <p className="text-xl text-gray-600">
              Izbira med skladiščnimi halami in šotori glede na vaše potrebe
            </p>
          </div>

          {/* Container Rental NEW - FIRST */}
          <div className="mb-12 relative pt-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-2">
                <Star className="h-4 w-4 fill-white" /> Novo v ponudbi
              </span>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 border-2 border-amber-400/40 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-2xl mr-5 shadow-lg">
                  <Container className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Najem skladiščnega kontejnerja 20' in 40'</h3>
                  <p className="text-blue-200 mt-1">Lokacije: Ptuj in Maribor</p>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="w-full h-64 rounded-2xl mb-8 overflow-hidden">
                <img
                    src={storage}
                    alt="Skladiščni kontejner"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200';
                    }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Container className="h-5 w-5 text-amber-400" /> Kontejner 20'
                  </h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Dimenzije: 6 x 2,4 x 2,6 m</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Površina: ~14 m²</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Jeklena vodotesna konstrukcija</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Zaklepanje z ključavnico</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Dostopno 24/7</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Varovan prostor</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Video nadzor</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Container className="h-5 w-5 text-amber-400" /> Kontejner 40'
                  </h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Dimenzije: 12 x 2,4 x 2,9 m</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Površina: ~28 m²</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Jeklena vodotesna konstrukcija</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Zaklepanje z ključavnico</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Dostopno 24/7</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Varovan prostor</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /> Video nadzor</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-bold text-xl mb-5 text-center">Cenik</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-blue-200 font-semibold py-3 px-4">Trajanje najema</th>
                      <th className="text-right text-blue-200 font-semibold py-3 px-4">Cena / kos / mesec</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                    {[
                      { period: '1 – 12 mesecev', price: '120 €' },
                      { period: '13 – 24 mesecev', price: '100 €' },
                      { period: '25 – 36 mesecev', price: '80 €' },
                      { period: '37 – 48 mesecev', price: '70 €' },
                      { period: '49 – 60 mesecev', price: '65 €' },
                    ].map((row, i) => (
                        <tr key={i} className={`${i === 4 ? 'bg-amber-400/10' : 'hover:bg-white/5'} transition-colors`}>
                          <td className="py-3 px-4 text-blue-100">{row.period}</td>
                          <td className="py-3 px-4 text-right">
                            <span className={`font-bold text-lg ${i === 4 ? 'text-amber-400' : 'text-white'}`}>{row.price}</span>
                            <span className="text-blue-300 text-sm ml-1">+ DDV</span>
                          </td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-2 text-blue-200">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>Lokaciji: <strong className="text-white">Ptuj</strong> in <strong className="text-white">Maribor</strong></span>
                </div>
                <button
                    onClick={() => onPageChange?.('contact')}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Povpraševanje za najem
                </button>
              </div>
            </div>
          </div>

          {/* Hall and Tent Rental */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Warehouse Hall */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-2xl mr-4">
                    <Warehouse className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Najem skladiščne hale</h3>
                    <p className="text-blue-600 text-sm font-medium mt-0.5">Idealno za paletno blago</p>
                  </div>
                </div>
                <img
                    src={hala}
                    alt="Skladiščna hala"
                    className="w-full h-56 object-cover rounded-xl mb-6"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200';
                    }}
                />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Naše skladiščne hale so optimizirane za <strong className="text-gray-800">paletno blago</strong> in distribucijsko logistiko.
                  Trdna talna površina prenese visoke obremenitve viličarjev in regalne sisteme,
                  nakladalne rampe pa omogočajo direkten dostop s tovornjaki brez prekladanja.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <Package className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">500+ paletnih mest</div>
                      <div className="text-gray-500 text-xs">regalni sistemi</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <Truck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Rampe za TIR</div>
                      <div className="text-gray-500 text-xs">direkten razkladalni dostop</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Trdna tla</div>
                      <div className="text-gray-500 text-xs">za viličarje in težko blago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Varovana lokacija</div>
                      <div className="text-gray-500 text-xs">ograjeno, 24/7 dostop</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Možna izposoja viličarja
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Različne velikosti hal (200–1000 m²)
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    LED razsvetljava in električni priključki
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fleksibilni pogoji najema
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700 font-semibold">Cena najema:</span>
                    <span className="text-2xl font-bold text-blue-600">Od 10 €/m²</span>
                  </div>
                  <p className="text-sm text-gray-500">mesečno + DDV · popusti za dolgoročne najeme</p>
                </div>
              </div>
            </div>

            {/* Tent / Shelter */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-2xl mr-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Najem skladiščnega šotora</h3>
                    <p className="text-green-600 text-sm font-medium mt-0.5">Za vozila, plovila in sezonsko blago</p>
                  </div>
                </div>
                <img
                    src={sotor}
                    alt="Skladiščni šotor"
                    className="w-full h-56 object-cover rounded-xl mb-6"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/6069093/pexels-photo-6069093.jpeg?auto=compress&cs=tinysrgb&w=1200';
                    }}
                />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prostorni šotori so idealni za <strong className="text-gray-800">zimsko shranjevanje</strong> kamperjev, prikolic, čolnov in manjših plovil.
                  Zaščita pred mrazom, snegom in vlago podaljša življenjsko dobo vaše opreme.
                  Primerni tudi za gradbene stroje, kmetijsko mehanizacijo in sezonsko blago.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <CarFront className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Kamperji in prikolice</div>
                      <div className="text-gray-500 text-xs">zimsko shranjevanje</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <Anchor className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Čolni in plovila</div>
                      <div className="text-gray-500 text-xs">zaščita čez zimo</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <Truck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Gradbena mehanizacija</div>
                      <div className="text-gray-500 text-xs">stroji in oprema</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">Vremenska zaščita</div>
                      <div className="text-gray-500 text-xs">sneg, dež, mraz</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Modularne velikosti (100–500 m²)
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Visoka strešna konstrukcija za visoka vozila
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Najem od 1 meseca dalje
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Ograjeno in varovano območje
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700 font-semibold">Cena najema:</span>
                    <span className="text-2xl font-bold text-green-600">Od 5 €/m²</span>
                  </div>
                  <p className="text-sm text-gray-500">mesečno + DDV · sezonski paketi na voljo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Lokacija v Ptuju</h3>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Naše skladiščne prostore najdete v Ptuju, strateško odlični lokaciji z odličnimi
                prometnimi povezavami. Enostaven dostop do avtoceste in bližina logističnih središč.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">2 km</div>
                <div className="text-gray-600">od avtoceste A4</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">dostop do objektov</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">paletnih mest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Potrebujete skladiščni prostor?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Kontaktirajte nas za več informacij o najemu hal ali šotorov
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

export default StoragePage;
