import React from "react";
import { isMobile } from "react-device-detect";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../styles/Footer/Footer.module.css";

export function AccordionUsage() {
  return (
    <div style={{ backgroundColor: "#39590A" }}>
      <Accordion sx={{ backgroundColor: "#39590A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ color: "#85db18" }}>
            Contact
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.text2}>
            Email :{" "}
            <a href="mailto:contact@thetiptop.com" className={styles.text1}>
              contact@thetiptop.com
            </a>
          </p>
          <p className={styles.text2}>Téléphone : +33 1 23 45 67 89</p>
          <p className={styles.text2}>Adresse : 10 Rue de Nice, 06000 Nice</p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#39590A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{ color: "#85db18" }}>
            Suivez-nous
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="https://www.facebook.com/" className={styles.text1}>
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <br />
          <a
            href="https://www.instagram.com/thetiptop25/?hl=fr/"
            className={styles.text1}
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <br />
          <a href="#" className={styles.text1}>
            <i className="fab fa-twitter"></i> TikTok
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#39590A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ color: "#85db18" }}>
            Navigation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <a href="/game" className={styles.text2}>
              Espace de jeu
            </a>
          </p>
          <p>
            <a href="/rules" className={styles.text2}>
              Règles du jeu
            </a>
          </p>
          <p>
            <a href="/profile" className={styles.text2}>
              Espace Client
            </a>
          </p>
          <p>
            <a href="/login" className={styles.text2}>
              Se connecter
            </a>
          </p>
          <p>
            <a href="/contact" className={styles.text2}>
              Formulaire de contact
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#39590A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ color: "#85db18" }}>
            Mentions Légales
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <a href="legalites#conditions" className={styles.text1}>
              Conditions Générales
            </a>
          </p>
          <p>
            <a href="legalites#politiques" className={styles.text1}>
              Politique de Confidentialité
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#39590A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ color: "#85db18" }}>
            Newsletter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.text2}>
            Abonnez-vous pour recevoir nos offres exclusives :
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.btn}>
              S&apos;abonner à la Newsletter
            </button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Footer() {
  return isMobile ? (
    <>
      <AccordionUsage />
      <div className={styles.subFooter}>
        <p>
          &copy; 2025 Thé Tip Top - Agence Furious Ducks - Ceci est un site
          fictif. Projet étudiant
        </p>
      </div>
    </>
  ) : (
    <>
      <div className={styles.body}>
        {/* Logo */}
        <div style={{ textAlign: "center" }}>
          <img src="logo.png" alt="Thé Tip Top" width={40} height={40} />
        </div>

        {/* Contact */}
        <div className={styles.container}>
          <h3 className={styles.title}>Contact</h3>
          <p>
            Email :{" "}
            <a href="mailto:contact@thetiptop.com" className={styles.text1}>
              contact@thetiptop.com
            </a>
          </p>
          <p>Téléphone : +33 1 23 45 67 89</p>
          <p>Adresse : 10 Rue de Nice, 06000 Nice</p>
        </div>

        {/* Réseaux Sociaux */}
        <div className={styles.container}>
          <h3 className={styles.title}>Suivez-nous</h3>
          <a href="https://www.facebook.com/" className={styles.text1}>
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <br />
          <a
            href="https://www.instagram.com/thetiptop25/?hl=fr/"
            className={styles.text1}
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <br />
          <a href="#" className={styles.text1}>
            <i className="fab fa-twitter"></i> TikTok
          </a>
        </div>

        {/* Navigation */}
        <div className={styles.container}>
          <h3 className={styles.title}>Navigation</h3>
          <p>
            <a href="/game" className={styles.text2}>
              Espace de jeu
            </a>
          </p>
          <p>
            <a href="/rules" className={styles.text2}>
              Règles du jeu
            </a>
          </p>
          <p>
            <a href="/profile" className={styles.text2}>
              Espace Client
            </a>
          </p>
          <p>
            <a href="/login" className={styles.text2}>
              Se connecter
            </a>
          </p>
          <p>
            <a href="/contact" className={styles.text2}>
              Formulaire de contact
            </a>
          </p>
        </div>

        {/* Mentions Légales */}
        <div className={styles.container}>
          <h3 className={styles.title}>Mentions Légales</h3>
          <p>
            <a href="legalites#conditions" className={styles.text1}>
              Conditions Générales
            </a>
          </p>
          <p>
            <a href="legalites#politiques" className={styles.text1}>
              Politique de Confidentialité
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div className={styles.container}>
          <h3 className={styles.title}>Newsletter</h3>
          <p>Abonnez-vous pour recevoir nos offres exclusives :</p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.btn}>
              S&apos;abonner à la Newsletter
            </button>
          </form>
        </div>
      </div>

      <div className={styles.subFooter}>
        <p>
          &copy; 2025 Thé Tip Top - Agence Furious Ducks - Ceci est un site
          fictif. Projet étudiant
        </p>
      </div>
    </>
  );
}
