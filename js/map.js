
function initMap() {
  var location = { lat: 42.075380, lng: -72.207500 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

