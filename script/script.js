/// Fonction pour ouvrir l'image en modale
function openImageModal() {
    // Afficher le modal
    document.getElementById('menuImage').style.display = 'flex';
    // Ajouter la classe no-scroll au body pour empêcher le scroll de la page
    document.body.classList.add('no-scroll');
    // Faire défiler l'image en haut de la modale
    const modalContent = document.querySelector('.image-modal-content');
    modalContent.scrollTop = 0;  // S'assurer que l'image commence en haut
}

// Fonction pour fermer la modale
function closeImageModal() {
    // Cacher le modal
    document.getElementById('menuImage').style.display = 'none';
    // Retirer la classe no-scroll pour permettre le scroll de la page
    document.body.classList.remove('no-scroll');
}


// Ouvrir l'image en cliquant sur le lien
document.querySelector('.open-image-link').addEventListener('click', function(event) {
    event.preventDefault();
    openImageModal();
});



