$('.fullbaner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true
});

$(document).ready(function () {
    var larguraJanela = $(window).width();

    var larguraCelular = 600;

    if (larguraJanela < larguraCelular) {
        $('.lista-beneficios, .section-vitrine').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrow: true
        });

        $('.header-desktop').hide()
        $('.menu-departamento').hide()
        $('.fullbaner').hide()
        $('.newsletter').hide()

        $('.footer-inst').hide()
    }else{
        $('.header-mobile').hide()
        $('.fullbaner-mobile').hide()
        $('.newsletter-mobile').hide()
        $('.footer-mobile').hide()
    }

    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active-mobile");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }

    $('.close-btn').on('click', function(){
        $('.modal, .active').hide()
    })

});