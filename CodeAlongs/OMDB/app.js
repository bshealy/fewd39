//
// var sampleResult = {
//   "Search": [
//     {
//       "Title": "Cool Runnings",
//       "Type": "movie",
//       "Year": "1993",
//       "imdbID": "tt0106611"
//     }
//   ]
// }

var form = document.querySelector('#movie-search-form');
var list = document.querySelector("#movies");
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  var query = document.querySelector("#query").value;
  var url = "http://omdbapi.com/?s=" + query;
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  results["Search"].forEach(displayMovie);
  // console.log(results);
}

function displayMovie(movie) {
  // console.log(movie)
  var item = document.createElement("li");
  var link = document.createElement("a");
  var title = document.createElement("div");
  var release = document.createElement("div");
  var url = "http://www.imdb.com/title/" + movie["imdbID"];

  item.classList.add("movie");
  title.classList.add("movie-title");
  release.classList.add("movie-release-date");

  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");

  link.textContent = movie["Title"];
  release.textContent = movie["Year"];

  title.appendChild(link)
  item.appendChild(title)
  item.appendChild(release)
  list.appendChild(item);
}



// 4.)  add CSS to the elements (item, title, release)
