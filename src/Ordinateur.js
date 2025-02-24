import React from "react";

const Ordinateur = () => {
  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: "500px" }}>
      <img
          src={`${process.env.PUBLIC_URL}/mon-ordinateur.jpg`}
          className="card-img-top"
          alt="Ordinateur Gamer"
        />
        <div className="card-body text-center">
          <h2 className="card-title">Ordinateur Gamer - Ultra Performance</h2>
          <p className="card-text">
          ProcesseurIntel Core i5, Stockage principal256 Go SSD, Système d'exploitationWindows 10, Processeur graphiqueIntel HD Graphics
          </p>
          <h3 className="text-danger">Prix : 2500€</h3>
          <button className="btn btn-primary mt-3">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Ordinateur;
