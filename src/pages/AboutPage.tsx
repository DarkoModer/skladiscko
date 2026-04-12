import { useInView } from '../hooks/useInView';
import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';
import dostava from '../Photos/dostava2.jpeg';

interface AboutPageProps {
  onPageChange?: (page: string) => void;
}

const values = [
  { icon: <Target className="h-5 w-5" />, title: 'Zanesljivost', desc: 'Vsak projekt izvedemo pravocasno in kakovostno.' },
  { icon: <Users className="h-5 w-5" />, title: 'Prilagodljivost', desc: 'Iscemo optimalne resitve za vsak projekt.' },
  { icon: <Award className="h-5 w-5" />, title: 'Kakovost', desc: 'Kakovostni materiali in preverjene tehnologije.' },
  { icon: <Heart className="h-5 w-5" />, title: 'Postenost', desc: 'Transparentna komunikacija in postene cene.' },
];

const timeline = [
  { year: '2020', event: 'Ustanovitev podjetja Skladiscko' },
  { year: '2021', event: 'Prvi vecji projekt skladiscnih kontejnerjev' },
  { year: '2022', event: 'Razsiritev na celovito pripravo terena' },
  { year: '2023', event: '100+ dostavljenih kontejnerjev' },
  { year: '2024', event: 'Napredni varnostni sistemi' },
  { year: '2025', event: 'Razsiritev z najemnimi storitvami' },
  { year: '2026', event: '250+ uspesno dostavljenih kontejnerjev' },
];

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const mission = useInView();
  const valuesSection = useInView();
  const timelineSection = useInView();

  return (
    <div>
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">O nas</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              O podjetju Skladiscko
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Zaupanja vreden ponudnik skladiscnih resitev z vec kot 6 leti izkusenj.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={mission.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ${mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nasa misija</h2>
              <p className="text-gray-600 leading-relaxed">
                Strankam zagotavljamo varno in zanesljivo skladiscenje ter celovite resitve,
                ki izpolnjujejo potrebe sodobnega poslovanja in zasebnih uporabnikov.
              </p>
            </div>
            <div className="bg-slate-950 p-8 md:p-10 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Nasa vizija</h2>
              <p className="text-slate-400 leading-relaxed">
                Vodilni ponudnik skladiscnih resitev v regiji, prepoznaven po hitrosti,
                zanesljivosti in strokovnosti pri vsakem projektu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div ref={valuesSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nase vrednote</h2>
            <p className="text-gray-500">Nacela, ki vodijo nase delo</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 text-center ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: valuesSection.isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={timelineSection.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${timelineSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nasa pot</h2>
            <p className="text-gray-500">Kljucni mejniki nase rasti</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-500 ${timelineSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: timelineSection.isVisible ? `${i * 80}ms` : '0ms' }}
                >
                  <span className="bg-slate-900 text-white text-sm font-bold px-3 py-1.5 rounded-full flex-shrink-0">
                    {item.year}
                  </span>
                  <div className="bg-gray-50 p-4 rounded-xl flex-1">
                    <p className="text-sm text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={dostava}
                  alt="Dostavljeni kontejnerji"
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">250+</div>
                    <div className="text-sm text-white/70">Uspesno dostavljenih kontejnerjev</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Pripravljeni za sodelovanje?</h2>
          <p className="text-slate-400 mb-8">Brezplacno svetovanje in konkurencna ponudba</p>
          <button
            onClick={() => onPageChange?.('contact')}
            className="group bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors inline-flex items-center gap-2"
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
