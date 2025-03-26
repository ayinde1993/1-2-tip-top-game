import React from 'react';
import Colors from "../../utils/constants/colors";

const Legalites = () => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <h2 id="Conditions" style={{ fontWeight: 800, fontSize: 20, color: Colors.darkGreen }}>1. Mentions légales</h2>
        <p>Article 1 - Présentation de l&apos;entreprise</p>
        <ul>
          <li>Notre entreprise TIPTOP est spécialisée dans la vente de thés haut de gamme...</li>
        </ul>
        <p>Article 2 - Acceptation des CGU</p>
        <ul>
          <li>L&apos;utilisation du site web Thé Tip Top implique l&apos;acceptation intégrale des présentes CGU...</li>
        </ul>
        <p>Article 3 - Modification des CGU</p>
        <ul>
          <li>Nous nous réservons le droit de modifier à tout moment ces CGU...</li>
        </ul>
        <p>Article 4 - Description du service</p>
        <ul>
          <li>Le site TipTop présente notre entreprise et permet la passation de commandes...</li>
        </ul>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <h2 id="Politiques" style={{ fontWeight: 800, fontSize: 20, color: Colors.darkGreen }}>2. Politique de confidentialité</h2>
        <p>Article 1 - Collecte des données</p>
        <ul>
          <li>Nous collectons des données personnelles dans le cadre des commandes...</li>
        </ul>
        <p>Article 2 - Utilisation des données</p>
        <ul>
          <li>Les données collectées sont utilisées pour traiter les commandes et personnaliser l&apos;expérience utilisateur...</li>
        </ul>
        <p>Article 3 - Partage des données</p>
        <ul>
          <li>Les données peuvent être partagées avec des prestataires tiers...</li>
        </ul>
        <p>Article 4 - Droit d&apos;accès et de rectification</p>
        <ul>
          <li>Conformément à la loi informatique et libertés, vous avez un droit d&apos;accès...</li>
        </ul>
      </div>
    </div>
  );
};

export default Legalites;
