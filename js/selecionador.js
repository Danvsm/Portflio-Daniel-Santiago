const botoes = document.querySelectorAll(".icone");
const contatos = document.getElementById("onOffContatos");
const projetos = document.getElementById("onOffProjetos");
contatos.style.display = "none";
botoes.forEach(botao => {
    botao.addEventListener('click', e => {
        const altValue = botao.getAttribute('alt');
        const titulo = document.querySelector(".titulo")
        if (altValue === "projetos") {
            titulo.innerHTML = "Projetos"
            
            projetos.style.display = "block";
            contatos.style.display = "none";
            document.getElementById("onOffContatos").classList.remove("visible");
        } else if (altValue === "contatos") {
            titulo.innerHTML = "Redes"
            projetos.style.display = "none";
            contatos.style.display = "block";
        }
    });
});
