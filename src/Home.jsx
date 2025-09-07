
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
    </div>
  );
};

export default Home;
