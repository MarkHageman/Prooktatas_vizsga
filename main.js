const hamburger = document.getElementById('hamburger')
const nav = document.getElementsByClassName('nav')[0]

hamburger.addEventListener('click', function(event){
    nav.classList.toggle('menu-active')
})

nav.addEventListener('mouseleave', function(){
    nav.classList.remove('menu-active')
})


const products = [
    {
        id: 1,
        title: "A túlsó part",
        type: "Regény",
        price: 3290,
        author: "Magyari András",
        style: "Történelmi",
        cover: "a_hid.png",
    },
    {
        id: 2,
        title: "A következő nap",
        type: "Regény",
        price: 3590,
        author: "Szép Annamária",
        style: "Kaland, túlélés",
        cover: "a_kovetkezo_nap.png",
    },
    {
        id: 3,
        title: "A mező hangjai",
        type: "Verses kötet",
        price: 3290,
        author: "Deák Ágoston",
        style: "Lírai",
        cover: "a_mezo_hangjai.png",
    },
    {
        id: 4,
        title: "Báthory",
        type: "Regény",
        price: 2590,
        author: "Magyari András",
        style: "Thriller",
        cover: "bathory.png",
    },
    {
        id: 5,
        title: "Csodaszarvas",
        type: "Regény",
        price: 5290,
        author: "Kovács Réka",
        style: "Kaland, fantasy",
        cover: "csodaszarvas.png",
    },
    {
        id: 6,
        title: "Emese álma",
        type: "Regény",
        price: 4290,
        author: "Kovács Réka",
        style: "Fantasy",
        cover: "emese_alma.png",
    },
    {
        id: 7,
        title: "Fekete sereg",
        type: "Képregény",
        price: 3290,
        author: "Sörétes Dénes",
        style: "Sötét fantasy, kaland",
        cover: "fekete_sereg.png",
    },
    {
        id: 8,
        title: "Magyar királyok",
        type: "Regény",
        price: 6290,
        author: "Magyari András",
        style: "Történelmi",
        cover: "magyar_kiralyok.png",
    },
    {
        id: 9,
        title: "Pilvax",
        type: "Képregény",
        price: 3290,
        author: "Sörétes Dénes",
        style: "Detektív",
        cover: "pilvax.png",
    },
    {
        id: 10,
        title: "S lőn világosság",
        type: "Regény",
        price: 4290,
        author: "Horváth Lilla",
        style: "Sötét fantasy",
        cover: "s_lon_vilagossag.png",
    },
    {
        id: 11,
        title: "Szechenyi",
        type: "Képregény",
        price: 3590,
        author: "Sörétes Dénes",
        style: "Detektív, thriller",
        cover: "szechenyi.png",
    },
]

const productsSection = document.getElementById('card-products')

products.forEach(product => {
    productsSection.innerHTML += `<div class="card-products m-2 p-3">
    <h2 class="m-1 p-1">${product.title}</h2> 
    <img class="m-1 p-1" src="./img/${product.cover}">
    <h3 class="m-1 p-1">${product.author}</h3>
    <p class="m-1 p-1">${product.style}</p>
    <p class="m-1 p-1">${product.price} FT</p>
</div>`
})


