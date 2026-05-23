import { Container, Phone, Mail, MapPin, Facebook, ArrowRight } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const links = [
    { name: 'Kontejnerji', id: 'containers' },
    { name: 'Najem skladišč', id: 'storage' },
    { name: 'Prevozi', id: 'transport' },
    { name: 'Izgradnja', id: 'construction' },
    { name: 'O nas', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
  ];

  return (
    <footer className="section-dark text-white">
      <div className="divider-glow" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-gradient-to-br from-steel-600 to-steel-700 p-1.5 rounded-lg">
                <Container className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Skladiščko</span>
            </div>
            <p className="text-steel-400 leading-relaxed max-w-sm mb-6">
              Zaupanja vreden ponudnik skladiščnih rešitev z več kot 6 leti izkušenj.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:069633480" className="flex items-center gap-3 text-steel-400 hover:text-accent-300 transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span>069 633 480</span>
              </a>
              <a href="mailto:info@skladiscko.si" className="flex items-center gap-3 text-steel-400 hover:text-accent-300 transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <span>info@skladiscko.si</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Skladi%C5%A1%C4%8Dko+-+Prodaja+in+najem+kontejnerjev/@46.4189285,15.8835886,17z/data=!3m1!4b1!4m6!3m5!1s0x476f67ac507d0dbf:0xe9b7b60c1447379e!8m2!3d46.4189248!4d15.8861635!16s%2Fg%2F11z6n5km42?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-steel-400 hover:text-accent-300 transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Puhova ulica 12a, 2250 Ptuj</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300 mb-5">Storitve</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-steel-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300 mb-5">Sledite nam</h4>
            <a
              href="https://www.facebook.com/profile.php?id=61577763940228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-steel-400 hover:text-accent-300 transition-colors duration-300 group"
            >
              <div className="p-2 rounded-lg bg-steel-800/50 group-hover:bg-steel-700/50 transition-colors duration-300">
                <Facebook className="h-4 w-4" />
              </div>
              <span>Facebook</span>
            </a>
            <div className="mt-8">
              <p className="text-sm text-steel-500">Na voljo 24/7</p>
            </div>
          </div>
        </div>

        <div className="divider-glow" />
        <div className="py-6 text-center">
          <p className="text-sm text-steel-500">
            &copy; 2026 Skladiščko. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
