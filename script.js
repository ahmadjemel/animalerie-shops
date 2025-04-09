// Exemple de fonction pour le formulaire de contact
/* document.getElementById('form-contact').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Merci ${nom}, votre message a été envoyé !`);
    // Ici, vous pouvez ajouter une logique pour envoyer les données à un serveur
}); */

$(document).ready(function () {
    $('.sidenav').sidenav();
})
document.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.scroll');
    if (window.scrollY > 300) { 
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});
document.querySelector('.scroll').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/*script copyright years*/
document.getElementById("year").textContent = new Date().getFullYear();
