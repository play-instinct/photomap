mapboxgl.accessToken = 'pk.eyJ1IjoieWthdGVzcXVlIiwiYSI6ImNqN3V1bmphMjRlN3YyeHBrbDV0cmYyZzkifQ.IkEhhVc-aWVnuLsnNlf5Zg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9'
});

map.addControl(new mapboxgl.FullscreenControl());



map.on('load', function() {
    map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [0, 0]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.25
            }
        });
    });
});