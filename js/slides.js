var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Certifique-se de que as bolinhas sejam clicáveis
  },
});

// Defina o estilo das bolinhas de paginação
document.querySelectorAll(".swiper-pagination-bullet").forEach(function(bullet) {
  bullet.style.backgroundColor = "blue"; // Cor desejada para as bolinhas
});

// Defina o estilo da bolinha ativa
document.querySelector(".swiper-pagination-bullet-active").style.backgroundColor = "#7ED359"; // Cor desejada para a bolinha ativa


