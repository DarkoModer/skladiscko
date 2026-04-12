import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Kako hitro lahko dostavite kontejner?', a: 'Večino kontejnerjev dostavimo v 2-3 delovnih dneh, odvisno od lokacije in razpoložljivosti.' },
  { q: 'Ali ponujate možnosti financiranja?', a: 'Da, ponujamo prilagodljive možnosti plačila za nakup kontejnerjev in izvedbo projektov.' },
  { q: 'Koliko časa traja izvedba projekta?', a: 'Večina projektov je dokončanih v 2-4 tednih od začetka del.' },
  { q: 'Ali nudite garancijo na izvedena dela?', a: 'Da, na vsa naša dela nudimo 2-letno garancijo, na kontejnerje pa standardno garancijo proizvajalca.' },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hero = useInView();
  const form = useInView();
  const faqSection = useInView();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://skladiscko.si/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative section-dark-contact pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl animate-glow" />
        </div>
        <div ref={hero.ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`max-w-2xl transition-all duration-700 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Stopite v stik
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed max-w-lg">
              Naša ekipa je pripravljena vam pomagati. Brezplačno svetovanje in konkurenčna ponudba.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div ref={form.ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 ${form.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-steel-900">Kontaktni podatki</h2>

              <div className="space-y-5">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: 'Telefon', value: '069 633 480', sub: 'Na voljo 24/7', href: 'tel:069633480' },
                  { icon: <Mail className="h-5 w-5" />, label: 'E-pošta', value: 'info@skladiscko.si', sub: 'Odgovorimo v 24 urah', href: 'mailto:info@skladiscko.si' },
                  { icon: <MapPin className="h-5 w-5" />, label: 'Naslov', value: 'Puhova ulica 12a', sub: '2250 Ptuj' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-steel-50 p-2.5 rounded-xl text-steel-600 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-steel-400 uppercase tracking-wider font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-steel-900 hover:text-blue-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-steel-900">{item.value}</p>
                      )}
                      <p className="text-sm text-steel-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-dark p-6 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-400/5 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <h3 className="font-semibold mb-3">Območja storitev</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-steel-300">
                    <span>Ptuj in okolica</span>
                    <span>Maribor</span>
                    <span>Ljubljana</span>
                    <span>Celje</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-steel-50 p-6 md:p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-steel-900 mb-6">Pošljite sporočilo</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <p className="text-emerald-800 text-sm">Vaše povpraševanje je bilo uspešno poslano.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 text-sm">Prišlo je do napake. Pokličite nas na 069 633 480.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1.5">Ime *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="Vaše ime" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1.5">E-pošta *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="vas@email.si" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-1.5">Telefon</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="069 123 456" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-steel-700 mb-1.5">Storitev</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none">
                        <option value="">Izberite storitev</option>
                        <option value="Kontejnerji - nakup">Kontejnerji - nakup</option>
                        <option value="Kontejnerji - najem">Kontejnerji - najem</option>
                        <option value="Skladiščne rešitve">Skladiščne rešitve</option>
                        <option value="Priprava terena">Priprava terena</option>
                        <option value="Splošno svetovanje">Splošno svetovanje</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1.5">Sporočilo *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
                      placeholder="Povejte nam o vaših potrebah..." />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Pošiljam...' : 'Pošlji sporočilo'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50">
        <div ref={faqSection.ref} className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className={`text-center mb-10 transition-all duration-700 ${faqSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-steel-900 mb-3">Pogosta vprašanja</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-steel-100 overflow-hidden hover:border-steel-200 transition-all duration-500 ${faqSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: faqSection.isVisible ? `${i * 80}ms` : '0ms' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-steel-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-steel-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="px-5 text-sm text-steel-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
