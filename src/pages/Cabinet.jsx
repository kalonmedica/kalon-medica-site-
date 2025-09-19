import React from "react";

const Cabinet = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Le cabinet Kalon Medica</h1>
      <p>
        Le cabinet médical Kalon Medica a été fondé en 2025 par le Dr Pierre-Le Seac’h, médecin diplômé, formé à de nombreux soins médico-esthétiques selon les standards scientifiques et déontologiques.
      </p>
      <p>
        Le Dr Pierre-Le Seac’h a acquis cette expertise par un parcours de formation exigeant, combinant diplômes universitaires, ateliers pratiques, masterclass et congrès spécialisés.
      </p>
      <p>
        Chez Kalon Medica, la prise en charge est globale : elle tient compte non seulement de l’état cutané ou des volumes du visage, mais aussi des facteurs de santé qui influencent le vieillissement, tels que :
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Le sommeil</li>
        <li>La gestion du stress</li>
        <li>L’exposition aux UV</li>
        <li>L’alimentation</li>
        <li>Les mauvaises habitudes de vie</li>
      </ul>
      <p className="text-yellow-800 font-semibold">
        ⚠️ Le cabinet n’a pas pour but de « rendre 20 ans », mais de préserver, restaurer ou sublimer une beauté naturelle, avec tact et équilibre.
      </p>
      <p>
        Les soins sont réalisés dans des conditions d’hygiène rigoureuse.
        Une attention particulière est portée à la sécurisation des procédures, notamment grâce à l’utilisation systématique de l’échographie faciale pour les injections, afin de réduire au maximum les risques, même rares.
      </p>
    <p className="text-sm text-red-700 italic mt-8">En cas d'urgence et d'indisponibilité du cabinet, contacter le 15.</p>
    </div>
  );
};

export default Cabinet;