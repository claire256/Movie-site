const container = document.querySelector(".container")

container.style.backgroundImage =`url(${images[0]})` 

const previous = document.querySelector("button.previous");
const next = document.querySelector("button.next");

function displayImage(){
    container.style.backgroundImage = `url(${images[showingImageIndex]})`
}

// displayImage()
previous.addEventListener("click", 
function(){
  goBack()
  displayImage()

});

next.addEventListener("click", 
function(){
goForward()
 displayImage()

});

setInterval(function(){
goForward()
 displayImage()

},3000)

const btn = document.getElementById('search')
function searchMovies (){

  const searchInput = document.getElementById('input-field').value;

// adding query parameters.
window.location = `http://127.0.0.1:5500/movies.html?title=${searchInput}`
  }

btn.addEventListener("click", searchMovies)

function displayMovies (){
  const searchParams = new URLSearchParams(window.location.search);
  const movieTitle = searchParams.get("title")

fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieTitle}`,{
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56fea18b2amsh0c43bffd39fb9e3p1d8af2jsn57b3ef1fd41d',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
})

.then(response => {
  if(response === 'True'){
  }
  console.log('response', response)
  return response.json()
})
 
.then(function(res){ 
  
  const movieResults = document.getElementById('movieResults');
  movieResults.innerHTML = '';
  const movies = res.results 
  console.log('res',movies)
  movies.forEach(movie => {
   const movieCard = document.createElement('div');
   movieCard.classList.add('card')
   movieCard.innerHTML = ` <h3>${movie.originalTitleText.text}</h3>
      <p>${movie.releaseYear.year}</p>
    <img id="movie_img" src="${movie.primaryImage?.url}">`
 
 movieResults.appendChild(movieCard) 
  });
})
.catch(error => console.log('catch',error))
  
}


