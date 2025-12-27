import { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Politique de Confidentialite | Entreprise Marquage au Sol',
  description: 'Decouvrez notre politique de confidentialite : collecte de donnees, cookies, droits RGPD. Entreprise Marquage au Sol protege vos donnees personnelles.',
  alternates: {
    canonical: '/politique-confidentialite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Politique de confidentialite', url: '/politique-confidentialite' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-asphalt-50 border-b border-asphalt-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <nav>
            <ol className="flex items-center gap-2 text-sm text-asphalt-500">
              <li>
                <Link href="/" className="hover:text-route-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li className="text-route-600">Politique de confidentialite</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-12 lg:py-16 bg-asphalt-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-asphalt-900 sm:text-4xl">
            Politique de confidentialite
          </h1>
          <p className="mt-4 text-lg text-asphalt-600">
            Derniere mise a jour : Decembre 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-asphalt-900 prose-p:text-asphalt-600 prose-li:text-asphalt-600 prose-strong:text-asphalt-900">

            <h2>1. Introduction</h2>
            <p>
              Entreprise Marquage au Sol, specialiste du marquage au sol et de la signalisation horizontale
              en Ile-de-France, s&apos;engage a proteger la vie privee des utilisateurs de son site internet
              entreprise-marquage-au-sol.fr.
            </p>
            <p>
              Cette politique de confidentialite decrit comment nous collectons, utilisons et protegeons
              vos donnees personnelles conformement au Reglement General sur la Protection des Donnees (RGPD)
              et a la loi Informatique et Libertes.
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des donnees personnelles est :
            </p>
            <ul>
              <li><strong>Entreprise :</strong> Entreprise Marquage au Sol</li>
              <li><strong>Adresse :</strong> Ile-de-France, France</li>
              <li><strong>Email :</strong> contact@entreprise-marquage-au-sol.fr</li>
              <li><strong>Telephone :</strong> 01 23 45 67 89</li>
            </ul>

            <h2>3. Donnees collectees</h2>
            <p>
              Nous collectons les donnees personnelles suivantes :
            </p>

            <h3>3.1 Donnees fournies volontairement</h3>
            <ul>
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone</li>
              <li>Nom de l&apos;entreprise</li>
              <li>Adresse du chantier</li>
              <li>Description du projet de marquage au sol</li>
            </ul>

            <h3>3.2 Donnees collectees automatiquement</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Pages visitees et temps de visite</li>
              <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
              <li>Donnees de cookies (voir section Cookies)</li>
            </ul>

            <h2>4. Finalites du traitement</h2>
            <p>
              Vos donnees personnelles sont traitees pour les finalites suivantes :
            </p>
            <ul>
              <li><strong>Reponse a vos demandes :</strong> traitement des demandes de devis pour nos services de marquage au sol</li>
              <li><strong>Communication :</strong> envoi d&apos;informations relatives a votre projet</li>
              <li><strong>Amelioration du site :</strong> analyse statistique pour ameliorer notre site et nos services</li>
              <li><strong>Obligations legales :</strong> respect des obligations comptables et fiscales</li>
            </ul>

            <h2>5. Base legale du traitement</h2>
            <p>
              Le traitement de vos donnees repose sur :
            </p>
            <ul>
              <li><strong>Votre consentement :</strong> pour l&apos;envoi de communications commerciales</li>
              <li><strong>L&apos;execution d&apos;un contrat :</strong> pour repondre a vos demandes de devis</li>
              <li><strong>L&apos;interet legitime :</strong> pour l&apos;amelioration de nos services</li>
              <li><strong>Les obligations legales :</strong> pour la conservation des donnees comptables</li>
            </ul>

            <h2>6. Duree de conservation</h2>
            <p>
              Vos donnees personnelles sont conservees pendant :
            </p>
            <ul>
              <li><strong>Demandes de devis :</strong> 3 ans a compter du dernier contact</li>
              <li><strong>Donnees clients :</strong> 5 ans apres la fin de la relation commerciale</li>
              <li><strong>Donnees de facturation :</strong> 10 ans (obligation legale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Notre site utilise des cookies pour :
            </p>

            <h3>7.1 Cookies essentiels</h3>
            <p>
              Necessaires au fonctionnement du site, ils ne peuvent pas etre desactives.
            </p>

            <h3>7.2 Cookies analytiques</h3>
            <p>
              Nous utilisons des outils d&apos;analyse (type Google Analytics) pour comprendre
              comment les visiteurs utilisent notre site. Ces cookies collectent des informations
              de maniere anonyme.
            </p>

            <h3>7.3 Gestion des cookies</h3>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies ou etre averti
              lorsqu&apos;un cookie est envoye. Notez que certaines fonctionnalites du site
              pourraient ne pas fonctionner correctement sans cookies.
            </p>

            <h2>8. Partage des donnees</h2>
            <p>
              Vos donnees personnelles peuvent etre partagees avec :
            </p>
            <ul>
              <li><strong>Nos sous-traitants :</strong> hebergeur web, service d&apos;emailing (sous contrat de confidentialite)</li>
              <li><strong>Autorites competentes :</strong> en cas d&apos;obligation legale</li>
            </ul>
            <p>
              Nous ne vendons jamais vos donnees personnelles a des tiers.
            </p>

            <h2>9. Securite des donnees</h2>
            <p>
              Nous mettons en oeuvre des mesures de securite appropriees pour proteger vos donnees :
            </p>
            <ul>
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Acces restreint aux donnees personnelles</li>
              <li>Sauvegardes regulieres et securisees</li>
              <li>Mise a jour reguliere de nos systemes de securite</li>
            </ul>

            <h2>10. Vos droits</h2>
            <p>
              Conformement au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;acces :</strong> obtenir une copie de vos donnees personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos donnees inexactes</li>
              <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees</li>
              <li><strong>Droit a la limitation :</strong> limiter le traitement de vos donnees</li>
              <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees</li>
              <li><strong>Droit de retirer votre consentement :</strong> a tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous a : <strong>contact@entreprise-marquage-au-sol.fr</strong>
            </p>

            <h2>11. Reclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectes, vous pouvez introduire
              une reclamation aupres de la CNIL (Commission Nationale de l&apos;Informatique et des Libertes) :
            </p>
            <ul>
              <li><strong>Site web :</strong> www.cnil.fr</li>
              <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
            </ul>

            <h2>12. Modifications</h2>
            <p>
              Nous nous reservons le droit de modifier cette politique de confidentialite a tout moment.
              Les modifications entrent en vigueur des leur publication sur cette page.
              Nous vous encourageons a consulter regulierement cette page.
            </p>

            <h2>13. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialite ou vos donnees personnelles,
              contactez-nous :
            </p>
            <ul>
              <li><strong>Email :</strong> contact@entreprise-marquage-au-sol.fr</li>
              <li><strong>Telephone :</strong> 01 23 45 67 89</li>
              <li><strong>Formulaire :</strong> <Link href="/contact" className="text-route-600 hover:underline">Page Contact</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-asphalt-200">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mentions-legales"
                className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Mentions legales
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
