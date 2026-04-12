import { useInView } from '../hooks/useInView';
import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';
import dostava from '../Photos/dostava2.jpeg';

interface AboutPageProps {
  onPageChange?: (page: string) => void;
}

const values = [
  { icon: <Target className="h-5 w-5" />, title: 'Zanesljivost', desc: 'Vsak projekt izvedemo pravočasno in kakovostno.', bg: 'bg-blue-50 text-blue-700' },
  { icon: <Users className="h-5 w-5" />, title: 'Prilagodljivost', desc: 'Iščemo optimalne rešitve za vsak projekt.', bg: 'bg-sky-50 text-sky-700' },
  { icon: <Award className="h-5 w-5" />, title: 'Kakovost', desc: 'Kakovostni materiali in preverjene tehnologije.', bg: 'bg-amber-50 text-amber-600' },
  { icon: <Heart className="h-5 w-5" />, title: 'Poštenost', desc: 'Transparentna komunikacija in poštene cene.', bg: 'bg-red-50 text-red-500' },
];

const timeline = [
  { year: '2020', event: 'Ustanovitev podjetja Skladiščko' },
  { year: '2021', event: 'Prvi večji projekt skladiščnih kontejnerjev' },
  { year: '2022', event: 'Razširitev na celovito pripravo terena' },
  { year: '2023', event: '100+ dostavljenih kontejnerjev' },
  { year: '2024', event: 'Napredni varnostni sistemi' },
  { year: '2025', event: 'Razširitev z najemnimi storitvami' },
  { year: '2026', event: '250+ uspešno dostavljenih kontejnerjev' },
];

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const mission = useInView();
  const valuesSection = useInView();
  const timelineSection = useInView();

  return (
    <div>
      <section className="relative section-dark-about pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">O nas</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              O podjetju Skladiščko
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Zaupanja vreden ponudnik skladiščnih rešitev z več kot 6 leti izkušenj.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={mission.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ${mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-steel-50 p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-steel-900 mb-4">Naša misija</h2>
              <p className="text-steel-600 leading-relaxed">
                Strankam zagotavljamo varno in zanesljivo skladiščenje ter celovite rešitve,
                ki izpolnjujejo potrebe sodobnega poslovanja in zasebnih uporabnikov.
              </p>
            </div>
            <div className="section-dark p-8 md:p-10 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-400/5 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-2xl font-bold mb-4">Naša vizija</h2>
                <p className="text-steel-400 leading-relaxed">
                  Vodilni ponudnik skladiščnih rešitev v regiji, prepoznaven po hitrosti,
                  zanesljivosti in strokovnosti pri vsakem projektu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={valuesSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Naše vrednote</h2>
            <p className="text-steel-500">Načela, ki vodijo naše delo</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className={`card-steel p-6 text-center hover-lift ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: valuesSection.isVisible ? `${i * 100}ms` : '0ms', transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${value.bg}`}>
                  {value.icon}
                </div>
                <h3 className="font-bold text-steel-900 mb-2">{value.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={timelineSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${timelineSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Naša pot</h2>
            <p className="text-steel-500">Ključni mejniki naše rasti</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {timeline.map((item, i) => {
                const isLatest = i === timeline.length - 1;
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-4 transition-all duration-500 ${timelineSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: timelineSection.isVisible ? `${i * 80}ms` : '0ms' }}
                  >
                    <span className={`text-white text-sm font-bold px-3 py-1.5 rounded-full flex-shrink-0 shadow-sm ${isLatest ? 'bg-gradient-to-br from-amber-500 to-amber-400 shadow-amber-500/30' : 'bg-gradient-to-br from-blue-700 to-blue-800'}`}>
                      {item.year}
                    </span>
                    <div className={`p-4 rounded-xl flex-1 border ${isLatest ? 'bg-amber-50 border-amber-100' : 'bg-steel-50 border-transparent'}`}>
                      <p className={`text-sm font-medium ${isLatest ? 'text-amber-800' : 'text-steel-700'}`}>{item.event}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={dostava}
                  alt="Dostavljeni kontejnerji"
                  className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">250+</div>
                    <div className="text-sm text-white/70">Uspešno dostavljenih kontejnerjev</div>
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Pripravljeni za sodelovanje?</h2>
          <p className="text-steel-400 mb-8">Brezplačno svetovanje in konkurenčna ponudba</p>
          <button
            onClick={() => onPageChange?.('contact')}
            className="btn-accent group"
          >
            Kontaktirajte nas
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
