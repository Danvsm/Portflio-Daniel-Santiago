const textElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');
const text = "Eu sou um desenvolvedor front-end e também trabalho de forma autônoma como designer para criar canecas personalizadas. Além disso, atuo como freelancer na área de desenvolvimento front-end. Atualmente, estou focado em aprofundar meu conhecimento no framework React e estou extremamente interessado em encarar novos desafios!";
const typingDelay = 50; // Atraso entre a digitação de cada caractere

function typeText() {
  let currentIndex = 0;

  function type() {
    if (currentIndex < text.length) {
      textElement.textContent += text[currentIndex];
      currentIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorElement.style.display = "none"; // Remover cursor quando a digitação estiver completa
    }
  }

  type();
}

typeText();