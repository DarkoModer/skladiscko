import { useInView } from '../hooks/useInView';
import { Shield, Shovel, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import betoniranje from '../Photos/betoniranje.jpg';

interface ConstructionPageProps {
  onPageChange?: (page: string) => void;
}

const services = [
  { title: 'Izkop in priprava terena', features: ['Pregled terena', 'Strojni izkop', 'Odvoz materiala', 'Niveliranje'] },
  { title: 'Ravnanje zemljišča', features: ['Kompaktiranje tal', 'Drenažni sistem', 'Geotekstil', 'Kontrola kakovosti'] },
  { title: 'Polaganje podlage', features: ['Klasični kamen', 'Mleti kamen', 'Mleti asfalt', 'Asfaltna podlaga'] },
  { title: 'Postavitev in varnost', features: ['Postavitev kontejnerjev', 'Ograja in vrata', 'Video nadzor', 'LED razsvetljava'] },
];

const steps = [
  { num: '01', title: 'Ogled lokacije', desc: 'Brezplačen ogled vaše parcele in svetovanje' },
  { num: '02', title: 'Načrtovanje', desc: 'Priprava načrta in ponudbe po vaših potrebah' },
  { num: '03', title: 'Priprava terena', desc: 'Izkop, ravnanje in priprava stabilne podlage' },
  { num: '04', title: 'Postavitev', desc: 'Kontejnerji, varnostni sistemi, ključ v roke' },
];

const ConstructionPage: React.FC<ConstructionPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const servicesSection = useInView();
  const stepsSection = useInView();
  const benefits = useInView();

  return (
    <div>
      <section className="relative section-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Izgradnja</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Izgradnja Self-Storage
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Imate zemljišče? Zgradimo celoten skladiščni objekt. Od priprave terena do ključa v roke.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-steel-950/0 via-steel-950/80 to-transparent blur-sm pointer-events-none" />
      </section>
      <div className="relative h-12 -mt-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-[2px]" />
      </div>

      <section className="py-20 bg-white">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Kaj vključuje storitev</h2>
            <p className="text-steel-500">Celovita izvedba od začetka do konca</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`card-steel p-7 hover-lift ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: servicesSection.isVisible ? `${i * 100}ms` : '0ms', transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <h3 className="text-lg font-bold text-steel-900 mb-4">{service.title}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-steel-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={stepsSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${stepsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Kako poteka projekt</h2>
            <p className="text-steel-500">Štiri koraki do vašega skladišča</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative bg-white p-6 rounded-2xl border border-steel-100 hover-lift ${stepsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: stepsSection.isVisible ? `${i * 120}ms` : '0ms', transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <div className="text-4xl font-extrabold text-steel-100 mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-steel-900 mb-2">{step.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={benefits.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${benefits.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-8">Zakaj izbrati nas?</h2>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="h-5 w-5" />, title: 'Celovita izvedba', desc: 'Vi imate zemljišče, mi poskrbimo za vse ostalo.' },
                  { icon: <Shovel className="h-5 w-5" />, title: 'Strokovna ekipa', desc: 'Izkušeni strokovnjaki za vse vidike gradnje.' },
                  { icon: <Layers className="h-5 w-5" />, title: 'Transparentnost', desc: 'Jasna komunikacija, realne ponudbe, brez presenečenj.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-steel-50 p-2.5 rounded-xl text-steel-700 h-fit">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-steel-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-steel-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={betoniranje}
                alt="Izgradnja skladišča"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-12 -mb-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent backdrop-blur-[2px]" />
      </div>
      <section className="py-20 section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-steel-950/0 via-steel-950/60 to-transparent blur-sm pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Imate zemljišče in potrebujete skladišče?</h2>
          <p className="text-steel-400 mb-8">Brezplačen ogled in ponudba za vaš projekt</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onPageChange?.('contact')}
              className="btn-accent group"
            >
              Pridobite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

export default ConstructionPage;
