import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight, Truck, Shield, Clock, MapPin, Container, Phone, Lock, Package } from 'lucide-react';
import hc20 from '../Photos/hc20.webp';
import storageImg from '../Photos/storage1.png';
import kontejnerji from '../Photos/kontejnerji.webp';

interface LocationData {
  city: string;
  region: string;
  distance: string;
  description: string;
  deliveryNote: string;
}

interface SeoPageProps {
  onPageChange?: (page: string) => void;
  location: LocationData;
}

const SeoSkladiscniKontejnerLokacija: React.FC<SeoPageProps> = ({ onPageChange, location }) => {
  const hero = useInView();
  const content = useInView();
  const benefits = useInView();
  const cta = useInView();
  const { city, region, distance, description, deliveryNote } = location;

  return (
    <div>
      <section className="relative section-dark-storage pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Skladiščni kontejner {city}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Skladiščni kontejner {city}
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={content.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`prose prose-lg max-w-none transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-4">Skladiščni kontejner {city} – najem in prodaja</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Skladiščni kontejner {city} je na voljo za najem in nakup. Pri Skladiščku vam ponujamo skladiščni kontejner z dostavo v {city} in {region}. Skladiščni kontejner {city} je varen, vodotesen in primeren za shranjevanje blaga, opreme in inventarja. {deliveryNote}
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Najem skladiščnega kontejnerja v {city} je preprost – kontaktirate nas, prejmete ponudbo s ceno skladiščnega kontejnerja za {city}, po potrditvi pa organiziramo dostavo in postavitev kontejnerja na vašo lokacijo v {city}. Skladiščni kontejner {city} je na voljo v velikostih 20' in 40', z možnostjo opremljanja po vaših željah.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={hc20} alt={`Skladiščni kontejner ${city} 20 čevljev`} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={storageImg} alt={`Skladiščni kontejner ${city} za shranjevanje`} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={kontejnerji} alt={`Skladiščni kontejnerji ${city}`} className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Skladiščni kontejner {city} – cene</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Skladiščni kontejner 20' {city}</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 14 m² uporabne površine. Primeren skladiščni kontejner za {city} in okolico.</p>
                <ul className="space-y-1 text-sm text-steel-600 mb-4">
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 6 m dolžina</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 2,4 m širina</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 2,6 m višina</li>
                </ul>
                <p className="text-2xl font-bold text-blue-600">120 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
              <div className="bg-steel-50 rounded-xl p-6 border border-steel-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Container className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Skladiščni kontejner 40' {city}</h3>
                </div>
                <p className="text-steel-600 text-sm mb-3">Približno 28 m² uporabne površine. Primeren skladiščni kontejner za obsežnejše shranjevanje v {city}.</p>
                <ul className="space-y-1 text-sm text-steel-600 mb-4">
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 12 m dolžina</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 2,4 m širina</li>
                  <li className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600" /> 2,9 m višina</li>
                </ul>
                <p className="text-2xl font-bold text-blue-600">180 €<span className="text-sm text-steel-500 font-normal">/mesec + DDV</span></p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-steel-900 mb-4 mt-10">Dostava skladiščnega kontejnerja v {city}</h2>
            <p className="text-steel-600 leading-relaxed mb-4">
              Skladiščni kontejner dostavimo v {city} s tovornjakom opremljenim z dvigalom (hiab), ki kontejner postavi točno na predvideno mesto. Dostava skladiščnega kontejnerja v {city} traja {distance} po potrditvi naročila. Naše območje dostave zajema {city} in {region}.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-steel-600 mb-6">
              <li>Kontaktirate Skladiščko za ponudbo skladiščnega kontejnerja v {city}</li>
              <li>Prejmete ceno skladiščnega kontejnerja za {city} z vključeno dostavo</li>
              <li>Potrdite naročilo skladiščnega kontejnerja</li>
              <li>Dostavimo skladiščni kontejner v {city} in ga postavimo na lokacijo</li>
              <li>Uporabljate skladiščni kontejner za shranjevanje v {city}</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div ref={benefits.ref} className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className={`transition-all duration-700 ${benefits.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-steel-900 mb-8 text-center">Zakaj izbrati skladiščni kontejner {city}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Shield className="h-6 w-6" />, title: `Varen skladiščni kontejner ${city}`, desc: 'Vetro- in vodotesen skladiščni kontejner z zanesljivim zaklepanjem. Vaše blago varno v {city}.'.replace('{city}', city) },
                { icon: <Truck className="h-6 w-6" />, title: `Hitra dostava v ${city}`, desc: `Skladiščni kontejner dostavimo v ${city} v ${distance}. Profesionalna postavitev z dvigalom.` },
                { icon: <Clock className="h-6 w-6" />, title: 'Dostop 24/7', desc: `Do vašega skladiščnega kontejnerja v ${city} imate dostop kadarkoli, tudi ob vikendih.` },
                { icon: <MapPin className="h-6 w-6" />, title: `Lokacija ${city}`, desc: `Skladiščni kontejner postavimo na vašo lokacijo v ${city} in ${region}.` },
                { icon: <Lock className="h-6 w-6" />, title: 'Vaš ključ', desc: `Skladiščni kontejner v ${city} zaklenete z lastnim ključem – samo vi imate dostop.` },
                { icon: <Container className="h-6 w-6" />, title: 'Fleksibilna najemna doba', desc: `Najem skladiščnega kontejnerja v ${city} od 1 meseca dalje s podaljšanjem.` },
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
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Pogosta vprašanja – skladiščni kontejner {city}</h2>
          <div className="space-y-4">
            {[
              { q: `Koliko stane skladiščni kontejner v ${city}?`, a: `Cena skladiščnega kontejnerja v ${city} se začne pri 120 €/mesec za 20' kontejner in 180 €/mesec za 40' kontejner (plus DDV). Dostava skladiščnega kontejnerja v ${city} je vključena v ceno.` },
              { q: `Kako hitro dobim skladiščni kontejner v ${city}?`, a: `Skladiščni kontejner dostavimo v ${city} v ${distance} po potrditvi naročila.` },
              { q: `Ali je skladiščni kontejner v ${city} vodotesen?`, a: `Da, vsi naši skladiščni kontejnerji v ${city} so popolnoma vetro- in vodotesni (Wind & Watertight certifikat). Vaše blago je varno pred vremenskimi vplivi.` },
              { q: `Kje lahko postavim skladiščni kontejner v ${city}?`, a: `Skladiščni kontejner v ${city} postavimo na vašo lokacijo – domačijo, gradbišče, poslovni prostor. Potrebujete le ravno in trdno podlago za kontejner.` },
              { q: `Ali ponujate tudi nakup skladiščnega kontejnerja v ${city}?`, a: `Da, skladiščni kontejner v ${city} je na voljo tudi za nakup. Kontaktirate nas za ceno skladiščnega kontejnerja za nakup v ${city}.` },
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
          <h2 className="text-3xl font-bold text-white mb-4">Skladiščni kontejner {city}</h2>
          <p className="text-steel-400 mb-8">Kontaktirajte nas za brezplačno ponudbo skladiščnega kontejnerja v {city}</p>
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

export default SeoSkladiscniKontejnerLokacija;
