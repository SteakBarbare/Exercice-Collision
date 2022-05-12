// On récupère les deux images, la taille de leur balise servira de boite collision (vous pouvez la voir facilement avec l'inspecteur)
const mario = document.querySelector("#mario");
const luigi = document.querySelector("#luigi");

// getBoundingClientRect récupère toutes les infos utiles sur l'image et sa boite de collision
console.log(mario.getBoundingClientRect());

// On détecte la pression d'une touche
document.addEventListener("keydown", moveMario);

function moveMario(e) {
  switch (e.keyCode) {
    // On déplace Mario en fonction de la touche pressée
    case 39:
      mario.style.left = mario.getBoundingClientRect().x + 6 + "px";
      break;
    case 37:
      mario.style.left = mario.getBoundingClientRect().x - 6 + "px";
      break;
    case 40:
      mario.style.top = mario.getBoundingClientRect().y + 6 + "px";
      break;
    case 38:
      mario.style.top = mario.getBoundingClientRect().y - 6 + "px";
      break;
  }
}
