const allCorres = [
    {
        headerImg: "https://i.ytimg.com/vi/k_mIox2YwR4/maxresdefault.jpg",
        titulo: "ajuliacosta",
    },
    {
        headerImg: "../img/fromghetto.png",
        titulo: "from ghetto to ghetto",
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

const sectionCorres = document.getElementById('corres')

function Corres(){
    allCorres.map(projeto=>{
            
    const divCorres = document.createElement('div')
    const linkCorres = document.createElement('a')
    const imgCorres = document.createElement('img')
    const titleCorres = document.createElement('h3')
    
    sectionCorres.appendChild(divCorres)
    divCorres.appendChild(linkCorres)
    linkCorres.appendChild(imgCorres)
    linkCorres.appendChild(titleCorres)
    
    let link = projeto.titulo.replace(" ","") 

    linkCorres.href = `corres/${link}.html`

    imgCorres.src = projeto.headerImg
    titleCorres.innerHTML = `<span class="span__4">${projeto.titulo}</span>`
    })
}

Corres()
