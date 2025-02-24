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
        <div className="card-body ">
          <h2 className="card-title text-center">LENOVO THINKPAD</h2>
          <p className="card-text">
            <ul>
                <li>Processeur Intel(R) Core(TM) i5-8350U CPU</li>
                <li>Stockage principal 256 Go SSD</li>
                <li>Mémoire RAM 8,00 Go</li>
                <li>Système d'exploitation Windows 10</li>
            </ul>
          </p>
          <h3 className="text-danger">Prix : 2500 TND</h3>
          <button className="btn btn-primary mt-3">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Ordinateur;
