$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var validarInfo = false;

function clickMaisInformacoes() {
    var descricao = document.getElementsByClassName('descricao')[0];
    if(!validarInfo) {
        descricao.innerText = 'Um perito forense desperta de um coma com poderes '
        + 'especiais que serão postos à prova na luta contra forças que ameaçam a cidade.';
        validarInfo = !validarInfo;
    } else {
        descricao.innerText = '';
        validarInfo = !validarInfo;
    }
}