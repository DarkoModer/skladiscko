import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Clock, MapPin, Lock, Container, Phone } from 'lucide-react';
import storageImg from '../Photos/storage1.png';
import hc20 from '../Photos/hc20.webp';

interface SeoPageProps {
  onPageChange?: (page: string) => void;
}

const SeoNajemSkladiscnegaKontejnerja: React.FC<SeoPageProps> = ({ onPageChange }) => {
  const hero = useInView();
  const content = useInView();
  const benefits = useInView();
  const cta = useInView();

  return (
    <div>
      <section className="relative section-dark-storage pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Najem skladiščnega kontejnerja</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Najem skladiščnega kontejnerja
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Iščete skladiščni kontejner za najem? Skladiščko ponuja najem skladiščnega kontejnerja po ugodni ceni z dostavo po Sloveniji, Avstriji, Madžarski in Italiji. Kontejner za shranjevanje opreme, blaga in inventarja.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Zakaj izbrati najem skladiščnega kontejnerja?</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Najem skladiščnega kontejnerja je praktična in cenovno ugodna rešitev za vsakogar, ki potrebuje dodaten prostor za shranjevanje. Skladiščni kontejner je varen, vodotesen in primeren za shranjevanje različnega blaga – od poslovnega inventarja do osebnih predmetov. Pri Skladiščku vam omogočamo najem skladiščnega kontejnerja z brezhibno dostavo in postavitvijo na vašo lokacijo.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejner za najem je na voljo v velikostih 20' (približno 14 m²) in 40' (približno 28 m²). Vsak kontejner je opremljen z zaklepanjem, vetro- in vodotesno konstrukcijo ter možnostjo dostopa 24/7. Najem skladiščnega kontejnerja je mogoč za katero koli obdobje – od enega meseca naprej, s fleksibilnim podaljšanjem pogodbe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={hc20} alt="Najem skladiščnega kontejnerja 20 čevljev" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img src={storageImg} alt="Skladiščni kontejner za shranjevanje" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Kako poteka najem skladiščnega kontejnerja?</h2>
            <p className="text-steel-600 leading-relaxed mb-4">
              Postopek najema skladiščnega kontejnerja je preprost. Kontaktirate nas z vašimi zahtevami, mi vam pripravimo ponudbo z ugodno ceno najema skladiščnega kontejnerja, po potrditvi pa organiziramo dostavo in postavitev kontejnerja na vašo lokacijo. Skladiščni kontejner vam je na voljo takoj po postavitvi.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-steel-600 mb-6">
              <li>Kontaktirate Skladiščko za ponudbo najema skladiščnega kontejnerja</li>
              <li>Prejmete ceno in rok dostave skladiščnega kontejnerja</li>
              <li>Potrdite naročilo najema kontejnerja</li>
              <li>Dostavimo skladiščni kontejner na vašo lokacijo</li>
              <li>Uporabljate kontejner za shranjevanje po vaših potrebah</li>
            </ol>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Velikosti skladiščnega kontejnerja za najem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <h3 className="text-lg font-bold text-steel-900 mb-2">Skladiščni kontejner 20'</h3>
                <p className="text-steel-600 text-sm mb-2">Približno 14 m² uporabne površine. Primeren za manjše skladiščne potrebe.</p>
                <p className="text-2xl font-bold text-blue-600">120 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <h3 className="text-lg font-bold text-steel-900 mb-2">Skladiščni kontejner 40'</h3>
                <p className="text-steel-600 text-sm mb-2">Približno 28 m² uporabne površine. Primeren za obsežnejše shranjevanje.</p>
                <p className="text-2xl font-bold text-blue-600">180 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={benefits.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`transition-all duration-700 ${benefits.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-8 text-center">Prednosti najema skladiščnega kontejnerja pri Skladiščku</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Shield className="h-6 w-6" />, title: 'Varen skladiščni kontejner', desc: 'Vsak skladiščni kontejner je vetro- in vodotesen, z zanesljivim zaklepanjem.' },
                { icon: <Clock className="h-6 w-6" />, title: 'Dostop 24/7', desc: 'Do vašega skladiščnega kontejnerja imate dostop kadarkoli, tudi ob vikendih.' },
                { icon: <Truck className="h-6 w-6" />, title: 'Dostava kontejnerja', desc: 'Skladiščni kontejner dostavimo na vašo lokacijo po vsej Sloveniji.' },
                { icon: <MapPin className="h-6 w-6" />, title: 'Lokacije v 4 državah', desc: 'Skladiščni kontejner dostavimo v Slovenijo, Avstrijo, Madžarsko in Italijo.' },
                { icon: <Lock className="h-6 w-6" />, title: 'Vaš ključ', desc: 'Skladiščni kontejner zaklenete z lastnim ključem – samo vi imate dostop.' },
                { icon: <Container className="h-6 w-6" />, title: 'Fleksibilna najemna doba', desc: 'Najem skladiščnega kontejnerja od 1 meseca dalje s podaljšanjem.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-steel-200">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {item.icon}
                  </div>
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
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Pogosta vprašanja o najemu skladiščnega kontejnerja</h2>
          <div className="space-y-4">
            {[
              { q: 'Koliko stane najem skladiščnega kontejnerja?', a: 'Cena najema skladiščnega kontejnerja se začne pri 120 €/mesec za 20\' kontejner in 180 €/mesec za 40\' kontejner (plus DDV). Cene se znižujejo pri daljšem najemu.' },
              { q: 'Kako hitro lahko dobim skladiščni kontejner?', a: 'Skladiščni kontejner dostavimo v 1-3 delovnih dneh po potrditvi naročila, odvisno od vaše lokacije.' },
              { q: 'Ali je skladiščni kontejner vodotesen?', a: 'Da, vsi naši skladiščni kontejnerji so popolnoma vetro- in vodotesni (Wind & Watertight certifikat). Vaše blago je varno pred vremenskimi vplivi.' },
              { q: 'Kje lahko najemim skladiščni kontejner?', a: 'Skladiščni kontejner vam dostavimo na vašo lokacijo po vsej Sloveniji, Avstriji, Madžarski in Italiji. Imamo tudi stalne lokacije v Ptuju in Mariboru.' },
              { q: 'Kakšna je minimalna najemna doba skladiščnega kontejnerja?', a: 'Minimalna najemna doba skladiščnega kontejnerja je en mesec. Pogodbo lahko kadarkoli podaljšate brez dodatnih stroškov.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Najemite skladiščni kontejner že danes</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za brezplačno ponudbo najema skladiščnega kontejnerja</p>
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

export default SeoNajemSkladiscnegaKontejnerja;
