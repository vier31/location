let button = document.getElementById("button")
let timestamp = document.getElementById("timestamp")
let longitude = document.getElementById("longitude")
let latitude = document.getElementById("latitude")
let speed = document.getElementById("speed")

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function displayLocation(pos) {
  timestamp.value = pos.timestamp
  longitude.value = pos.coords.longitude
  latitude.value = pos.coords.latitude
  speed.value = pos.coords.speed
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


function onClick() {
  console.log("Click")
  navigator.geolocation.getCurrentPosition(displayLocation, error, options)
}

button.addEventListener("click", onClick, false)