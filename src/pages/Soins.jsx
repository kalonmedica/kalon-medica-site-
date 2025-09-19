import React from "react";

const Soins = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Soins médico-esthétiques proposés au cabinet</h1>
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
    </div>
  );
};

export default Soins;