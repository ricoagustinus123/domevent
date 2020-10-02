// membuat fungsi yang akan memunculkan modal

const showModal = () => {

    // kita akan ambil element yang akan di show
    let modal = document.querySelector('.modalmenu')

    // kita atur style  dari aeleement tersebut
    // jadikan dia terkihat 

    modal.style.display = 'flex'
}

const hideModal = () => {

    let modal = document.querySelector('.modalmenu')

    modal.style.display = 'none'
}

const hideaboutalert = () => {
    let aboutAlert = document.querySelector('.aboutAlert')

    aboutAlert.style.display = 'none'
}

// tangkap element
let gallery = document.getElementById('gallery')
let imggallery = document.getElementById('img-gallery')
let img = 209;


for (let a = 0; a < 36; a++) {
    imggallery.innerHTML += `

    <img src ="https://picsum.photos/seed/${img++}/300/" />`
}



// // insert html syntax into gallery



// gallery.style.gap = "20px"
// gallery.style.flexDirection = "column"


// // imggallery.innerHTML += `

//     <h1>GALLERY</h1>
//     <img src ="https://picsum.photos/seed/47/300" />
//     <img src ="https://picsum.photos/seed/67/300" />
//     <img src ="https://picsum.photos/seed/${i}/300" />
//     <img src ="https://picsum.photos/seed/107/300" />

// `
// gallery.style.gap = "20px"
// gallery.style.flexDirection = "column"