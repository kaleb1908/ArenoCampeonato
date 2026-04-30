const botaoMenu = document.querySelector(".btn-menu");
const menuEscondido = document.querySelector(".menu-lateral");
let PaginaInicial = alert("Você acabou de abrir a página");
botaoMenu.addEventListener("click", function(){
    menuEscondido.classList.toggle("ativo");
})