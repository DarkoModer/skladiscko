import { useInView } from '../hooks/useInView';
import { Shield, Shovel, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import betoniranje from '../Photos/betoniranje.jpg';

interface ConstructionPageProps {
  onPageChange?: (page: string) => void;
}

const services = [
  { title: 'Izkop in priprava terena', features: ['Pregled terena', 'Strojni izkop', 'Odvoz materiala', 'Niveliranje'] },
  { title: 'Ravnanje zemljisca', features: ['Kompaktiranje tal', 'Drenazni sistem', 'Geotekstil', 'Kontrola kakovosti'] },
  { title: 'Polaganje podlage', features: ['Klasicni kamen', 'Mleti kamen', 'Mleti asfalt', 'Asfaltna podlaga'] },
  { title: 'Postavitev in varnost', features: ['Postavitev kontejnerjev', 'Ograja in vrata', 'Video nadzor', 'LED razsvetljava'] },
];

const steps = [
  { num: '01', title: 'Ogled lokacije', desc: 'Brezplacen ogled vase parcele in svetovanje' },
  { num: '02', title: 'Nacrtovanje', desc: 'Priprava nacrta in ponudbe po vasih potrebah' },
  { num: '03', title: 'Priprava terena', desc: 'Izkop, ravnanje in priprava stabilne podlage' },
  { num: '04', title: 'Postavitev', desc: 'Kontejnerji, varnostni sistemi, kljuc v roke' },
];

const ConstructionPage: React.FC<ConstructionPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const servicesSection = useInView();
  const stepsSection = useInView();
  const benefits = useInView();

  return (
    <div>
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Izgradnja</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Izgradnja Self-Storage
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Imate zemljisce? Zgradimo celoten skladiscni objekt. Od priprave terena do kljuca v roke.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Kaj vkljucuje storitev</h2>
            <p className="text-gray-500">Celovita izvedba od zacetka do konca</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-white p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: servicesSection.isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div ref={stepsSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${stepsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Kako poteka projekt</h2>
            <p className="text-gray-500">Stiri koraki do vasega skladisca</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-lg ${stepsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: stepsSection.isVisible ? `${i * 120}ms` : '0ms' }}
              >
                <div className="text-4xl font-extrabold text-blue-100 mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={benefits.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${benefits.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Zakaj izbrati nas?</h2>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="h-5 w-5" />, title: 'Celovita izvedba', desc: 'Vi imate zemljisce, mi poskrbimo za vse ostalo.' },
                  { icon: <Shovel className="h-5 w-5" />, title: 'Strokovna ekipa', desc: 'Izkuseni strokovnjaki za vse vidike gradnje.' },
                  { icon: <Layers className="h-5 w-5" />, title: 'Transparentnost', desc: 'Jasna komunikacija, realne ponudbe, brez presenecenj.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 h-fit">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={betoniranje}
                alt="Izgradnja skladisca"
                className="w-full h-80 object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Imate zemljisce in potrebujete skladisce?</h2>
          <p className="text-slate-400 mb-8">Brezplacen ogled in ponudba za vas projekt</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onPageChange?.('contact')}
              className="group bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              Pridobite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

export default ConstructionPage;
