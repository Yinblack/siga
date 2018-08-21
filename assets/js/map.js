function initMap() {
  if ($('#map').length) {
    var myLatLng = {lat: 20.5715841, lng: -100.3208074};
    var styleArray = [
      {
        featureType: "all",
        stylers: [
         { saturation: -1500 }
        ]
      },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#F5811F" },
          { saturation: -2500 }
        ]
      }
    ];
    var image = window.base_url+'assets/img/locationPin.png';
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      styles: styleArray,
      zoom: 13,
      zoomControl: true,
      scaleControl: true
    });

    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'MONT - Tecnología de vanguardia en seguridad.',
      icon: image
    });
  }
}
