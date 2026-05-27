import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Clock, MapPin, Container, Phone, Lock, Package } from 'lucide-react';
import hc20 from '../Photos/hc20.webp';
import sidedoor from '../Photos/sidedoor40.webp';

interface SeoPageProps {
  onPageChange?: (page: string) => void;
}

const SeoNajemKontejnerjaZaShranjevanje: React.FC<SeoPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const content = useInView();
  const useCases = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-storage pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Kontejner za shranjevanje</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Najem kontejnerja za shranjevanje
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Potrebujete kontejner za shranjevanje? Najemite skladiščni kontejner za varno shranjevanje blaga, opreme in inventarja. Kontejner za shranjevanje z dostavo po Sloveniji in sosednjih državah.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Kontejner za shranjevanje – varna in praktična rešitev</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Kontejner za shranjevanje je idealna rešitev, kadar potrebujete dodaten prostor za shranjevanje blaga, opreme ali osebnih predmetov. Pri Skladiščku vam omogočamo najem kontejnerja za shranjevanje v različnih velikostih, z dostavo na vašo lokacijo. Skladiščni kontejner za shranjevanje je varen, vodotesen in primeren za vse vrste blaga.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Najem kontejnerja za shranjevanje je boljša izbira kot gradnja ali najem skladiščnega prostora, saj je cenejša, hitrejša in fleksibilnejša. Kontejner za shranjevanje postavimo v 1-3 delovnih dneh, dostop pa je mogoč 24 ur na dan, 7 dni v tednu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={hc20} alt="Kontejner za shranjevanje 20 čevljev" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={sidedoor} alt="Kontejner za shranjevanje s stranskimi vrati" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Kaj lahko shranjujete v kontejnerju?</h2>
            <p className="text-steel-600 leading-relaxed mb-4">
              Kontejner za shranjevanje je primeren za najrazličnejše namene. Skladiščni kontejner zagotavlja varnost in zaščito pred vremenskimi vplivi:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Poslovni inventar in opremo za shranjevanje',
                'Gradbeni material in orodje',
                'Sezonsko blago in artikle za shranjevanje',
                'Pohištvo in osebne predmete',
                'Kmetijsko opremo in stroje',
                'Športno opremo in vozila za shranjevanje',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-steel-600">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Najem kontejnerja za shranjevanje – velikosti in cene</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Kontejner 20' za shranjevanje</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 14 m² uporabne površine. Primeren kontejner za shranjevanje manjših količin blaga.</p>
                <ul className="space-y-1 text-sm text-steel-600 mb-4">
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Dolžina: 6 m</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Širina: 2,4 m</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Višina: 2,6 m</li>
                </ul>
                <p className="text-2xl font-bold text-blue-600">120 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Kontejner 40' za shranjevanje</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 28 m² uporabne površine. Primeren kontejner za shranjevanje večjih količin.</p>
                <ul className="space-y-1 text-sm text-steel-600 mb-4">
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Dolžina: 12 m</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Širina: 2,4 m</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> Višina: 2,9 m</li>
                </ul>
                <p className="text-2xl font-bold text-blue-600">180 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={useCases.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`transition-all duration-700 ${useCases.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-8 text-center">Kdo potrebuje kontejner za shranjevanje?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Podjetja', desc: 'Kontejner za shranjevanje poslovnega inventarja, arhivov in opreme. Idealno za podjetja, ki potrebujejo dodaten skladiščni prostor.' },
                { title: 'Gradbeništvo', desc: 'Skladiščni kontejner za shranjevanje gradbenega materiala in orodja na gradbišču. Varen in vodotesen kontejner.' },
                { title: 'Kmetijstvo', desc: 'Kontejner za shranjevanje kmetijske opreme, strojev in sezonega blaga. Primeren za kmetijska gospodarstva.' },
                { title: 'Posamezniki', desc: 'Kontejner za shranjevanje pri selitvi, renovaciji ali kot dodaten prostor. Shranjevanje pohištva in osebnih predmetov.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-steel-200">
                  <h3 className="text-lg font-bold text-steel-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-steel-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Pogosta vprašanja o kontejnerju za shranjevanje</h2>
          <div className="space-y-4">
            {[
              { q: 'Ali je kontejner za shranjevanje varen?', a: 'Da, vsak kontejner za shranjevanje je vetro- in vodotesen, z zanesljivim zaklepanjem. Samo vi imate ključ od vašega kontejnerja za shranjevanje.' },
              { q: 'Kako hitro dobim kontejner za shranjevanje?', a: 'Kontejner za shranjevanje dostavimo v 1-3 delovnih dneh po potrditvi naročila. Hitra dostava po vsej Sloveniji.' },
              { q: 'Ali lahko shranjujem hrano v kontejnerju?', a: 'Standardni kontejner za shranjevanje ni opremljen s hlajenjem, primeren pa je za suho blago in nepokvarljive artikle. Po potrebi lahko kontejner opremimo s prezračevanjem.' },
              { q: 'Kje postavimo kontejner za shranjevanje?', a: 'Kontejner za shranjevanje dostavimo na vašo lokacijo – domačijo, gradbišče, poslovni prostor. Potrebujete le ravno in trdno podlago.' },
            ].map((faq, i) => (
              <div key={i} className="bg-steel-50 rounded-xl p-6 border border-steel-200">
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
          <h2 className="text-3xl font-bold text-white mb-4">Najemite kontejner za shranjevanje</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za brezplačno ponudbo kontejnerja za shranjevanje</p>
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

export default SeoNajemKontejnerjaZaShranjevanje;
