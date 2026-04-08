import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://skladiscko.si/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stopite v stik
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Naša ekipa je pripravljena vam pomagati. Kontaktirajte nas za brezplačno svetovanje
                in konkurenčno ponudbo za vaš projekt.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktni podatki</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefon</h3>
                      <p className="text-gray-600 font-medium">069 633 480</p>
                      <p className="text-sm text-gray-500">Na voljo 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">E-pošta</h3>
                      <p className="text-gray-600 font-medium">info@skladiscko.si</p>
                      <p className="text-sm text-gray-500">Odgovorimo v 24 urah</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Naslov</h3>
                      <p className="text-gray-600 font-medium">Puhova ulica 12a<br />2250 Ptuj</p>
                      <p className="text-sm text-gray-500">Obiščite nas po dogovoru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Delovni čas</h3>
                      <div className="text-gray-600">
                        <p className="font-semibold">24/7 na voljo</p>
                        <p className="text-sm text-gray-500">Vedno dosegljivi</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Območja storitev</h3>
                  <p className="text-blue-100 mb-6">Naše storitve nudimo po celotni Sloveniji</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-2"></div>
                      Ptuj in okolica
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-2"></div>
                      Maribor
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-2"></div>
                      Ljubljana
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-2"></div>
                      Celje
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Pošljite nam sporočilo</h2>

                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">Vaše povpraševanje je bilo uspešno poslano.</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">Prišlo je do napake. Prosimo pokličite nas na 069 633 480 ali pošljite e-pošto na info@skladiscko.si</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Polno ime *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Vaše polno ime"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-poštni naslov *
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="vas@email.si"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonska številka
                      </label>
                      <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="069 123 456"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Zanimanje za storitev
                      </label>
                      <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Sporočilo *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Povejte nam o vaših potrebah, lokaciji projekta in časovnem okviru..."
                    ></textarea>
                  </div>

                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>{isSubmitting ? 'Pošiljam...' : 'Pošlji sporočilo'}</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Odgovorili vam bomo v najkrajšem možnem času. Za nujne zadeve nas prosimo pokličite neposredno.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pogosto zastavljena vprašanja
              </h2>
              <p className="text-xl text-gray-600">
                Hitri odgovori na najpogostejša vprašanja
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kako hitro lahko dostavite kontejner?</h3>
                <p className="text-gray-600">Večino kontejnerjev lahko dostavimo v 2-3 delovnih dneh, odvisno od vaše lokacije in razpoložljivosti.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ali ponujate možnosti financiranja?</h3>
                <p className="text-gray-600">Da, ponujamo prilagodljive možnosti plačila za nakup kontejnerjev in izvedbo skladiščnih projektov.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Koliko časa traja izvedba skladiščnega projekta?</h3>
                <p className="text-gray-600">Odvisno od velikosti projekta, vendar je večina projektov dokončanih v 2-4 tednih od začetka del.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ali nudite garancijo na izvedena dela?</h3>
                <p className="text-gray-600">Da, na vsa naša dela nudimo 2-letno garancijo, na kontejnerje pa standardno garancijo proizvajalca.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ContactPage;