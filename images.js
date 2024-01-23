const images = ["https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg",
"https://www.mockofun.com/wp-content/uploads/2019/10/online-horror-movie-poster.jpg", 
"https://img.freepik.com/free-psd/creative-film-poster-template_23-2149839039.jpg",
"https://img.elegantflyer.com/templates/preview/premium-movie-poster-psd-template-160810.jpg",
"https://i.pinimg.com/736x/dd/ca/b4/ddcab424ff7a826f8dd8917d0b41c63c.jpg"
]

let showingImageIndex = 0;
const imagesLength = images.length;

function goBack(){
     if (showingImageIndex === 0){
         showingImageIndex = imagesLength -1
     }
     else{
         showingImageIndex -= 1
     }
}

function goForward(){
    if(showingImageIndex === imagesLength -1){
        showingImageIndex = 0
    }
    else{
      showingImageIndex += 1
    }
}