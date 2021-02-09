function loadMap(element) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2dyb3NlbmljayIsImEiOiJjaWZ1bDFtZW0yMzZ2djBtMGR3dDR4Z2ZhIn0.7rppXXzXGN9OiQ7WhNA9vw';

    var map = new mapboxgl.Map({
        container: element,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-150.0, 61.16], 
        zoom: 7
    });
}