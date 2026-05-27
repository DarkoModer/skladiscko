import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Clock, MapPin, Container, Phone, Package, Warehouse } from 'lucide-react';
import luka1 from '../Photos/luka1.jpg';
import luka3 from '../Photos/luka3.webp';
import bel20 from '../Photos/20bel.jpg';
import antracit40 from '../Photos/40antracit.jpg';

interface SeoPageProps {
  onPageChange?: (page: string) => void;
}

const SeoSkladiscniKontejnerji: React.FC<SeoPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const content = useInView();
  const types = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-containers pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Skladiščni kontejnerji</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Skladiščni kontejnerji
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Skladiščni kontejnerji za vsak namen. Pri Skladiščku vam ponujamo širok izbor skladiščnih kontejnerjev – od najema do nakupa. Skladiščni kontejnerji v različnih velikostih in barvah z dostavo po Sloveniji in okoljskih državah.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Skladiščni kontejnerji za vse potrebe</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejnerji so vsestranska rešitev za shranjevanje blaga, opreme in inventarja. Pri Skladiščku ponujamo skladiščne kontejnerje različnih velikosti, stanj in konfiguracij. Skladiščni kontejnerji so primerni za podjetja, gradbeništvo, kmetijstvo in posameznike, ki iščejo varen in zanesljiv prostor za shranjevanje.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Vsi skladiščni kontejnerji so vetro- in vodotesni, opremljeni z zanesljivim zaklepanjem in zagotavljajo varno shranjevanje vašega blaga. Skladiščni kontejnerji so na voljo za najem ali nakup, z možnostjo dostave in postavitve na vašo lokacijo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
              <div className="rounded-xl overflow-hidden h-48">
                <img src={luka1} alt="Skladiščni kontejnerji v pristanišču" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img src={bel20} alt="Beli skladiščni kontejner 20 čevljev" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img src={antracit40} alt="Antracit skladiščni kontejner 40 čevljev" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img src={luka3} alt="Skladiščni kontejnerji na skladišču" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={types.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`transition-all duration-700 ${types.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-8 text-center">Vrste skladiščnih kontejnerjev</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Container className="h-6 w-6" />,
                  title: 'Skladiščni kontejnerji 20\'',
                  desc: 'Skladiščni kontejnerji z dolžino 6 metrov (20 čevljev). Približno 14 m² uporabne površine. Primeren skladiščni kontejner za manjše skladiščne potrebe in shranjevanje.',
                  price: 'od 65 €/mesec',
                },
                {
                  icon: <Container className="h-6 w-6" />,
                  title: 'Skladiščni kontejnerji 40\'',
                  desc: 'Skladiščni kontejnerji z dolžino 12 metrov (40 čevljev). Približno 28 m² uporabne površine. Primeren skladiščni kontejner za obsežnejše shranjevanje blaga.',
                  price: 'od 100 €/mesec',
                },
                {
                  icon: <Warehouse className="h-6 w-6" />,
                  title: 'Skladiščni kontejnerji s stranskimi vrati',
                  desc: 'Skladiščni kontejnerji opremljeni s stranskimi vrati za lažji dostop in prekladanje blaga. Idealni skladiščni kontejnerji za pogosto uporabo.',
                  price: 'Po dogovoru',
                },
                {
                  icon: <Package className="h-6 w-6" />,
                  title: 'Pisarniški skladiščni kontejnerji',
                  desc: 'Skladiščni kontejnerji opremljeni za pisarniško uporabo – z okni, vrati, izolacijo in električno napeljavo. Skladiščni kontejner kot pisarna na terenu.',
                  price: 'Po dogovoru',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-steel-200">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-steel-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-steel-600 mb-3">{item.desc}</p>
                  <p className="text-lg font-bold text-blue-600">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Skladiščni kontejnerji – najem ali nakup?</h2>
          <p className="text-steel-600 leading-relaxed mb-6">
            Skladiščni kontejnerji so na voljo za najem ali nakup. Najem skladiščnega kontejnerja je primeren, kadar potrebujete kontejner za omejeno obdobje – pri selitvi, renovaciji ali sezonskem shranjevanju. Nakup skladiščnega kontejnerja je boljša izbira za dolgoročno uporabo, ko skladiščni kontejner postane stalnica na vaši lokaciji.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Najem skladiščnih kontejnerjev</h3>
              <ul className="space-y-2">
                {[
                  'Fleksibilna najemna doba od 1 meseca',
                  'Nižja začetna investicija',
                  'Cena skladiščnega kontejnerja se znižuje pri daljšem najemu',
                  'Možnost zamenjave velikosti kontejnerja',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-steel-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-3">Nakup skladiščnih kontejnerjev</h3>
              <ul className="space-y-2">
                {[
                  'Lastništvo skladiščnega kontejnerja',
                  'Neomejena uporaba kontejnerja',
                  'Možnost prilagoditve po želji',
                  'Skladiščni kontejner kot dolgoročna investicija',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-steel-700">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Skladiščni kontejnerji – barve in oprema</h2>
          <p className="text-steel-600 leading-relaxed mb-4">
            Skladiščni kontejnerji so na voljo v različnih barvah po RAL lestvici. Izbirate lahko med standardnimi barvami (beli, antracit, moder) ali naročite skladiščni kontejner v barvi po vaši izbiri. Skladiščni kontejnerji se lahko opremijo z:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Stranskimi vrati za lažji dostop do kontejnerja',
              'Okni za naravno osvetlitev skladiščnega kontejnerja',
              'Električno napeljavo in razsvetljavo v kontejnerju',
              'Izolacijo za zaščito pred mrazom in vročino',
              'Police in regale za organizirano shranjevanje',
              'Prezračevalne odprtine za ustrezno ventilacijo kontejnerja',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-steel-600">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Pogosta vprašanja o skladiščnih kontejnerjih</h2>
          <div className="space-y-4">
            {[
              { q: 'Katere velikosti skladiščnih kontejnerjev imate?', a: 'Nudimo skladiščne kontejnerje v treh standardnih velikostih: 10\' (3m), 20\' (6m) in 40\' (12m). Skladiščni kontejnerji 20\' in 40\' so najbolj priljubljeni.' },
              { q: 'Ali so skladiščni kontejnerji vodotesni?', a: 'Da, vsi naši skladiščni kontejnerji so vetro- in vodotesni (Wind & Watertight certifikat). Vaše blago je varno pred vremenskimi vplivi.' },
              { q: 'Kje so na voljo skladiščni kontejnerji?', a: 'Skladiščni kontejnerji so na voljo za dostavo po vsej Sloveniji, Avstriji, Madžarski in Italiji. Imamo stalne lokacije v Ptuju in Mariboru.' },
              { q: 'Kako hitro dobim skladiščni kontejner?', a: 'Skladiščni kontejnerje dostavimo v 1-3 delovnih dneh po potrditvi naročila. Najem skladiščnega kontejnerja je mogoč takoj.' },
              { q: 'Ali lahko skladiščni kontejner opremim po želji?', a: 'Da, skladiščne kontejnerje lahko opremimo z okni, stranskimi vrati, električno napeljavo, izolacijo in drugo opremo po vaših željah.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-steel-200">
                <h3 className="text-lg font-bold text-steel-900 mb-2">{faq.q}</h3>
                <p className="text-steel-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-3xl" />
        </div>
        <div ref={cta.ref} className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Skladiščni kontejnerji po ugodnih cenah</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za ponudbo skladiščnih kontejnerjev</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => onPageChange?.('contact')} className="btn-accent group">
              Pridobite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:+38669633480" className="border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +386 69 633 480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoSkladiscniKontejnerji;
