import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Container, Phone, Package, Calculator, Ship } from 'lucide-react';
import antracit20 from '../Photos/20antracit.jpg';
import antracit40 from '../Photos/40antracit.jpg';
import rabljen20 from '../Photos/20rabljen.jpg';
import rabljen40 from '../Photos/40rabljeni.jpg';
import hc20 from '../Photos/hc20.webp';
import sidedoor40 from '../Photos/sidedoor40.webp';
import kontejnerji from '../Photos/kontejnerji.webp';

interface SeoPageProps {
  onPageChange?: (page: string) => void;
}

const SeoCenaLadijskiKontejner: React.FC<SeoPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const content = useInView();
  const priceTable = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-containers pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Cena ladijskega kontejnerja</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Cena ladijski kontejner
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Iščete ladijski kontejner po ugodni ceni? Pri Skladiščku vam ponujamo pregledne cene ladijskega kontejnerja za nakup in najem. Ladijski kontejner cena se prilagaja vašim potrebam in željam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Cena ladijskega kontejnerja – nakup</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Ladijski kontejner je vsestranski zabojnik, ki se uporablja za prevoz blaga po morju in kopnem. Cena ladijskega kontejnerja je odvisna od velikosti, stanja (nov ali rabljen), opreme in barve. Pri Skladiščku vam ponujamo ladijske kontejnerje po konkurenčnih cenah z garancijo kakovosti in hitro dostavo.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Nov ladijski kontejner (First Trip) pride iz tovarne in je v brezhibnem stanju. Rabljen ladijski kontejner je bil uporabljen za en transport in je v odličnem stanju – vetro- in vodotesen (Wind & Watertight). Cena ladijskega kontejnerja za rabljene primerke je bistveno nižja, a še vedno zagotavlja varno shranjevanje in prevoz blaga.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={antracit20} alt="Ladijski kontejner 20' nov antracit cena" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={antracit40} alt="Ladijski kontejner 40' HC nov antracit cena" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={kontejnerji} alt="Ladijski kontejnerji različne cene" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={priceTable.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`transition-all duration-700 ${priceTable.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calculator className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-steel-900">Cena ladijskega kontejnerja – nakup</h2>
            </div>

            <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden shadow-lg mb-8">
              <div className="px-6 py-4 bg-steel-900 text-white flex items-center justify-between">
                <h3 className="font-semibold">Cenik ladijskega kontejnerja – nakup</h3>
                <span className="text-steel-300 text-sm">cena + DDV</span>
              </div>
              <div className="divide-y divide-steel-100">
                {[
                  { name: "20' Nov (First Trip)", dimensions: '6,06 x 2,44 x 2,59 m', price: '2.300 €', badge: 'Priljubljen', image: antracit20 },
                  { name: "20' HC Nov (First Trip)", dimensions: '6,06 x 2,44 x 2,89 m', price: '2.500 €', badge: null, image: hc20 },
                  { name: "40' HC Nov (First Trip)", dimensions: '12,19 x 2,44 x 2,89 m', price: '2.800 €', badge: null, image: antracit40 },
                  { name: "40' HC Side Door Nov", dimensions: '12,19 x 2,44 x 2,89 m', price: '8.900 €', badge: 'Premium', image: sidedoor40 },
                  { name: "20' Rabljen (Second Trip)", dimensions: '6,06 x 2,44 x 2,59 m', price: '1.490 €', badge: 'Ugodno', image: rabljen20 },
                  { name: "40' HC Rabljen", dimensions: '12,19 x 2,44 x 2,89 m', price: '1.990 €', badge: 'Ugodno', image: rabljen40 },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-5 hover:bg-steel-50 transition-colors">
                    <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={row.image} alt={row.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-steel-900">{row.name}</h4>
                        {row.badge && (
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${row.badge === 'Premium' ? 'bg-amber-100 text-amber-700' : row.badge === 'Ugodno' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {row.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-steel-500">{row.dimensions}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xl font-bold text-steel-900">{row.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-12">Cena ladijskega kontejnerja – najem</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Ladijski kontejner je na voljo tudi za najem. Cena najema ladijskega kontejnerja je odvisna od trajanja najema – daljši najem pomeni nižjo mesečno ceno. Najem ladijskega kontejnerja je idealen za začasno skladiščenje, gradbišča in sezonske potrebe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Ladijski kontejner 20'</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 14,8 m² uporabne površine. Primeren ladijski kontejner za skladiščenje in prevoz.</p>
                <p className="text-2xl font-bold text-blue-600">120 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Ladijski kontejner 40' HC</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 29,7 m² uporabne površine. Primeren ladijski kontejner za obsežnejše skladiščenje.</p>
                <p className="text-2xl font-bold text-blue-600">180 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Kaj vpliva na ceno ladijskega kontejnerja?</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'Velikost ladijskega kontejnerja', desc: 'Ladijski kontejner 20\' je cenejši od 40\' HC kontejnerja. High Cube (HC) kontejnerji so višji in imajo višjo ceno.' },
              { title: 'Stanje kontejnerja', desc: 'Nov ladijski kontejner (First Trip) ima višjo ceno, rabljen (Second Trip) pa cenejši. Oboje je vetro- in vodotesno.' },
              { title: 'Barva kontejnerja', desc: 'Standardne barve (modra, antracit) so na zalogi. Barve po RAL lestvici so na voljo po naročilu.' },
              { title: 'Dodatna oprema', desc: 'Stranska vrata (Side Door), rolo vrata, okna in električna napeljava povečajo ceno ladijskega kontejnerja.' },
              { title: 'Trajanje najema', desc: 'Daljši najem ladijskega kontejnerja pomeni nižjo mesečno ceno. Pri večletnem najemu se cena zniža za do 45%.' },
              { title: 'Lokacija dostave', desc: 'Cena dostave ladijskega kontejnerja je odvisna od razdalje. Dostava po Sloveniji, Avstriji, Madžarski in Italiji.' },
            ].map((item, i) => (
              <div key={i} className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <h3 className="text-lg font-bold text-steel-900 mb-2">{item.title}</h3>
                <p className="text-steel-600 text-sm leading-relaxed">{item.desc}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ladijski kontejner po ugodni ceni</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za točno ceno ladijskega kontejnerja</p>
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

export default SeoCenaLadijskiKontejner;
