import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Clock, MapPin, Container, Phone, Package, Calculator } from 'lucide-react';
import kontejnerji from '../Photos/kontejnerji.webp';
import antracit20 from '../Photos/20antracit.jpg';

interface SeoPageProps {
  onPageChange?: (page: string) => void;
}

const SeoSkladiscniKontejnerCena: React.FC<SeoPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const content = useInView();
  const priceTable = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-storage pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Cena skladiščnega kontejnerja</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Skladiščni kontejner cena
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Iščete skladiščni kontejner po ugodni ceni? Pri Skladiščku vam ponujamo pregledne cene skladiščnega kontejnerja za najem in nakup. Skladiščni kontejner cena se prilagaja vašim potrebam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Skladiščni kontejner cena – pregledna in ugodna</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejner cena je odvisna od velikosti kontejnerja, trajanja najema in lokacije dostave. Pri Skladiščku zagotavljamo konkurenčne cene skladiščnega kontejnerja z brezskrbno dostavo in postavitvijo. Skladiščni kontejner cena za najem se znižuje pri daljšem najemu, kontejner za nakup pa je na voljo po ugodni ceni z garancijo kakovosti.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejner je investicija, ki se hitro povrne. Ne glede na to, ali iščete skladiščni kontejner za najem ali nakup, vam ponujamo ceno, ki ustreza vašemu proračunu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={kontejnerji} alt="Skladiščni kontejnerji - različne velikosti in cene" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={antracit20} alt="Skladiščni kontejner 20' cena" className="w-full h-full object-cover" />
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
              <h2 className="text-2xl font-bold text-steel-900">Skladiščni kontejner cena – najem</h2>
            </div>

            <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden shadow-lg mb-8">
              <div className="px-6 py-4 bg-steel-900 text-white flex items-center justify-between">
                <h3 className="font-semibold">Cenik najema skladiščnega kontejnerja</h3>
                <span className="text-steel-300 text-sm">cena / mesec + DDV</span>
              </div>
              <div className="divide-y divide-steel-100">
                {[
                  { period: '1 - 12 mesecev', price20: '120 €', price40: '180 €', best: false },
                  { period: '13 - 24 mesecev', price20: '100 €', price40: '150 €', best: false },
                  { period: '25 - 36 mesecev', price20: '80 €', price40: '120 €', best: false },
                  { period: '37 - 48 mesecev', price20: '70 €', price40: '110 €', best: false },
                  { period: '49 - 60 mesecev', price20: '65 €', price40: '100 €', best: true },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 ${row.best ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-steel-50'} transition-colors`}>
                    <div className="flex items-center gap-3">
                      {row.best && <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Najugodneje</span>}
                      <span className="text-steel-700 font-medium">{row.period}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <span className="text-xs text-steel-500 block">20' kontejner</span>
                        <span className={`font-bold text-lg ${row.best ? 'text-blue-600' : 'text-steel-900'}`}>{row.price20}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-steel-500 block">40' kontejner</span>
                        <span className={`font-bold text-lg ${row.best ? 'text-blue-600' : 'text-steel-900'}`}>{row.price40}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-12">Skladiščni kontejner cena – nakup</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejner za nakup je na voljo po konkurenčni ceni. Cena skladiščnega kontejnerja za nakup je odvisna od stanja (nov ali rabljen), velikosti in opreme. Kontaktirajte nas za točno ceno skladiščnega kontejnerja, ki ustreza vašim potrebam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Nov skladiščni kontejner</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Kakovosten nov skladiščni kontejner z garancijo. Na voljo različne barve po RAL lestvici.</p>
                <p className="text-xl font-bold text-green-600">Od 1900€ dalje</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-xl">
                    <Package className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Rabljen skladiščni kontejner</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Rabljen skladiščni kontejner v dobrem stanju. Ugodna cena skladiščnega kontejnerja.</p>
                <p className="text-xl font-bold text-amber-600">Od 1200€ dalje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Kaj vpliva na ceno skladiščnega kontejnerja?</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'Velikost kontejnerja', desc: 'Skladiščni kontejner 20\' je cenejši od 40\' kontejnerja. Cena skladiščnega kontejnerja narašča z velikostjo.' },
              { title: 'Trajanje najema', desc: 'Daljši najem skladiščnega kontejnerja pomeni nižjo mesečno ceno. Skladiščni kontejner cena se zniža pri večletnem najemu.' },
              { title: 'Lokacija dostave', desc: 'Cena dostave skladiščnega kontejnerja je odvisna od razdalje. Dostava po Sloveniji, Avstriji, Madžarski in Italiji.' },
              { title: 'Stanje kontejnerja', desc: 'Nov skladiščni kontejner ima višjo ceno, rabljen kontejner pa je cenejši. Oboje zagotavlja varno shranjevanje.' },
              { title: 'Dodatna oprema', desc: 'Oprema kontejnerja (stranska vrata, okna, električna napeljava) vpliva na ceno skladiščnega kontejnerja.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Skladiščni kontejner po ugodni ceni</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za točno ceno skladiščnega kontejnerja</p>
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

export default SeoSkladiscniKontejnerCena;
