import { useInView } from '../hooks/useInView';
import { CheckCircle, MapPin, Warehouse, Home, Container, Shield, Package, Truck, Anchor, CarFront, ArrowRight } from 'lucide-react';
import sotor from '../Photos/skladiscni_sotor.webp';
import hala from '../Photos/montazna_hala.jpg';
import storage from '../Photos/storage1.png';

interface StoragePageProps {
  onPageChange?: (page: string) => void;
}

const StoragePage: React.FC<StoragePageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const containerSection = useInView();
  const hallSection = useInView();
  const location = useInView();

  return (
    <div>
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Najem skladisc</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Najem skladiscnih prostorov
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Najemite skladiscne hale, sotore ali kontejnerje po ugodnih cenah. Fleksibilni pogoji.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={containerSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`bg-slate-950 rounded-2xl overflow-hidden transition-all duration-700 ${containerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  Novo
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Najem kontejnerja 20' in 40'
                </h2>
                <p className="text-slate-400 mb-6">Lokacije: Ptuj in Maribor</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: <Container className="h-4 w-4" />, text: '20\' (~14 m2) ali 40\' (~28 m2)' },
                    { icon: <Shield className="h-4 w-4" />, text: 'Jeklena vodotesna konstrukcija' },
                    { icon: <CheckCircle className="h-4 w-4" />, text: 'Varovan in ograjen prostor' },
                    { icon: <MapPin className="h-4 w-4" />, text: 'Lokaciji Ptuj in Maribor' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-400 mt-0.5">{item.icon}</span>
                      <span className="text-sm text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    { period: '1 - 12 mes.', price: '120' },
                    { period: '13 - 24 mes.', price: '100' },
                    { period: '25 - 36 mes.', price: '80' },
                    { period: '37 - 48 mes.', price: '70' },
                    { period: '49 - 60 mes.', price: '65', best: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between py-2 px-3 rounded-lg text-sm ${row.best ? 'bg-blue-600/10' : ''}`}>
                      <div className="flex items-center gap-2">
                        {row.best && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Top</span>}
                        <span className="text-slate-300">{row.period}</span>
                      </div>
                      <span className={`font-bold ${row.best ? 'text-blue-400' : 'text-white'}`}>{row.price} &euro; <span className="text-slate-500 font-normal">+ DDV</span></span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onPageChange?.('contact')}
                  className="mt-6 group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors text-sm"
                >
                  Povprasevanje
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative min-h-[300px]">
                <img
                  src={storage}
                  alt="Skladiscni kontejner"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div ref={hallSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${hallSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Hale in sotori</h2>
            <p className="text-gray-500">Izbira glede na vase potrebe</p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${hallSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={hala} alt="Skladiscna hala" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <Warehouse className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Skladiscna hala</h3>
                    <p className="text-xs text-gray-500">Idealno za paletno blago</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <Package className="h-4 w-4" />, text: '500+ paletnih mest' },
                    { icon: <Truck className="h-4 w-4" />, text: 'Rampe za TIR' },
                    { icon: <CheckCircle className="h-4 w-4" />, text: 'Trdna tla' },
                    { icon: <Shield className="h-4 w-4" />, text: '24/7 dostop' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Cena najema:</span>
                  <span className="text-xl font-bold text-blue-600">Od 10 &euro;/m2</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={sotor} alt="Skladiscni sotor" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/6069093/pexels-photo-6069093.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-50 p-2 rounded-xl">
                    <Home className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Skladiscni sotor</h3>
                    <p className="text-xs text-gray-500">Za vozila, plovila in sezonsko blago</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <CarFront className="h-4 w-4" />, text: 'Kamperji, prikolice' },
                    { icon: <Anchor className="h-4 w-4" />, text: 'Colni in plovila' },
                    { icon: <Truck className="h-4 w-4" />, text: 'Gradbeni stroji' },
                    { icon: <Shield className="h-4 w-4" />, text: 'Vremenska zascita' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-emerald-500">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Cena najema:</span>
                  <span className="text-xl font-bold text-emerald-600">Od 5 &euro;/m2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div ref={location.ref} className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className={`bg-gray-50 rounded-2xl p-8 md:p-10 text-center transition-all duration-700 ${location.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Lokacija v Ptuju</h3>
            </div>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Strateski odlicna lokacija z enostavnim dostopom do avtoceste.</p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2 km</div>
                <div className="text-xs text-gray-500">od A4</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-500">dostop</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-gray-500">palet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Potrebujete skladiscni prostor?</h2>
          <p className="text-slate-400 mb-8">Kontaktirajte nas za vec informacij</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onPageChange?.('contact')}
              className="bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors"
            >
              Pridobite ponudbo
            </button>
            <a href="tel:069633480" className="border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-colors">
              069 633 480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoragePage;
