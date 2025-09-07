
import React from "react";

const Home = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Kalon Medica</h1>
        <p className="text-lg italic text-gray-600">
          Cabinet médical dédié aux soins médico-esthétiques
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Le cabinet</h2>
        <p>
          Le cabinet médical Kalon Medica a été fondé en 2025 par le Dr Pierre-Le Seac’h, médecin diplômé, formé à de nombreux soins médico-esthétiques selon les standards scientifiques et déontologiques.
        </p>
        <p className="text-sm text-red-600 font-medium">
          ⚠️ À ce jour, la médecine esthétique n’est pas reconnue comme une spécialité médicale en France. Il n'existe donc pas officiellement de « médecins esthétiques », mais des médecins formés aux soins médico-esthétiques.
        </p>
        <p>
          Pourtant, les avancées en physiologie du vieillissement permettent aujourd’hui de proposer des soins médicaux visant à corriger certains signes visibles du temps — sans recourir à la chirurgie. Cette approche répond à une demande croissante pour des interventions moins invasives, mais qui nécessitent une expertise rigoureuse et multidisciplinaire.
        </p>
        <p>
          Le Dr Pierre-Le Seac’h a acquis cette expertise par un parcours de formation exigeant, combinant diplômes universitaires, ateliers pratiques, masterclass et congrès spécialisés.
        </p>
        <p>
          Chez Kalon Medica, la prise en charge est globale : elle tient compte non seulement de l’état cutané ou des volumes du visage, mais aussi des facteurs de santé qui influencent le vieillissement, tels que :
        </p>
        <ul className="list-disc list-inside">
          <li>Le sommeil</li>
          <li>La gestion du stress</li>
          <li>L’exposition aux UV</li>
          <li>L’alimentation</li>
          <li>Les mauvaises habitudes de vie</li>
        </ul>
        <p className="text-sm text-red-600 font-medium">
          ⚠️ Le cabinet n’a pas pour but de « rendre 20 ans », mais de préserver, restaurer ou sublimer une beauté naturelle, avec tact et équilibre.
        </p>
        <p>
          Les soins sont réalisés dans des conditions d’hygiène rigoureuse. Une attention particulière est portée à la sécurisation des procédures, notamment grâce à l’utilisation systématique de l’échographie faciale pour les injections, afin de réduire au maximum les risques, même rares.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Soins médico-esthétiques proposés au cabinet</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Injections d’acide hyaluronique</li>
          <li>Fils tenseurs résorbables</li>
          <li>Rhinoplastie médicale</li>
          <li>Hydroxyapatite de calcium (Radiesse®)</li>
          <li>Mésothérapie + LED</li>
          <li>Peelings superficiels et moyens</li>
          <li>Microneedling</li>
          <li>Radiofréquence fractionnée par micro-aiguilles (instrument : Morpheus 8®)</li>
          <li>Barophorèse (baroporation) – instrument : JetPeel®</li>
          <li>Lumière pulsée intense</li>
        </ul>
        <p>
          Tous les actes sont précédés d’une consultation médicale d’évaluation. Ils sont réalisés dans le respect des règles d’hygiène et de sécurité, avec recours à l’échographie faciale pour les injections.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Parcours patient</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Consultation initiale pour évaluer la demande et poser une indication.</li>
          <li>Délai de réflexion avant tout acte esthétique.</li>
          <li>Réalisation du traitement dans des conditions optimales de sécurité.</li>
          <li>Suivi post-acte systématique proposé.</li>
        </ol>
        <p>
          Ce parcours s’inscrit dans le respect de la déontologie médicale.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Honoraires</h2>
        <p className="text-sm text-red-600 font-medium">
          ⚠️ Les actes réalisés au cabinet Kalon Medica sont à visée esthétique et ne sont pas remboursés par l’Assurance Maladie.
        </p>
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Actes</th>
              <th className="border p-2">Prix indicatifs TTC</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Consultation d’évaluation</td><td className="border p-2">60 €</td></tr>
            <tr><td className="border p-2">Injections d’acide hyaluronique</td><td className="border p-2">À partir de 300 €</td></tr>
            <tr><td className="border p-2">Fils tenseurs</td><td className="border p-2">À partir de 350 €</td></tr>
            <tr><td className="border p-2">Rhinoplastie médicale</td><td className="border p-2">À partir de 500 €</td></tr>
            <tr><td className="border p-2">Hydroxyapatite de calcium (RADIESSE®)</td><td className="border p-2">À partir de 300 €</td></tr>
            <tr><td className="border p-2">Mésothérapie + LED</td><td className="border p-2">À partir de 180 €</td></tr>
            <tr><td className="border p-2">Peeling superficiel + LED</td><td className="border p-2">À partir de 180 €</td></tr>
            <tr><td className="border p-2">Peeling moyen</td><td className="border p-2">À partir de 250 €</td></tr>
            <tr><td className="border p-2">Microneedling</td><td className="border p-2">À partir de 180 €</td></tr>
            <tr><td className="border p-2">Radiofréquence fractionnée (Morpheus 8®)</td><td className="border p-2">À partir de 300 €</td></tr>
            <tr><td className="border p-2">Barophorèse (JetPeel®)</td><td className="border p-2">À partir de 150 €</td></tr>
            <tr><td className="border p-2">Lumière Pulsée Intense</td><td className="border p-2">À partir de 100 €</td></tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600 italic">
          ⚠️ Une consultation préalable est systématique afin d’établir un plan de traitement personnalisé, un devis, et d’informer précisément le patient sur les indications, les résultats attendus et les éventuels risques associés. Celle-ci est obligatoire et sera facturée conformément au Code de Déontologie Médicale (la gratuité est considérée comme un acte commercial, interdit dans l’exercice de la médecine).
        </p>
      </section>
    </div>
  );
};

export default Home;
