        let slideIndex = 0;
        showSlides();

        function plusSlides(n) {
            slideIndex += n;
            showSlides();
        }

        function showSlides() {
            let slides = document.getElementsByClassName("slide");
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex].style.display = "block";
        }

// Fonction pour vérifier si le restaurant est ouvert ou fermé
function checkOpenStatus() {
    // Heure actuelle
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
    const currentTime = now.getHours() * 100 + now.getMinutes(); // Heure actuelle en format HHMM (ex: 1345 pour 13:45)

    // Tableau des horaires par jour avec les plages horaires
    const openingHours = {
        1: { open: 1200, close: 1430 },  // Lundi 12:00 - 14:30
        2: { open: 1200, close: 1430 },  // Mardi 12:00 - 14:30
        3: { open: 1200, close: 1430 },  // Mercredi 12:00 - 14:30
        4: { open: 1200, close: 1430 },  // Jeudi 12:00 - 14:30
        5: { open: 1200, close: 1430 },  // Vendredi 12:00 - 14:30
        6: { open: 1200, close: 1430 },  // Samedi 12:00 - 14:30
        7: { open: 0, close: 0 },        // Dimanche Fermé
    };

    // Vérifier si c'est ouvert ou fermé
    let statusMessage = '';
    let closingTime = '';
    
    if (currentDay !== 7) { // Si ce n'est pas Dimanche
        const hours = openingHours[currentDay];
        if (currentTime >= hours.open && currentTime < hours.close) {
            const closingHour = Math.floor(hours.close / 100);
            const closingMinute = hours.close % 100;
            closingTime = `${closingHour}:${closingMinute < 10 ? '0' + closingMinute : closingMinute}`;
            statusMessage = `Ouvert, fermeture à ${closingTime}`;
            document.getElementById("open-status").classList.remove('closed');
            document.getElementById("open-status").classList.add('open');
        } else {
            statusMessage = 'Fermé';
            document.getElementById("open-status").classList.remove('open');
            document.getElementById("open-status").classList.add('closed');
        }
    } else {
        statusMessage = 'Fermé';
        document.getElementById("open-status").classList.remove('open');
        document.getElementById("open-status").classList.add('closed');
    }

    document.getElementById("open-status").textContent = statusMessage;
}

// Appeler la fonction pour mettre à jour l'état en temps réel au chargement de la page
window.onload = checkOpenStatus;
