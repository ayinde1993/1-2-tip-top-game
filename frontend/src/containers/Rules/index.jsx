import React from "react";
import Colors from "../../utils/constants/colors";

export default function Rules() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 90,
        paddingRight: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 150,
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 40, color: Colors.darkGreen }}>
          REGLES DU JEU
        </h1>
      </div>
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <h2 style={{ fontSize: 25, color: Colors.darkGreen }}>
          1. Condition de participation
        </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            &#x2022; Le jeu est ouvert à toute personne majeure résidant en
            France métropolitaine.
          </li>
          <li>
            &#x2022; Pour participer, il faut effectuer un achat minimum de 49€
            dans une boutique Thé Tip Top.
          </li>
          <li>
            &#x2022; Un ticket de caisse ou une facture donnant droit à un code
            unique (10 caractères : chiffres + lettres) est remis à chaque achat
            éligible.
          </li>
          <li>
            &#x2022; Chaque participant peut jouer autant de fois qu&apos;il
            possède de codes uniques.
          </li>
        </ul>
      </div>
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <h2 style={{ fontSize: 25, color: Colors.darkGreen }}>
          2. Modalités de participation
        </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>&#x2022; Le jeu est accessible en ligne sur le site dédié.</li>
          <li>
            &#x2022; Le participant doit s&apos;inscrire avec son adresse e-mail
            ou via un compte Google/Facebook.
          </li>
          <li>
            &#x2022; Il entre son code unique pour découvrir immédiatement son
            lot.
          </li>
          <li>
            &#x2022; 100% des participants gagnent un lot selon la répartition
            ci-dessous.
          </li>
        </ul>
      </div>
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <h2 style={{ fontSize: 25, color: Colors.darkGreen }}>
          3. Répartitions des gains
        </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>&#x2022; 60% des tickets : 1 infuseur à thé.</li>
          <li>
            &#x2022; 20% des tickets : 1 boîte de 100g de thé détox ou infusion.
          </li>
          <li>&#x2022; 10% des tickets : 1 boîte de 100g de thé signature.</li>
          <li>&#x2022; 6% des tickets : 1 coffret découverte (valeur 39€).</li>
          <li>&#x2022; 4% des tickets : 1 coffret découverte (valeur 69€).</li>
          <li>
            &#x2022; Et ce n'est pas tout ! Un tirage au sort final sera organisé
            pour déterminer le gagnant d&apos;un an de thé d&apos;une valeur de
            360€. <br /> Rappel : Le nombre de participations d&apos;un même
            client n&apos;augmente pas ses chances de gagner ce gros lot. <br />
            Ce tirage au sort sera effectué sous le contrôle de Maître Arnaud
            Rick, huissier de justice.
          </li>
        </ul>
      </div>
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <h2 style={{ fontSize: 25, color: Colors.darkGreen }}>
          4. Période et validité du jeu
        </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            &#x2022; Le jeu-concours se déroule sur une période de 30 jours.
          </li>
          <li>&#x2022; Un maximum de 500 000 tickets seront distribués.</li>
          <li>
            &#x2022; Les participants ont 30 jours supplémentaires après la fin
            du jeu pour valider leur code et réclamer leur lot.
          </li>
        </ul>
      </div>
      <div style={{ paddingTop: 20, paddingBottom: 50 }}>
        <h2 style={{ fontSize: 25, color: Colors.darkGreen }}>
          5. Récupération des lots
        </h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            &#x2022; Les gains peuvent être retirés en boutique en présentant le
            ticket gagnant.
          </li>
          <li>
            &#x2022; Une option de livraison en ligne est disponible via un bon
            de réduction envoyé après validation du code.
          </li>
          <li>
            &#x2022; Les lots non réclamés dans les 30 jours suivant la fin du
            jeu seront considérés comme perdus.
          </li>
        </ul>
      </div>
    </div>
  );
}
