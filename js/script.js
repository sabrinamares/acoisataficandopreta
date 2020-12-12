$(document).ready(function () {
    $('.carrossel').slick({
        infinite: true,
        // dots:true,
        autoplay: true,
        autoplaySpeed: 1750,
        centerMode: true,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 4024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 2024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

const allCorres = [
    {
        headerImg: "https://i.ytimg.com/vi/k_mIox2YwR4/maxresdefault.jpg",
        titulo: "ajuliacosta",
    },
    {
        headerImg: "../img/fromghetto.png",
        titulo: "fromghettotoghetto",
    },
    {
        headerImg: "../img/janice.png",
        titulo: "janice mascarenhas",
    },
    {
        headerImg: "../img/mooc.png",
        titulo: "mooc",
    },
    {
        headerImg: "../img/turmalinas.png",
        titulo: "turmalinas negras",
    },
    {
        headerImg: "../img/yasmin.png",
        titulo: "yasmin thayná",
    },
    
]

const carrossel = document.querySelector('.carrossel')

function oCarrosselnparadegirar() {
    allCorres.map(projeto => {
        const divCarrossel = document.createElement('div')
        const linkCarrossel = document.createElement('a')
        const imgCarrossel = document.createElement('img')
        const titleCarrossel = document.createElement('h3')

        carrossel.appendChild(divCarrossel)
        divCarrossel.appendChild(linkCarrossel)
        linkCarrossel.appendChild(imgCarrossel)
        linkCarrossel.appendChild(titleCarrossel)

        let link = projeto.titulo.replace(" ","") 

        linkCarrossel.href = `corres/${link}.html`


        titleCarrossel.textContent = projeto.titulo
        imgCarrossel.src = projeto.headerImg
    })
}


oCarrosselnparadegirar()
console.log(projetos)