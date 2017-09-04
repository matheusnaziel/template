// var blockClick = false;

document.querySelector('.menu-abrir').onclick = function() {
    document.querySelector('.barra-nav').classList.add('menu-ativo');

};

document.querySelector('.menu-fechar').onclick = function() {
    document.querySelector('.barra-nav').classList.remove('menu-ativo');
};

// jQuery(document).ready(function($) { 
//     $(".scroll").click(function(event){ 
//         event.preventDefault(); 
// 		var valorHref = $(event.currentTarget).attr("href");
		
//     	var alturaElement = $(valorHref).offset().top


//         $('.col-lg-10').animate({
//         	scrollTop: alturaElement
//         }, 600);
//    });
// });

// document.documentElement.onclick = function(event) {
// 	console.log('document.documentElement', blockClick)
// 	if(blockClick && event.target.classList[1] === "menu-ativo") {
// 		document.querySelector('.barra-nav').classList.remove('menu-ativo');
// 	}
// }
