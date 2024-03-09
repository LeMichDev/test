// Récupérez tous les éléments avec la classe "items"
const items = document.querySelectorAll('.items');

// Récupérez le bouton que vous souhaitez modifier
const boutonValider = document.querySelector('.valid');

// Récupérez le footer que vous souhaitez modifier
const footer = document.querySelector('.footer');

// Récupérez l'alerte que vous souhaitez modifier
const alert = document.querySelector('.alert');

// Ajoutez un gestionnaire d'événements à chaque élément "items"
items.forEach(item => {
    item.addEventListener('click', () => {
        // Changez la couleur de fond du bouton en vert et ajoute une transition
        boutonValider.style.backgroundColor = 'rgba(0, 221, 0, 0.7)';
        boutonValider.style.transition = "all 0.5s ease-in-out"
    });
});

items.forEach(item => {
    item.addEventListener('click', () => {
        // Réinitialisez la couleur de fond de tous les éléments
        items.forEach(otherItem => {
            otherItem.style.backgroundColor = ''; // Réinitialisez la couleur de fond
        });
        // Changez la couleur de fond de l'élément cliqué en gris et ajoute une transition
        item.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
        item.style.transition = "0.3s ease-in";
    });
});

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Valider"
boutonValider.addEventListener('click', () => {
    // Réinitialisez la couleur de fond de tous les éléments avec la classe "items"
    items.forEach(item => {
        item.style.backgroundColor = ''; // Réinitialisez la couleur de fond
        item.style.transition = ''; // Réinitialisez la transition
    });

    boutonValider.style.backgroundColor = ''; // Réinitialisez la couleur de fond
    boutonValider.style.transition = ''; // Réinitialisez la transition

    // Ajout d'un délai avant l'affichage de l'alerte
    setTimeout(() => {
        // Affichez la div avec la classe "alert"
        alert.style.display = 'block';
        alert.style.transition = "0.5s ease-in-out";


        // Ajout d'un délai avant de masquer l'alerte
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000); // 2000 millisecondes = 2 secondes de délai avant de masquer l'alerte
    });
});