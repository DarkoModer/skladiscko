import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Star, Shield, Truck, Wrench, ExternalLink } from 'lucide-react';
import antracit20 from '../Photos/20antracit.jpg';
import antracit40 from '../Photos/40antracit.jpg';
import rabljen20 from '../Photos/20rabljen.jpg';
import rabljen40 from '../Photos/40rabljeni.jpg';
import moder20 from '../Photos/20moder.avif';
import moder40 from '../Photos/40moder.jpg';
import pisarniski3 from '../Photos/pisarniski3mantracit.jpg';
import pisarniski4 from '../Photos/pisarniski6m.jpg';
import pisarniski6 from '../Photos/pisarniski6mbeli.jpg';

interface ContainersPageProps {
  onPageChange?: (page: string) => void;
}

const containerTypes = [
  { name: '20\' Nov Kontejner', dimensions: '6,06 m x 2,44 m x 2,59 m', condition: 'First Trip', availability: 'Na zalogi', floorArea: '14,8 m\u00B2', volume: '33,2 m\u00B3', price: '2.400', color: 'Modra, Antracit, Bež, Bela, Siva', imagePath: antracit20, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: '40\' High Cube', dimensions: '12,19 m x 2,44 m x 2,89 m', condition: 'First Trip', availability: 'V prihodu', floorArea: '29,7 m\u00B2', volume: '76,3 m\u00B3', price: '3.790', color: 'Antracit, Modra', imagePath: antracit40, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: '20\' Rabljen', dimensions: '6,06 m x 2,44 m x 2,89 m', condition: 'Second Trip', availability: 'Na zalogi', floorArea: '14,8 m\u00B2', volume: '37,4 m\u00B3', price: '2.290', color: 'Bela', imagePath: rabljen20, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: '40\' Rabljen', dimensions: '12,19 m x 2,44 m x 2,89 m', condition: 'Rabljeno', availability: 'V prihodu', floorArea: '29,7 m\u00B2', volume: '76,3 m\u00B3', price: '2.990', color: '/', imagePath: rabljen40, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: '20\' Nov Kontejner', dimensions: '6,06 m x 2,44 m x 2,59 m', condition: 'Novo', availability: 'V prihodu', floorArea: '14,8 m\u00B2', volume: '33,2 m\u00B3', price: '2.***', color: 'Modra, Antracit, Bež, Bela, Črna', imagePath: moder20, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: '40\' Nov Kontejner', dimensions: '12,19 m x 2,44 m x 2,59 m', condition: 'Novo', availability: 'V prihodu', floorArea: '29,7 m\u00B2', volume: '67,7 m\u00B3', price: '3.***', color: 'Modra, Antracit, Bež, Bela, Črna', imagePath: moder40, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Pisarniški 3m', dimensions: '3 m x 2,4 m x 2,6 m', condition: 'Novo', availability: 'Na zalogi', floorArea: '6,66 m\u00B2', volume: '15,9 m\u00B3', price: '3.200', color: 'Bela, Antracit', imagePath: pisarniski3, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Pisarniški 4m', dimensions: '4 m x 2,4 m x 2,6 m', condition: 'Novo', availability: 'Na zalogi', floorArea: '9,4 m\u00B2', volume: '22,5 m\u00B3', price: '3.500', color: 'Bela, Antracit', imagePath: pisarniski4, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Pisarniški 5m', dimensions: '5 m x 2,4 m x 2,6 m', condition: 'Novo', availability: 'Na zalogi', floorArea: '14,1 m\u00B2', volume: '33,7 m\u00B3', price: '3.800', color: 'Bela, Antracit', imagePath: pisarniski6, fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const filters = ['Vsi', 'Novi', 'Rabljeni', 'Pisarniški'];

const ContainersPage: React.FC<ContainersPageProps> = ({ onPageChange }) => {
  const [activeFilter, setActiveFilter] = useState('Vsi');
  const hero = useInView();
  const grid = useInView();
  const features = useInView();

  const filtered = containerTypes.filter((c) => {
    if (activeFilter === 'Vsi') return true;
    if (activeFilter === 'Novi') return c.condition === 'First Trip' || (c.condition === 'Novo' && !c.name.includes('Pisarniški'));
    if (activeFilter === 'Rabljeni') return c.condition === 'Second Trip' || c.condition === 'Rabljeno';
    if (activeFilter === 'Pisarniški') return c.name.includes('Pisarniški');
    return true;
  });

  return (
    <div>
      <section className="relative section-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Ponudba kontejnerjev</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Premium kontejnerji
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Trpežni, varni in vsestranški. Certificirana kakovost in hitra dostava po Sloveniji.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-steel-950/0 via-steel-950/80 to-transparent blur-sm pointer-events-none" />
      </section>
      <div className="relative h-12 -mt-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-[2px]" />
      </div>

      <section className="py-20 bg-white">
        <div ref={grid.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`flex flex-wrap items-center justify-between gap-4 mb-10 transition-all duration-700 ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-steel-900 text-white shadow-lg shadow-steel-900/20'
                      : 'bg-steel-50 text-steel-600 hover:bg-steel-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61577763940228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <ExternalLink className="h-4 w-4" />
              Aktualna zaloga na Facebooku
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((container, index) => (
              <div
                key={index}
                className={`group card-steel overflow-hidden hover-lift ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: grid.isVisible ? `${index * 60}ms` : '0ms', transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <div className="relative h-56 bg-steel-50 overflow-hidden">
                  <img
                    src={container.imagePath}
                    alt={container.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = container.fallbackImage; }}
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="glass text-steel-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {container.availability}
                    </span>
                    <span className="bg-steel-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {container.condition}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-steel-900 mb-1">{container.name}</h3>
                  <p className="text-sm text-steel-500 mb-3">{container.dimensions}</p>
                  <div className="flex gap-3 mb-4">
                    <div className="bg-steel-50 px-3 py-1.5 rounded-lg text-center flex-1">
                      <div className="text-xs text-steel-400">Površina</div>
                      <div className="text-sm font-semibold text-steel-800">{container.floorArea}</div>
                    </div>
                    <div className="bg-steel-50 px-3 py-1.5 rounded-lg text-center flex-1">
                      <div className="text-xs text-steel-400">Volumen</div>
                      <div className="text-sm font-semibold text-steel-800">{container.volume}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-steel-100">
                    <div>
                      <div className="text-2xl font-bold text-steel-900">{container.price} &euro;</div>
                      <div className="text-xs text-steel-400">+ DDV</div>
                    </div>
                    <button
                      onClick={() => onPageChange?.('contact')}
                      className="btn-primary text-sm !px-5 !py-2.5"
                    >
                      Povpraševanje
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-steel-500">
              Cene NE vključujejo DDV. Dostava in postavitev se zaračunata posebej.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={features.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-dark p-10 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-400/5 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-2xl font-bold mb-8">Zakaj naši kontejnerji?</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Shield className="h-5 w-5" />, title: 'Vrhunska kakovost', desc: 'Cor-ten jeklo, odporno proti rji in koroziji.' },
                    { icon: <Truck className="h-5 w-5" />, title: 'Hitra dostava', desc: 'Ekspresna dostava in strokovna postavitev.' },
                    { icon: <Wrench className="h-5 w-5" />, title: 'Prilagoditve', desc: 'Možnost prilagoditve po vaših željah.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-accent-500/15 p-2.5 rounded-xl h-fit text-accent-300">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-steel-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-steel-100">
              <h3 className="text-2xl font-bold text-steel-900 mb-6">Možne prilagoditve</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Rolo vrata', 'Okna in prezračevanje', 'Električna napeljava', 'Izolacijski paketi', 'Notranje stene', 'Barve po meri'].map((mod, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-steel-700 text-sm">{mod}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onPageChange?.('contact')}
                className="w-full btn-primary justify-center group"
              >
                Ponudba po meri
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-12 -mb-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-steel-50 via-steel-50/50 to-transparent backdrop-blur-[2px]" />
      </div>
      <section className="py-20 section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-steel-950/0 via-steel-950/60 to-transparent blur-sm pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Pripravite se na nakup?</h2>
          <p className="text-steel-400 mb-8">Brezplačno svetovanje in konkurenčna ponudba</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onPageChange?.('contact')}
              className="btn-accent"
            >
              Pridobite ponudbo
            </button>
            <a
              href="tel:069633480"
              className="border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all duration-300"
            >
              069 633 480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContainersPage;
