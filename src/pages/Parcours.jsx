import React from "react";

const Parcours = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Parcours patient</h1>
      <ol className="list-decimal list-inside ml-4 space-y-1">
        <li>Consultation initiale pour évaluer la demande et poser une indication</li>
        <li>Délai de réflexion avant tout acte esthétique</li>
        <li>Réalisation du traitement dans des conditions optimales de sécurité</li>
        <li>Suivi post-acte systématique proposé</li>
      </ol>
      <p className="mt-4">Ce parcours s’inscrit dans le respect de la déontologie médicale.</p>
    </div>
  );
};

export default Parcours;