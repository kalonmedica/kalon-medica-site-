
import React from "react";

const Home = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Kalon Medica</h1>
        <p className="text-lg italic text-gray-600">
          Cabinet médical dédié à la médecine esthétique non chirurgicale
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Le cabinet</h2>
        <p>
          Le cabinet médical Kalon Medica a été fondé en 2025 par le Dr Pierre-Le Seac’h, médecin diplômé formé à la médecine esthétique. À ce jour, la médecine esthétique n’est pas une spécialité médicale reconnue en France. Pourtant, les avancées scientifiques permettent de proposer des soins non chirurgicaux pour accompagner le vieillissement naturel.
        </p>
        <p>
          Le Dr Pierre-Le Seac’h a suivi de nombreuses formations universitaires et spécialisées dans ce domaine, mobilisant des compétences issues de plusieurs disciplines médicales. Sa pratique est fondée sur l’écoute, l’analyse rigoureuse, la maîtrise technique et la sécurité.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Médecine esthétique</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Injections d’acide hyaluronique</li>
          <li>Fils tenseurs résorbables</li>
          <li>Rhinoplastie médicale</li>
          <li>Hydroxyapatite de calcium (Radiesse®)</li>
          <li>Mésothérapie + LED</li>
          <li>Peelings superficiels et moyens</li>
          <li>Microneedling</li>
          <li>Radiofréquence bipolaire fractionnée</li>
          <li>Lumière pulsée intense</li>
        </ul>
        <p>
          Tous les actes sont précédés d’une consultation médicale d’évaluation. Ils sont réalisés dans le respect des règles d’hygiène et de sécurité, avec recours à l’échographie faciale pour les injections.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Parcours patient</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Consultation initiale (60 €) pour évaluer la demande et poser une indication.</li>
          <li>Délai de réflexion avant tout acte esthétique.</li>
          <li>Réalisation du traitement dans des conditions optimales de sécurité.</li>
          <li>Suivi post-acte systématique proposé.</li>
        </ol>
        <p>
          Aucune promesse de résultat n’est formulée. Le respect de la déontologie médicale est une priorité.
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
            <tr><td className="border p-2">Radiofréquence</td><td className="border p-2">À partir de 300 €</td></tr>
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
