import React from "react";

const Honoraires = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Honoraires</h1>
      <table className="w-full mt-4 text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Actes</th>
            <th className="border p-2">Prix indicatifs TTC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Hydroxyapatite de calcium (RADIESSE®)</td><td className="border p-2">À partir de 350 €</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Honoraires;