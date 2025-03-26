import React, { useState } from 'react';

export default function Contact() {
  // État local pour stocker les messages de succès ou d'erreur
  const [feedback, setFeedback] = useState(null);

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // On récupère les données du formulaire
    const formData = new FormData(event.target);
    // formData.get('nom'), formData.get('adresse_mail'), formData.get('message')

    // On crée un objet pour le convertir ensuite en JSON
    const data = {
      nom: formData.get('nom'),
      adresse_mail: formData.get('adresse_mail'),
      message: formData.get('message')
    };

    try {
      // Appel à l'API backend (adaptation de l'URL selon votre config Docker/Traefik)
      const response = await fetch('http://localhost:5000/contact', {
        // const response = await fetch('http://46.202.168.187:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // On récupère la réponse au format JSON
      const result = await response.json();

      if (response.ok) {
        // Si le serveur renvoie un statut 200 ou 201, c'est un succès
        setFeedback({ type: 'success', message: result.message });
      } else {
        // Sinon, on considère que c'est une erreur
        setFeedback({ type: 'error', message: result.error });
      }
    } catch (error) {
      // Erreur réseau ou autre
      setFeedback({ type: 'error', message: 'Une erreur est survenue.' });
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        gap: "50px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#85db18",
          padding: "20px",
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          // height: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333", display: "flex", justifyContent: "center" }}>
          CONTACTEZ-NOUS !
        </h2>

        {/* On remplace method="post" par onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit} style={{ marginLeft: 10 }}>
          <div style={{ marginBottom: "10px", display: "flex" }}>
            <label
              htmlFor="nom"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold", marginRight: 15 }}
            >
              Nom:
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              style={{ width: "50%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "10px", display: "flex" }}>
            <label
              htmlFor="adresse_mail"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold", marginRight: 12 }}
            >
              Email:
            </label>
            <input
              type="email"
              id="adresse_mail"
              name="adresse_mail"
              required
              style={{ width: "50%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
            >
              Messages:
            </label>
            <textarea
              id="message"
              name="message"
              rows="15"
              required
              style={{ width: "90%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", resize: "vertical" }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#39590A",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#ffdb4f"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#39590A"}
          >
            Envoyer
          </button>
        </form>

        {/* Affichage d’un message de feedback en dessous du formulaire */}
        {feedback && (
          <div style={{
            marginTop: "20px",
            color: feedback.type === 'success' ? "green" : "red",
            textAlign: "center"
          }}>
            {feedback.message}
          </div>
        )}
      </div>
    </div>
  );
}
