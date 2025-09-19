import React from "react";

const MentionsLegales = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Mentions légales</h1>

      <p>
        Les soins médico-esthétiques pratiqués au sein du cabinet Kalon Medica s’inscrivent dans le cadre d’une
        <strong> activité exclusivement médicale, et non commerciale</strong>. Cette nuance est importante.
      </p>
      <p>
        À ce titre, cette activité est régie par les dispositions du <strong>Code de la santé publique</strong>,
        notamment le <strong>Code de déontologie médicale</strong> (articles R.4127-1 et suivants), et non par le Code du commerce.
      </p>
      <p>
        Toute prise en charge est précédée d’un examen clinique médical, d’une information éclairée, d’un devis personnalisé
        et du respect d’un délai de réflexion, conformément à la réglementation applicable aux actes à visée esthétique.
      </p>

      <p className="text-red-600 font-medium">
        ⚠️ Les actes réalisés au cabinet Kalon Medica sont à visée esthétique et ne sont pas remboursés par l’Assurance Maladie.
      </p>

      <p className="text-red-600 font-medium">
        ⚠️ Une consultation médicale préalable est systématiquement proposée avant tout acte à visée esthétique (à l’exception des soins de surface comme le JetPeel®).
        Cette consultation permet d'établir un plan de traitement personnalisé, de remettre un devis écrit et de délivrer une information claire, loyale et appropriée
        sur les indications, les résultats attendus et les éventuels risques (notamment : lumière pulsée intense, radiofréquence, fils tenseurs, injections…).
        Elle est en principe facturée, conformément au Code de déontologie médicale.
        Elle peut être exceptionnellement gratuite, à la discrétion du médecin, si elle n’est liée à aucune démarche promotionnelle ou incitative,
        et qu’elle répond à une exigence de qualité ou d’accessibilité des soins.
        Un délai de réflexion est recommandé avant toute intervention, généralement de 3 jours, mais adaptable à la nature du geste prévu.
      </p>

      <h2 className="text-xl font-bold mt-8">Informations légales</h2>

      <p><strong>Responsable de la publication :</strong><br />
      Dr PIERRE-LE SEAC'H</p>

      <p><strong>Raison sociale :</strong><br />
      Kalon Medica – société en cours d’immatriculation</p>

      <p><strong>Hébergement :</strong><br />
      Le site est hébergé par <em>Vercel Inc.</em><br />
      440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
      <a href="https://vercel.com" className="text-blue-700 underline">www.vercel.com</a></p>

      <p><strong>Nom de domaine :</strong><br />
      kalonmedica.fr – enregistré auprès de Gandi SAS</p>

      <p><strong>Contact :</strong><br />
      Email : <a href="mailto:kalonmedica@gmail.com" className="text-blue-700 underline">kalonmedica@gmail.com</a><br />
      Téléphone : 06 87 93 45 01 <br />
      Si vous n’obtenez pas de réponse immédiate, merci de laisser un message vocal ou, de préférence, d’envoyer un SMS.
      </p>

      <p><strong>Données personnelles :</strong><br />
      Ce site ne collecte aucune donnée personnelle ni cookie. Aucune information à caractère médical n’est stockée ou exploitée en ligne.</p>

      <p className="text-sm text-red-700 italic">
        En cas d'urgence et d'indisponibilité du cabinet, contacter le 15.
      </p>
    </div>
  );
};

export default MentionsLegales;