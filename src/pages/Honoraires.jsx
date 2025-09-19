import React from "react";

const Honoraires = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Honoraires</h1>
      <p className="text-sm text-red-600 font-medium">
        ⚠️ Les actes réalisés au cabinet Kalon Medica sont à visée esthétique et ne sont pas remboursés par l’Assurance Maladie.
      </p>
      <table className="w-full text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Actes</th>
            <th className="border p-2">Prix indicatifs TTC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Consultation d’évaluation</td><td className="border p-2">60 €</td></tr>
          <tr><td className="border p-2">Injections d’acide hyaluronique</td><td className="border p-2">À partir de 300 €</td></tr>
          <tr><td className="border p-2">Fils tenseurs</td><td className="border p-2">À partir de 350 €</td></tr>
          <tr><td className="border p-2">Rhinoplastie médicale</td><td className="border p-2">À partir de 500 €</td></tr>
          <tr><td className="border p-2">Hydroxyapatite de calcium (RADIESSE®)</td><td className="border p-2">À partir de 350 €</td></tr>
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
        ⚠️ Une consultation préalable est systématique afin d’établir un plan de traitement personnalisé, un devis, et d’informer précisément le patient sur les indications, les résultats attendus et les éventuels risques associés.
      </p>
    </div>
  );
};

export default Honoraires;