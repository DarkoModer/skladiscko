import { Container, Phone, Mail, MapPin, Facebook, ArrowRight } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const links = [
    { name: 'Kontejnerji', id: 'containers' },
    { name: 'Najem skladisc', id: 'storage' },
    { name: 'Izgradnja', id: 'construction' },
    { name: 'O nas', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Container className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Skladiscko</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Zaupanja vreden ponudnik skladiscnih resitev z vec kot 6 leti izkusenj.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:069633480" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>069 633 480</span>
              </a>
              <a href="mailto:info@skladiscko.si" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@skladiscko.si</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Puhova ulica 12a, 2250 Ptuj</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">Storitve</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">Sledite nam</h4>
            <a
              href="https://www.facebook.com/profile.php?id=61577763940228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
            <div className="mt-8">
              <p className="text-sm text-slate-500">Na voljo 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 py-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 Skladiscko. Vse pravice pridrzane.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
