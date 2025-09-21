// scripts/main.js

// Seleccionamos el contenedor de corazones
const heartContainer = document.querySelector('.heart-background');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Elegir color aleatorio (amarillo o rojo)
  const colors = ['yellow', 'red'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  heart.classList.add(color);

  // Posición horizontal aleatoria (0% a 100%)
  heart.style.left = Math.random() * 100 + '%';

  // Tamaño aleatorio (15px a 25px) - ajustado para mejor visualización
  const size = 15 + Math.random() * 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  // Duración animación aleatoria (5s a 10s)
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';

  // Opacidad variable para más profundidad
  heart.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);

  // Añadir el corazón al contenedor
  heartContainer.appendChild(heart);

  // Eliminar corazón después de la animación (10s máximo)
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Crear un corazón cada 700ms aproximadamente
setInterval(createHeart, 700);

// Mostrar una flor al hacer scroll

// Creamos la flor y la configuramos inicialmente oculta
const scrollFlower = document.createElement('img');
scrollFlower.src = 'assets/images/scroll-flower.png'; // Cambia la ruta si es necesario
scrollFlower.alt = 'Flor animada scroll';
scrollFlower.classList.add('scroll-flower');
scrollFlower.style.opacity = 0;
scrollFlower.style.position = 'fixed';
scrollFlower.style.bottom = '20px';
scrollFlower.style.right = '20px';
scrollFlower.style.width = '80px';
scrollFlower.style.transition = 'opacity 0.7s ease';
scrollFlower.style.zIndex = '10';

document.body.appendChild(scrollFlower);

let flowerVisible = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    if (!flowerVisible) {
      scrollFlower.style.opacity = 1;
      flowerVisible = true;
    }
  } else {
    if (flowerVisible) {
      scrollFlower.style.opacity = 0;
      flowerVisible = false;
    }
  }
});