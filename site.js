document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("a[data-target]");
    const contents = document.querySelectorAll(".cv-content");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const target = e.target.dataset.target;

            // Retirer la classe active de tous les liens
            menuItems.forEach(link => {
                link.classList.remove("active");
                link.style.backgroundColor = ""; // Réinitialiser la couleur de fond
                link.style.color = ""; 
            });

            // Ajouter la classe active au lien cliqué
            this.classList.add("active");
            this.style.backgroundColor = "rgb(11, 77, 121)"; // Couleur de fond pour le lien cliqué
            this.style.color = "white";//mettre les ecriture en blanc
            // Cacher tous les contenus
            contents.forEach(content => {
                content.classList.remove("active");
                content.style.display = "none"; // Masquer les contenus
            });

            // Afficher le contenu correspondant
            const selectedContent = document.getElementById(target);
            selectedContent.classList.add("active");
            selectedContent.style.display = "block"; // Afficher le contenu sélectionné
        });
    });

    // Afficher la page d'accueil par défaut
    document.getElementById("accueil").classList.add("active");
    document.getElementById("accueil").style.display = "block"; // Afficher la page d'accueil par défaut
});
