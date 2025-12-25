import Link from 'next/link';
import { services } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';

const footerNavigation = {
  services: services.slice(0, 6).map(s => ({ name: s.name, href: `/services/${s.slug}` })),
  locations: locations.slice(0, 5).map(l => ({ name: l.name, href: `/services/marquage-parking-entreprise/${l.slug}` })),
  company: [
    { name: 'A propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Mentions legales', href: '/mentions-legales' },
    { name: 'Politique de confidentialite', href: '/politique-confidentialite' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary-950 border-t border-secondary-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-secondary-900 font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Entreprise</span>
                <span className="text-primary-500 font-bold text-lg ml-1">Marquage</span>
              </div>
            </div>
            <p className="text-secondary-400 text-sm max-w-xs">
              Specialiste du marquage au sol et de la signalisation en Ile-de-France.
              Parking, entrepot, industriel, PMR.
            </p>
            <div className="flex items-center gap-4 text-secondary-400">
              <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-sm">01 23 45 67 89</span>
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Services</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-secondary-400 hover:text-primary-500 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Zones d&apos;intervention</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.locations.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-secondary-400 hover:text-primary-500 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Entreprise</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-secondary-400 hover:text-primary-500 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-secondary-400 hover:text-primary-500 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-secondary-800 pt-8">
          <p className="text-xs text-secondary-500 text-center">
            &copy; {new Date().getFullYear()} Entreprise Marquage au Sol. Tous droits reserves. | Intervention en Ile-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
