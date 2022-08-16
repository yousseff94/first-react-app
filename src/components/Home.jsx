import React from "react";
import Card from "./Card";
import "../styles/home.css";
export default function Home() {


  return (

    <div className="home-container">

      <p id="couleur">Devenir développeur web et réaliser ses projets professionnels</p>
      <h2>
        Des formations diplômantes faites par des experts plus que passionnés
        pour vous mener au succès professionnel.
      </h2>
      <div className="article">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      {/* <div className="article">
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card2-hover.svg"
            alt=""
          />
          <h3>1er bootcamp en France</h3>
          <p>4500 alumni formés depuis 2012</p>
        </article>
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card8-hover.svg"
            alt=""
          />
          <h3>Enseignées par des professionnels</h3>
          <p>qui partagent plus qu'une passion !</p>
        </article>
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg"
            alt=""
          />
          <h3>Certifiées et reconnues</h3>
          <p>par l'état, le secteur et les entreprises</p>
        </article>
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg"
            alt=""
          />
          <h3>Testez nos cours gratuitement</h3>
          <p>depuis chez vous et dès maintenant !</p>
        </article>
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card5-hover.svg"
            alt=""
          />
          <h3>Osez la reconversion professionnelle</h3>
          <p>car l'ambition est le seul pré-requis</p>
        </article>
        <article>
          <img
            src="https://3wa.fr/wp-content/uploads/2020/03/card9-hover.svg"
            alt=""
          />
          <h3>Spécialisez vous davantage</h3>
          <p>avec des programmes pour tous niveaux</p>
        </article>
      </div> */}
    </div>
  );
}
