import React from "react";

const Rdv = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Prise de rendez-vous</h1>
      <p>
        Cette page sera amenée à être transformée avec l'intégration d'un module de prise de rendez-vous en ligne via NextMotion®.
      </p>
      <p>
        En attendant, vous pouvez prendre rendez-vous en contactant directement le cabinet au :
      </p>
      <p className="text-xl font-semibold text-blue-700">
        06 87 93 45 01
      </p>
      <p className="text-sm italic text-gray-700">
        Si vous n’obtenez pas de réponse, merci de laisser un message vocal ou, de préférence, un SMS.
      </p>
    </div>
  );
};

export default Rdv;