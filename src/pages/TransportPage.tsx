import { useInView } from '../hooks/useInView';
import { Truck, ArrowRight, MapPin, Shield, Clock, Package, CheckCircle, ArrowUp, Globe, Users, Calendar, Zap } from 'lucide-react';
import dostava1 from '../Photos/dostava1.jpg';
import dostava2 from '../Photos/dostava2.jpeg';
import dostava3 from '../Photos/dostava3.jpg';
import dostava4 from '../Photos/hz_dostava1.jpg';
import dostava5 from '../Photos/hz_dostava2.jpeg';
import dostava6 from '../Photos/star_line_logistics.png';
import dostava7 from '../Photos/star_line_logistics_2.png';
import dostava8 from '../Photos/star_line_logistics_3.png';
import dostava9 from '../Photos/star_line_logistics_4.png';


interface TransportPageProps {
  onPageChange?: (page: string) => void;
}

const TransportPage: React.FC<TransportPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const servicesSection = useInView();
  const coverageSection = useInView();
  const processSection = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-transport pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Prevozi</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Kontejnerski prevozi
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Zanesljivi prevozi kontejnerjev po Sloveniji, Avstriji, Madžarski in Italiji. Dostava z dvigalom Hiab na vašo lokacijo.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Slovenija', 'Avstrija', 'Madžarska', 'Italija'].map((country, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-medium rounded-full">
                  <Globe className="h-4 w-4 text-accent-400" />
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Naše storitve</h2>
            <p className="text-steel-500">Dva načina dostave za različne potrebe</p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-2xl border-2 border-blue-600 overflow-hidden hover-lift shadow-lg shadow-blue-600/10">
              <div className="relative h-72 overflow-hidden">
                <img src={dostava6} alt="Prevoz kontejnerja" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Kontejnerski prevoz</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-xl">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-steel-900">Kontejnerski prevoz</h3>
                    <p className="text-xs text-blue-600 font-medium">Po celotni Sloveniji</p>
                  </div>
                </div>
                <p className="text-sm text-steel-600 mb-4 leading-relaxed">
                  Prevozimo kontejnerje velikosti 20' in 40' po vsej Sloveniji.
                  Zagotavljamo pravočasno dostavo na vaše gradbišče, skladišče ali drugo lokacijo.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <MapPin className="h-4 w-4" />, text: 'Celotna Slovenija' },
                    { icon: <Package className="h-4 w-4" />, text: '20\' in 40\' kontejnerji' },
                    { icon: <Clock className="h-4 w-4" />, text: 'Hitra dostava' },
                    { icon: <Shield className="h-4 w-4" />, text: 'Zavarovan prevoz' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-steel-700 font-medium">
                      <span className="text-blue-600">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-600 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-blue-100">Cena dostave</span>
                      <p className="text-xs text-blue-200">odvisno od razdalje</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">Po dogovoru</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-steel-800 overflow-hidden hover-lift shadow-lg shadow-steel-800/10">
              <div className="relative h-72 overflow-hidden">
                <img src={dostava7} alt="Dostava z dvigalom Hiab" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-steel-800 text-white text-xs font-bold px-3 py-1 rounded-full">Dostava z dvigalom Hiab</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-steel-800 p-2 rounded-xl">
                    <ArrowUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-steel-900">Dostava z dvigalom Hiab</h3>
                    <p className="text-xs text-steel-700 font-medium">Priključeno dvigalo na vozilu</p>
                  </div>
                </div>
                <p className="text-sm text-steel-600 mb-4 leading-relaxed">
                  Zahtevnejše dostave omogočamo z dvigalom Hiab. Idealno za težko dostopne lokacije,
                  postavitev kontejnerjev na pripravljene temelje ali dvig na višjo raven.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: <CheckCircle className="h-4 w-4" />, text: 'Težko dostopni kraji' },
                    { icon: <ArrowUp className="h-4 w-4" />, text: 'Dvig na višino' },
                    { icon: <Shield className="h-4 w-4" />, text: 'Varna namestitev' },
                    { icon: <Clock className="h-4 w-4" />, text: 'Strokovna ekipa' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-steel-700 font-medium">
                      <span className="text-steel-700">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="bg-steel-800 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-steel-200">Cena dostave z Hiab</span>
                      <p className="text-xs text-steel-400">kompleksnejša dostava</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">Po dogovoru</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={coverageSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-10 transition-all duration-700 ${coverageSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Mednarodni prevozi</h2>
            <p className="text-steel-500">Pokrivamo štiri države srednje Evrope</p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 ${coverageSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {[
              { country: 'Slovenija', flag: '🇸🇮', description: 'Celotna država', deliveries: '150+' },
              { country: 'Avstrija', flag: '🇦🇹', description: 'Vzhodna in južna Avstrija', deliveries: '50+' },
              { country: 'Madžarska', flag: '🇭🇺', description: 'Zahodna Madžarska', deliveries: '30+' },
              { country: 'Italija', flag: '🇮🇹', description: 'Severna Italija', deliveries: '20+' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-steel-200 hover:border-blue-300 transition-all duration-300 text-center">
                <div className="text-4xl mb-3">{item.flag}</div>
                <h3 className="text-lg font-bold text-steel-900 mb-1">{item.country}</h3>
                <p className="text-sm text-steel-500 mb-3">{item.description}</p>
                <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {item.deliveries} prevozov
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div ref={processSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-10 transition-all duration-700 ${processSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Kako delujemo?</h2>
            <p className="text-steel-500">Preprost proces od naročila do dostave</p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-700 ${processSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {[
              { step: '01', title: 'Povpraševanje', desc: 'Kontaktirajte nas z zahtevami', icon: <Users className="h-6 w-6" /> },
              { step: '02', title: 'Ponudba', desc: 'Prejmete ceno in rok dostave', icon: <Calendar className="h-6 w-6" /> },
              { step: '03', title: 'Naročilo', desc: 'Potrdite naročilo in datum', icon: <CheckCircle className="h-6 w-6" /> },
              { step: '04', title: 'Dostava', desc: 'Prevzamete kontejner na lokaciji', icon: <Truck className="h-6 w-6" /> },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-steel-50 rounded-xl p-6 border border-steel-200 hover:border-blue-300 transition-all duration-300 relative">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.step}
                  </div>
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4 mt-2">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-steel-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-steel-500">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-steel-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-4">Strokovna ekipa</h2>
              <p className="text-steel-600 mb-6 leading-relaxed">
                Naša ekipa ima dolgoletne izkušnje s prevozi kontejnerjev. Vsak prevoz skrbno načrtujemo,
                upoštevamo vse posebnosti trase in zagotovimo, da bo vaš kontejner dostavljen pravočasno
                in brez poškodb.
              </p>
              <ul className="space-y-3">
                {[
                  'Izkušeni vozniki z vsemi potrebnimi certifikati',
                  'Natančno načrtovanje trase in časa dostave',
                  'Zavarovanje blaga med transportom',
                  'Fleksibilnost glede urnikov dostave',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-steel-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src={dostava8}
                alt="Prevoz kontejnerja"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="section-dark rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.03] rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Zakaj izbrati nas?</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { value: '250+', label: 'Prevozov' },
                  { value: '24/7', label: 'Na voljo' },
                  { value: '100%', label: 'Zanesljivost' },
                  { value: '4 države', label: 'Pokritost' },
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
        <div ref={cta.ref} className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Potrebujete prevoz kontejnerja?</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za brezplačno ponudbo</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => onPageChange?.('contact')} className="btn-accent group">
              Pridobite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:+38669633480" className="border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all duration-300">
              +386 69 633 480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPage;
