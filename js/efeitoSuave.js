const skillItems = document.querySelectorAll('.skill-lista-li');

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // Remover a classe quando sair do campo de visão
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, { rootMargin: '-50px' });

skillItems.forEach(item => {
  observer.observe(item);
});