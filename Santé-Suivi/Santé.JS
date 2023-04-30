function enregistrer() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const pathologies = document.getElementById("pathologies").value;
    const allergies = document.getElementById("allergies").value;
    const medicaments = document.getElementById("medicaments").value;
    const groupe_sanguin = document.getElementById("groupe_sanguin").value;
    const notes_medicales = document.getElementById("notes_medicales").value;
    const adresse = document.getElementById("adresse").value;
    const donneur_organe = document.getElementById("donneur_organe").checked;
    const genre = document.querySelector('input[name="genre"]:checked').value;

    // Faire quelque chose avec les données saisies
    console.log(nom, prenom, pathologies, allergies, medicaments, groupe_sanguin, notes_medicales, adresse, donneur_organe, genre);
  }