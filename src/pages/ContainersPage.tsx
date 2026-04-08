import React from 'react';
import { Container, Truck, Shield, Wrench, Star } from 'lucide-react';
import antracit20 from '../Photos/20antracit.jpg';
import antracit40 from '../Photos/40antracit.jpg';
import rabljen20 from '../Photos/20rabljen.jpg';
import rabljen40 from '../Photos/40rabljeni.jpg';
import moder20 from '../Photos/20moder.avif';
import moder40 from '../Photos/40moder.jpg';
import pisarniski3 from '../Photos/pisarniski3mantracit.jpg'
import pisarniski4 from '../Photos/pisarniski6m.jpg'
import pisarniski6 from '../Photos/pisarniski6mbeli.jpg'


interface ContainersPageProps {
    onPageChange?: (page: string) => void;
}

const ContainersPage: React.FC<ContainersPageProps> = ({ onPageChange }) => {
    const containerTypes = [
        {
            name: '20\' Nov Kontejner',
            dimensions: '6,06 m × 2,44 m × 2,59 m',
            condition: 'First Trip',
            availability: 'Na zalogi',
            floorArea: '14,8 m²',
            volume: '33,2 m³',
            price: '2.400 €',
            color: 'Modra, Antracit, Bež, Bela, Siva',
            imagePath: antracit20,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: '40\' High Cube Kontejner',
            dimensions: '12,19 m × 2,44 m × 2,89 m',
            condition: 'First Trip',
            availability: 'V prihodu',
            floorArea: '29,7 m²',
            volume: '76,3 m³',
            price: '3.790 €',
            color: 'Antracit, Modra',
            imagePath: antracit40,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: '20\' Rabljen Kontejner',
            dimensions: '6,06 m × 2,44 m × 2,89 m',
            condition: 'Second Trip',
            availability: 'Na zalogi',
            floorArea: '14,8 m²',
            volume: '37,4 m³',
            price: '2.290 €',
            color: 'Bela',
            imagePath: rabljen20,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: '40\' Rabljen Kontejner',
            dimensions: '12,19 m × 2,44 m × 2,89 m',
            condition: 'Rabljeno',
            availability: 'V prihodu',
            floorArea: '29,7 m²',
            volume: '76,3 m³',
            price: '2.990 €',
            color: '/',
            imagePath: rabljen40,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: '20\' Nov Kontejner',
            dimensions: '6,06 m × 2,44 m × 2,59 m',
            condition: 'Novo',
            availability: 'V prihodu',
            floorArea: '14,8 m²',
            volume: '33,2 m³',
            price: '2.*** €',
            color: 'Modra, Antracit, Bež, Bela, Črna',
            imagePath: moder20,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: '40\' Nov Kontejner',
            dimensions: '12,19 m × 2,44 m × 2,59 m',
            condition: 'Novo',
            availability: 'V prihodu',
            floorArea: '29,7 m²',
            volume: '67,7 m³',
            price: '3.*** €',
            color: 'Modra, Antracit, Bež, Bela, Črna',
            imagePath: moder40,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: 'Izoliran pisarniški kontejner',
            dimensions: '3 m × 2,4 m × 2,6 m',
            condition: 'Novo',
            availability: 'Na zalogi',
            floorArea: '6,66 m²',
            volume: '15,9 m³',
            price: '3.200 €',
            color: 'Bela, Antracit',
            imagePath: pisarniski3,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: 'Izoliran pisarniški kontejner',
            dimensions: '4 m × 2,4 m × 2,6 m',
            condition: 'Novo',
            availability: 'Na zalogi',
            floorArea: '9,4 m²',
            volume: '22,5 m³',
            price: '3.500 €',
            color: 'Bela, Antracit',
            imagePath: pisarniski4,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
            name: 'Izoliran pisarniški kontejner',
            dimensions: '5 m × 2,4 m × 2,6 m',
            condition: 'Novo',
            availability: 'Na zalogi',
            floorArea: '14,1 m²',
            volume: '33,7 m³',
            price: '3.800 €',
            color: 'Bela, Antracit',
            imagePath: pisarniski6,
            fallbackImage: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
    ];

    const modifications = [
        'Rolo vrata',
        'Okna in prezračevanje',
        'Električna napeljava',
        'Izolacijski paketi',
        'Notranje predelne stene',
        'Barve po meri'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 p-4 rounded-full w-fit mx-auto mb-6">
                            <Container className="h-12 w-12 text-blue-300" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Premium kontejnerji
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Trpežni, varni in vsestranski kontejnerji za vse vaše potrebe.
                            Certificirana kakovost in hitra dostava po Sloveniji.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facebook Inventory Notice */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Aktualna zaloga kontejnerjev
                        </h3>
                        <p className="text-lg text-blue-100 mb-6">
                            Za najnovejše informacije o razpoložljivosti in aktualnih cenah nas sledite na Facebooku
                        </p>
                        <a
                            href="https://www.facebook.com/profile.php?id=61577763940228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Obiščite nas na Facebooku
                        </a>
                    </div>
                </div>
            </section>

            {/* Container Types */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Premium izbor kontejnerjev
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Skrbno izbrani kontejnerji za vsako potrebo - od standardnih do premium rešitev
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {containerTypes.map((container, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                            >
                                <div className="relative h-72 bg-gray-100 overflow-hidden">
                                    <img
                                        src={container.imagePath}
                                        alt={container.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = container.fallbackImage;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        {container.availability}
                                    </div>

                                    <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        {container.condition}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {container.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 font-medium">{container.dimensions}</p>

                                    <div className="mb-4 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                                        <div className="text-sm text-gray-700 font-semibold">Barva:</div>
                                        <div className="text-lg font-bold text-blue-900">{container.color}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                                            <div className="text-xs text-gray-600 mb-1">Površina</div>
                                            <div className="font-bold text-blue-900">{container.floorArea}</div>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                                            <div className="text-xs text-gray-600 mb-1">Prostornina</div>
                                            <div className="font-bold text-blue-900">{container.volume}</div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Cena</div>
                                            <div className="text-3xl font-bold text-blue-600">{container.price}</div>
                                        </div>
                                        <button
                                            onClick={() => onPageChange?.('contact')}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            Povprašaj
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-2xl">
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold text-blue-600">Cene NE vključujejo DDV. </span>
                                Dostava in postavitev se zaračunata posebej glede na lokacijo.
                            </p>
                            <p className="text-sm text-gray-500">
                                Za podrobnosti o dostavi in posebnih prilagoditvah nas kontaktirajte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                Zakaj izbrati naše kontejnerje?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Vrhunska kakovost</h3>
                                        <p className="text-blue-100">Cor-ten jeklo, odporno proti rji in koroziji za dolgotrajno uporabo.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                                        <Truck className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Hitra dostava</h3>
                                        <p className="text-blue-100">Ekspresna dostava in strokovna postavitev po celotni Sloveniji.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                                        <Wrench className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Prilagoditve</h3>
                                        <p className="text-blue-100">Možnost prilagoditve kontejnerja po vaših željah in potrebah.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Možne prilagoditve</h3>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {modifications.map((mod, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Star className="h-5 w-5 text-yellow-500" />
                                        <span className="text-gray-700">{mod}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => onPageChange?.('contact')}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Zahtevajte ponudbo po meri
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pripravite se na nakup kontejnerja?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8">
                        Kontaktirajte nas za brezplačno svetovanje in konkurenčno ponudbo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onPageChange?.('contact')}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Pridobite ponudbo
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                            Pokličite 069 633 480
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContainersPage;