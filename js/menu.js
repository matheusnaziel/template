document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
    console.log("fui clicado")
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
