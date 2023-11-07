// On récupère les deux images, la taille de leur balise servira de boite collision (vous pouvez la voir facilement avec l'inspecteur)
const mario = document.querySelector("#mario");
const luigi = document.querySelector("#luigi");

// getBoundingClientRect récupère toutes les infos utiles sur l'image et sa boite de collision
console.log(mario.getBoundingClientRect());
console.log(mario);

// On détecte la pression d'une touche
document.addEventListener("keydown", moveMario);

function moveMario(e) {
  // console.log(e);
  switch (e.keyCode) {
    // On déplace Mario en fonction de la touche pressée
    case 39:
      if (!isCollision(mario, luigi, 6, 0)) {
        mario.style.left = mario.getBoundingClientRect().x + 6 + "px";
      }
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
// La fonction prend en compte deux éléments, une vitesse horizontale et une vitesse verticale
function isCollision(element1, element2, xSpeed, ySpeed) {
  let marioBounding = element1.getBoundingClientRect();
  let luigiBounding = element2.getBoundingClientRect();

  // On check si Mario + sa taille + son mouvement dépasse l'origine en x de Luigi
  // On check si l'origine de Mario + son mouvement dépasse Luigi + sa taille
  // Same pour les y
  if (
    marioBounding.x + marioBounding.width + xSpeed >= luigiBounding.x &&
    marioBounding.x + xSpeed <= luigiBounding.x + luigiBounding.width &&
    marioBounding.y + marioBounding.height + ySpeed >= luigiBounding.y &&
    marioBounding.y + ySpeed <= luigiBounding.y + luigiBounding.height
  ) {
    return true;
  } else {
    return false;
  }
}
