document.getElementById('impression-form').addEventListener('change', function() {
    const format = document.getElementById('format').value;
    const typeImpression = document.getElementById('type-impression').value;
    const modeImpression = document.getElementById('mode-impression').value;
    const nombrePages = document.getElementById('nombre-pages').value;

    let prixParPage = 0.10; // Exemple de prix de base par page

    if (format === 'A3') {
        prixParPage += 0.05; // Supplément pour A3
    }

    if (typeImpression === 'recto-verso') {
        prixParPage += 0.02; // Supplément pour recto-verso
    }

    if (modeImpression === 'couleur') {
        prixParPage += 0.03; // Supplément pour couleur
    }

    document.getElementById('prix').textContent = prixParPage.toFixed(2) + ' €';
});
