import React from "react"; 
import { useContext } from "react"; 
import { KerdesekContext } from "../Context/KerdesekContext"; 


import "./Kerdesek.css";

function Kerdesek() {
  const { kerdesekLista, loading } = useContext(KerdesekContext);

  if (loading) {
    return <div>Betöltés...</div>;
  }

  return (
    <div>
      <h2>Kérdések listája</h2>
      {kerdesekLista.length === 0 ? (
        <p>Nincsenek kérdések.</p>
      ) : (
        <ul>
          {kerdesekLista.map((kerdes) => (
            <li key={kerdes.id}>
              <strong>{kerdes.cim}</strong>: {kerdes.leiras}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Kerdesek;
