import { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Entreprise Marquage au Sol',
  description: 'Découvrez notre politique de confidentialité : collecte de données, cookies, droits RGPD. Entreprise Marquage au Sol protège vos données personnelles.',
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
    { name: 'Politique de confidentialité', url: '/politique-confidentialite' },
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
              <li className="text-route-600">Politique de confidentialité</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-12 lg:py-16 bg-asphalt-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-asphalt-900 sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-lg text-asphalt-600">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-asphalt-900 prose-p:text-asphalt-600 prose-li:text-asphalt-600 prose-strong:text-asphalt-900">

            <h2>1. Introduction</h2>
            <p>
              Entreprise Marquage au Sol, spécialiste du marquage au sol et de la signalisation horizontale
              en Île-de-France, s&apos;engage à protéger la vie privée des utilisateurs de son site internet
              entreprise-marquage-au-sol.fr.
            </p>
            <p>
              Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons
              vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la loi Informatique et Libertés.
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul>
              <li><strong>Entreprise :</strong> Entreprise Marquage au Sol</li>
              <li><strong>Adresse :</strong> Île-de-France, France</li>
              <li><strong>Email :</strong> contact@entreprise-marquage-au-sol.fr</li>
              <li><strong>Téléphone :</strong> 01 23 45 67 89</li>
            </ul>

            <h2>3. Données collectées</h2>
            <p>
              Nous collectons les données personnelles suivantes :
            </p>

            <h3>3.1 Données fournies volontairement</h3>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l&apos;entreprise</li>
              <li>Adresse du chantier</li>
              <li>Description du projet de marquage au sol</li>
            </ul>

            <h3>3.2 Données collectées automatiquement</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Pages visitées et temps de visite</li>
              <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
              <li>Données de cookies (voir section Cookies)</li>
            </ul>

            <h2>4. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul>
              <li><strong>Réponse à vos demandes :</strong> traitement des demandes de devis pour nos services de marquage au sol</li>
              <li><strong>Communication :</strong> envoi d&apos;informations relatives à votre projet</li>
              <li><strong>Amélioration du site :</strong> analyse statistique pour améliorer notre site et nos services</li>
              <li><strong>Obligations légales :</strong> respect des obligations comptables et fiscales</li>
            </ul>

            <h2>5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul>
              <li><strong>Votre consentement :</strong> pour l&apos;envoi de communications commerciales</li>
              <li><strong>L&apos;exécution d&apos;un contrat :</strong> pour répondre à vos demandes de devis</li>
              <li><strong>L&apos;intérêt légitime :</strong> pour l&apos;amélioration de nos services</li>
              <li><strong>Les obligations légales :</strong> pour la conservation des données comptables</li>
            </ul>

            <h2>6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant :
            </p>
            <ul>
              <li><strong>Demandes de devis :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Notre site utilise des cookies pour :
            </p>

            <h3>7.1 Cookies essentiels</h3>
            <p>
              Nécessaires au fonctionnement du site, ils ne peuvent pas être désactivés.
            </p>

            <h3>7.2 Cookies analytiques</h3>
            <p>
              Nous utilisons des outils d&apos;analyse (type Google Analytics) pour comprendre
              comment les visiteurs utilisent notre site. Ces cookies collectent des informations
              de manière anonyme.
            </p>

            <h3>7.3 Gestion des cookies</h3>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti
              lorsqu&apos;un cookie est envoyé. Notez que certaines fonctionnalités du site
              pourraient ne pas fonctionner correctement sans cookies.
            </p>

            <h2>8. Partage des données</h2>
            <p>
              Vos données personnelles peuvent être partagées avec :
            </p>
            <ul>
              <li><strong>Nos sous-traitants :</strong> hébergeur web, service d&apos;emailing (sous contrat de confidentialité)</li>
              <li><strong>Autorités compétentes :</strong> en cas d&apos;obligation légale</li>
            </ul>
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>

            <h2>9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :
            </p>
            <ul>
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Mise à jour régulière de nos systèmes de sécurité</li>
            </ul>

            <h2>10. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>contact@entreprise-marquage-au-sol.fr</strong>
            </p>

            <h2>11. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire
              une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
            </p>
            <ul>
              <li><strong>Site web :</strong> www.cnil.fr</li>
              <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
            </ul>

            <h2>12. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications entrent en vigueur dès leur publication sur cette page.
              Nous vous encourageons à consulter régulièrement cette page.
            </p>

            <h2>13. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
              contactez-nous :
            </p>
            <ul>
              <li><strong>Email :</strong> contact@entreprise-marquage-au-sol.fr</li>
              <li><strong>Téléphone :</strong> 01 23 45 67 89</li>
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
                Mentions légales
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
