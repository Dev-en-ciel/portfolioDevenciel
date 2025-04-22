// On sélectionne le bouton avec la classe "scroll-to-top" et on le stocke dans une variable
const scrollBtn = document.querySelector(".scroll-to-top");

// On écoute l'événement de défilement de la fenêtre (scroll)
window.addEventListener("scroll", () => {
  // Si l'utilisateur a scrollé vers le bas de plus de 300 pixels
  if (window.scrollY > 300) {
    // On rend le bouton visible en l'affichant avec "flex"
    scrollBtn.style.display = "flex";
  } else {
    // Sinon, on le cache
    scrollBtn.style.display = "none";
  }
});

// Quand on clique sur le bouton
scrollBtn.addEventListener("click", () => {
  // On remonte en haut de la page avec un effet de défilement fluide
  window.scrollTo({ top: 0, behavior: "smooth" });
});
  