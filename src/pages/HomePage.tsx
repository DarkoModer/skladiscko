import Hero from '../components/Hero';
import { useInView } from '../hooks/useInView';
import { Container, Building, Hammer, ArrowRight, Shield, Truck, Clock, MapPin, Lock } from 'lucide-react';
import luka1 from '../Photos/luka1.jpg';
import gradnja from '../Photos/gradnja.jpg';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const services = useInView();
  const rental = useInView();
  const cta = useInView();

  return (
    <div>
      <Hero onPageChange={onPageChange} />

      <section className="py-24 bg-white">
        <div ref={services.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${services.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-500 text-sm font-semibold tracking-widest uppercase mb-3">Nase storitve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900">
              Vse na enem mestu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Container className="h-6 w-6" />,
                title: 'Kontejnerji',
                desc: 'Premium kontejnerji za vse potrebe - od skladiscenja do transporta.',
                img: luka1,
                fallback: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800',
                page: 'containers',
                iconBg: 'bg-steel-50 text-steel-700',
              },
              {
                icon: <Building className="h-6 w-6" />,
                title: 'Najem skladisc',
                desc: 'Skladiscne hale in sotori v Ptuju. Fleksibilni pogoji.',
                img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
                fallback: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
                page: 'storage',
                iconBg: 'bg-accent-500/10 text-accent-600',
              },
              {
                icon: <Hammer className="h-6 w-6" />,
                title: 'Izgradnja',
                desc: 'Imate zemljisce? Zgradimo skladisce od A do Z.',
                img: gradnja,
                fallback: 'https://images.pexels.com/photos/1248516/pexels-photo-1248516.jpeg?auto=compress&cs=tinysrgb&w=800',
                page: 'construction',
                iconBg: 'bg-amber-50 text-amber-600',
              },
            ].map((service, i) => (
              <div
                key={service.page}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-steel-100 hover:border-steel-200 hover-lift cursor-pointer ${services.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: services.isVisible ? `${(i + 1) * 150}ms` : '0ms', transition: 'opacity 0.7s, transform 0.7s' }}
                onClick={() => onPageChange(service.page)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = service.fallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-steel-500 leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-3 transition-all duration-300">
                    Vec o tem
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-steel-500/3 rounded-full blur-3xl animate-glow animate-delay-300" />
        </div>

        <div ref={rental.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${rental.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 bg-accent-500/15 text-accent-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-accent-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Novo v ponudbi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Najem skladiscnega kontejnerja
            </h2>
            <p className="text-steel-400 max-w-xl mx-auto">
              Varno skladiscenje v kontejnerju 20' ali 40' na lokacijah Ptuj in Maribor
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start transition-all duration-700 ${rental.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Clock className="h-4 w-4" />, text: 'Dostop 24/7' },
                { icon: <Lock className="h-4 w-4" />, text: 'Vas kljuc' },
                { icon: <Shield className="h-4 w-4" />, text: 'Varovan prostor' },
                { icon: <MapPin className="h-4 w-4" />, text: 'Ptuj in Maribor' },
                { icon: <Container className="h-4 w-4" />, text: '20\' (~14 m2)' },
                { icon: <Truck className="h-4 w-4" />, text: '40\' (~28 m2)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.04] rounded-xl p-4 border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-300">
                  <span className="text-accent-400">{item.icon}</span>
                  <span className="text-sm text-steel-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.04] rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="px-6 py-4 border-b border-white/[0.08]">
                <h4 className="text-white font-semibold">Cenik najema <span className="text-steel-400 font-normal text-sm">/ kos / mesec + DDV</span></h4>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {[
                  { period: '1 - 12 mesecev', price: '120' },
                  { period: '13 - 24 mesecev', price: '100' },
                  { period: '25 - 36 mesecev', price: '80' },
                  { period: '37 - 48 mesecev', price: '70' },
                  { period: '49 - 60 mesecev', price: '65', best: true },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-3.5 ${row.best ? 'bg-accent-500/10' : 'hover:bg-white/[0.03]'} transition-colors duration-300`}>
                    <div className="flex items-center gap-3">
                      {row.best && <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">Najboljsa</span>}
                      <span className="text-steel-300 text-sm">{row.period}</span>
                    </div>
                    <div>
                      <span className={`font-bold text-lg ${row.best ? 'text-accent-300' : 'text-white'}`}>{row.price} &euro;</span>
                      <span className="text-steel-500 text-sm ml-1">+ DDV</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`text-center mt-10 transition-all duration-700 ${rental.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <button
              onClick={() => onPageChange('storage')}
              className="btn-accent group"
            >
              Vec o najemu
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div ref={cta.ref} className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className={`section-dark rounded-3xl overflow-hidden transition-all duration-700 ${cta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pripravite se na novi projekt?
                </h2>
                <p className="text-steel-400 mb-8 leading-relaxed">
                  Brezplacna svetovanja, hitri odzivni casi in konkurencne cene.
                </p>
                <button
                  onClick={() => onPageChange('contact')}
                  className="group bg-white text-steel-900 px-7 py-3.5 rounded-full font-semibold hover:bg-steel-50 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Brezplacna ponudba
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative lg:col-span-2 min-h-[200px] lg:min-h-0">
                <img
                  src={gradnja}
                  alt="Skladisce"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-900/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
