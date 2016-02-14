var map;

function initMap(){
	var coordinates = new google.maps.LatLng(37.7936684,-122.3957547);
	var mapOptions = {
		center: coordinates,
		scrollwheel: false,
		zoom: 13
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	films.forEach(createMarker);
}

var filmList = document.querySelector('.film-list')
var li = document.createElement("li");
var h3 = document.createElement("h3");
var h4 = document.createElement("h4");
var h6 = document.createElement("h6");
var img = document.createElement("img");

function createMarker(film) {
	var myLatLng = new google.maps.LatLng(film.location.lat, film.location.lng);
	console.log(myLatLng)

	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng
	});
	createLine(film)
}

function createLine(data){
	li.classList.add("panel","panel-default");
	img.setAttribute('src', data.image);

	var filmTitle = data.title + ', ' +data.year;
	h3.textContent = filmTitle

	var filmCompany = data.production_company
	h4.textContent =filmCompany;

	li.appendChild(h3);
	li.appendChild(h4);
	li.appendChild(img);
	filmList.appendChild(li);

}

	// Hard Coded JSON
	// ------------------------------------------------

	var films = [
		{
			"id": 1,
			"title": "Marnie",
			"year": 1964,
			"location": "",
			"actors": ["Sean Connery", "Tippi Hedren", "Gary Oldman"],
			"image": "http://the.hitchcock.zone/files/gallery/org/6589.jpg",
			"production_company": "Universal Pictures",
			"director": "Alfred Hitchcock"
		},
		{
			"id": 2,
			"title": "The Birds",
			"year": 1963,
			"location": "",
			"actors": ["Evan Hunter", "Tippi Hedren", "Suzanne Pleshette"],
			"image": "http://www.theimaginativeconservative.org/wp-content/uploads/2015/05/Tippi-Hedren.jpg",
			"production_company": "Universal Pictures",
			"director": "Alfred Hitchcock"
		},
		{
			"id": 3,
			"title": "Vertigo",
			"year": 1958,
			"location": "",
			"actors": ["James Stewart", "Kim Novak", "Alec Coppel"],
			"image": "http://ww2.kqed.org/news/wp-content/uploads/sites/10/2013/02/apartmentthen.jpg",
			"production_company": "Alfred J. Hitchcock Productions",
			"director": "Alfred Hitchcock"
		},
		{
			"id": 4,
			"title": "Family Plot",
			"year": 1976,
			"location": {
				"lat": 37.7918345,
				"lng": -122.4155322
				},
			"actors": ["Bruce Dern", "Ernest Lehman", "Barbara Harris"],
			"image": "http://images6.fanpop.com/image/photos/33400000/Family-Plot-alfred-hitchcock-33469114-1280-800.jpg",
			"production_company": "Universal Pictures",
			"director": "Alfred Hitchcock"
		}
	]

	// Setup
	// ------------------------------------------------


	// Events
	// ------------------------------------------------


	// Functions
	// ------------------------------------------------
