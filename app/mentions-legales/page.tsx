import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Legales',
  description: 'Mentions legales du site entreprise-marquage-au-sol.fr',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-950">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-8">
          Mentions Legales
        </h1>

        <div className="prose prose-invert prose-primary max-w-none">
          <div className="space-y-8 text-secondary-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Informations legales</h2>
              <p>
                Le site entreprise-marquage-au-sol.fr est edite par :<br />
                <strong className="text-white">Entreprise Marquage au Sol</strong><br />
                Siege social : Ile-de-France, France<br />
                Telephone : 01 23 45 67 89<br />
                Email : contact@entreprise-marquage-au-sol.fr
              </p>
              <p className="mt-4">
                Directeur de la publication : [Nom du responsable]<br />
                Numero SIRET : [A completer]<br />
                Numero TVA intracommunautaire : [A completer]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Hebergement</h2>
              <p>
                Ce site est heberge par :<br />
                [Nom de l&apos;hebergeur]<br />
                [Adresse de l&apos;hebergeur]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Propriete intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icones, etc.)
                est la propriete exclusive de Entreprise Marquage au Sol, a l&apos;exception des
                marques, logos ou contenus appartenant a d&apos;autres societes partenaires ou auteurs.
              </p>
              <p className="mt-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou
                publication de ces differents elements est strictement interdite sans l&apos;accord
                expres par ecrit de Entreprise Marquage au Sol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Responsabilite</h2>
              <p>
                Entreprise Marquage au Sol s&apos;efforce d&apos;assurer au mieux de ses possibilites
                l&apos;exactitude et la mise a jour des informations diffusees sur ce site. Toutefois,
                Entreprise Marquage au Sol ne peut garantir l&apos;exactitude, la precision ou
                l&apos;exhaustivite des informations mises a disposition sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. Entreprise
                Marquage au Sol n&apos;exerce aucun controle sur ces sites et decline toute
                responsabilite quant a leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Droit applicable</h2>
              <p>
                Les presentes mentions legales sont regies par le droit francais. En cas de
                litige, les tribunaux francais seront seuls competents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Protection des donnees personnelles</h2>
              <p>
                Conformement au Reglement General sur la Protection des Donnees (RGPD), vous
                disposez d&apos;un droit d&apos;acces, de rectification, de suppression et d&apos;opposition
                aux donnees personnelles vous concernant.
              </p>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter :<br />
                - Par email : contact@entreprise-marquage-au-sol.fr<br />
                - Par courrier : [Adresse postale]
              </p>
              <p className="mt-4">
                Les donnees collectees via le formulaire de contact sont uniquement utilisees
                pour repondre a vos demandes et ne sont jamais transmises a des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies</h2>
              <p>
                Ce site peut utiliser des cookies a des fins de statistiques et d&apos;amelioration
                de l&apos;experience utilisateur. Vous pouvez configurer votre navigateur pour
                refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Credits</h2>
              <p>
                Conception et realisation : Entreprise Marquage au Sol<br />
                Photographies : [Credits photos]
              </p>
            </section>
          </div>
        </div>

        <p className="mt-12 text-sm text-secondary-500">
          Derniere mise a jour : Decembre 2025
        </p>
      </div>
    </section>
  );
}
