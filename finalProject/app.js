
// L.mapbox.accessToken = 'pk.eyJ1IjoiYnNoZWFseSIsImEiOiJjaWtiZmZocGEwbHdhdXltNGExbWhrcG9uIn0.mFg3brKBoyoV-f_bSn91-g';
// var map = L.mapbox.map('map', 'mapbox.streets')
//     .setView([40, -74.50], 9);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnNoZWFseSIsImEiOiJjaWtiZmZocGEwbHdhdXltNGExbWhrcG9uIn0.mFg3brKBoyoV-f_bSn91-g';

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/bshealy/cikkod5yl00c2bgm1ngdiuprt', //stylesheet location
        center: [-98, 37.5], // starting position
        zoom: 4 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.Navigation());
