import { useInView } from '../hooks/useInView';
import { CheckCircle, MapPin, Warehouse, Home, Container, Shield, Package, Truck, Anchor, CarFront, ArrowRight, Sparkles } from 'lucide-react';
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
      <section className="relative section-dark-storage pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Najem skladišč</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Najem skladiščnih prostorov
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Najemite skladiščne hale, šotore ali kontejnerje po ugodnih cenah. Fleksibilni pogoji.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={containerSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`section-dark rounded-2xl overflow-hidden transition-all duration-700 ${containerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10 relative">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-400/5 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <span className="badge-new-dark mb-4">
                    <Sparkles className="h-3 w-3" />
                    Novo v ponudbi
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Najem kontejnerja 20' in 40'
                  </h2>
                  <p className="text-steel-400 mb-6">Lokacije: Ptuj in Maribor</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: <Container className="h-4 w-4" />, text: '20\' (~14 m\u00B2) ali 40\' (~28 m\u00B2)' },
                      { icon: <Shield className="h-4 w-4" />, text: 'Jeklena vodotesna konstrukcija' },
                      { icon: <CheckCircle className="h-4 w-4" />, text: 'Varovan in ograjen prostor' },
                      { icon: <MapPin className="h-4 w-4" />, text: 'Lokaciji Ptuj in Maribor' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-accent-400 mt-0.5">{item.icon}</span>
                        <span className="text-sm text-steel-300">{item.text}</span>
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
                      <div key={i} className={`flex justify-between py-2 px-3 rounded-lg text-sm ${row.best ? 'bg-amber-500/10 border-l-2 border-amber-400' : ''}`}>
                        <div className="flex items-center gap-2">
                          {row.best && <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm shadow-amber-500/30">Top</span>}
                          <span className="text-steel-300">{row.period}</span>
                        </div>
                        <span className={`font-bold ${row.best ? 'text-amber-300' : 'text-white'}`}>{row.price} &euro; <span className="text-steel-500 font-normal">+ DDV</span></span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onPageChange?.('contact')}
                    className="mt-6 btn-accent text-sm group"
                  >
                    Povpraševanje
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="relative min-h-[300px]">
                <img
                  src={storage}
                  alt="Skladiščni kontejner"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-transparent to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={hallSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${hallSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Hale in šotori</h2>
            <p className="text-steel-500">Izbira glede na vaše potrebe</p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ${hallSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="card-steel overflow-hidden hover-lift">
              <div className="relative h-52 overflow-hidden">
                <img src={hala} alt="Skladiščna hala" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <Warehouse className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-steel-900">Skladiščna hala</h3>
                    <p className="text-xs text-steel-500">Idealno za paletno blago</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <Package className="h-4 w-4" />, text: '500+ paletnih mest' },
                    { icon: <Truck className="h-4 w-4" />, text: 'Rampe za TIR' },
                    { icon: <CheckCircle className="h-4 w-4" />, text: 'Trdna tla' },
                    { icon: <Shield className="h-4 w-4" />, text: '24/7 dostop' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-steel-600">
                      <span className="text-blue-500">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-steel-50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-steel-700">Cena najema</span>
                    <p className="text-xs text-steel-400">na mesec + DDV</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-steel-800">od 10 &euro;/m&sup2;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-steel overflow-hidden hover-lift">
              <div className="relative h-52 overflow-hidden">
                <img src={sotor} alt="Skladiščni šotor" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/6069093/pexels-photo-6069093.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sky-50 p-2 rounded-xl">
                    <Home className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-steel-900">Skladiščni šotor</h3>
                    <p className="text-xs text-steel-500">Za vozila, plovila in sezonsko blago</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <CarFront className="h-4 w-4" />, text: 'Kamperji, prikolice' },
                    { icon: <Anchor className="h-4 w-4" />, text: 'Čolni in plovila' },
                    { icon: <Truck className="h-4 w-4" />, text: 'Gradbeni stroji' },
                    { icon: <Shield className="h-4 w-4" />, text: 'Vremenska zaščita' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-steel-600">
                      <span className="text-blue-500">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-steel-700">Cena najema</span>
                    <p className="text-xs text-steel-400">na mesec + DDV</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-700">od 5 &euro;/m&sup2;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div ref={location.ref} className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className={`section-dark rounded-2xl p-8 md:p-10 text-center transition-all duration-700 ${location.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative overflow-hidden`}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.03] rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Lokacija v Ptuju</h3>
              </div>
              <p className="text-steel-400 mb-8 max-w-lg mx-auto">Strateško odlična lokacija z enostavnim dostopom do avtoceste.</p>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[
                  { value: '2 km', label: 'od A4' },
                  { value: '24/7', label: 'dostop' },
                  { value: '500+', label: 'palet' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-steel-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Potrebujete skladiščni prostor?</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za več informacij</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => onPageChange?.('contact')} className="btn-accent">
              Pridobite ponudbo
            </button>
            <a href="tel:069633480" className="border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all duration-300">
              069 633 480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoragePage;
