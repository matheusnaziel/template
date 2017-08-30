// var blockClick = false;

document.querySelector('.menu-abrir').onclick = function() {
    document.querySelector('.barra-nav').classList.add('menu-ativo');

};

document.querySelector('.menu-fechar').onclick = function() {
    document.querySelector('.barra-nav').classList.remove('menu-ativo');
};

// document.documentElement.onclick = function(event) {
// 	console.log('document.documentElement', blockClick)
// 	if(blockClick && event.target.classList[1] === "menu-ativo") {
// 		document.querySelector('.barra-nav').classList.remove('menu-ativo');
// 	}
// }
