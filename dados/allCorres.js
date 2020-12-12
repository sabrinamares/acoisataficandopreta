const allCorres = [
    {
        headerImg: "https://i.ytimg.com/vi/k_mIox2YwR4/maxresdefault.jpg",
        quote: "eu caminho bem nessa estrada,<br>cê nunca viu <span class='span__4'>preta</span> mais <span class='span__2'>braba</span>.",
        titulo: "ajuliacosta",
        bioImg1: "https://static.wixstatic.com/media/77d60e_3fe98ae60c044df483e4a00215b1f5b0~mv2_d_3264_4248_s_4_2.gif",
        bioImg2: "https://static.wixstatic.com/media/77d60e_b54b9606146342df8ecddb196eb44c80~mv2.png/v1/fill/w_478,h_578,al_c,q_85,usm_0.66_1.00_0.01/77d60e_b54b9606146342df8ecddb196eb44c80~mv2.webp",
        ul: "<li>São Paulo/SP</li><li>mulher preta empreendedora</li><li>dona da marca <span class='span__3'>ajuliacostashop</span>, onde produz roupas de forma independente</li><li>rima e lança uns rap pesado de preta enjoada</li><li>fortalece a autoestima das mina</li><li>trampo de preta pra preta</li>",
        bannerImg1: "https://i1.wp.com/uc-br.com/wp-content/uploads/2020/06/Captura-de-Tela-2020-06-17-a%CC%80s-21.21.46.png?fit=1271%2C678&ssl=1",
        bannerImg2:"https://3.bp.blogspot.com/-OX03JrrFvdM/V2R-Kq9nB3I/AAAAAAAAzxE/b_zjdO5iWwoLcEjGAOeZcZQkmQ0pnSKfQCLcB/w1200-h630-p-k-no-nu/13323609_1716703465250965_5110768966165624211_o.jpg",
        link1: "https://www.instagram.com/ajuliacosta/",
        link2: "https://www.youtube.com/watch?v=ab8i6FkQOMg",
        link3: "https://www.instagram.com/ajuliacostashop/",
    },
    
]

const headerImg = document.getElementById('headerImg')
const quote = document.getElementById('quote')
const titulo = document.getElementById('titulo')
const bioImg1 = document.getElementById('bioImg1')
const bioImg2 = document.getElementById('bioImg2')
const ul = document.getElementById('listinha')
const bannerImg1 = document.getElementById('bannerImg1')
const bannerImg2 = document.getElementById('bannerImg2')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')


function umCorre() {
    if(document.title =="ajuliacosta"){
        headerImg.src = allCorres[0].headerImg
        quote.innerHTML = allCorres[0].quote
        titulo.textContent = allCorres[0].titulo
        bioImg1.src = allCorres[0].bioImg1
        bioImg2.src = allCorres[0].bioImg2
        ul.innerHTML = allCorres[0].ul
        bannerImg1.src = allCorres[0].bannerImg1
        bannerImg2.src = allCorres[0].bannerImg2
        link1.href = allCorres[0].link1
        link2.href = allCorres[0].link2
        link3.href = allCorres[0].link3
    }
}

umCorre()