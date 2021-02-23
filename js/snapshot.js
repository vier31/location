let snapshotBtn = document.getElementById("snapshot-btn")
let timestamp = document.getElementById("snapshot-timestamp")
let longitude = document.getElementById("snapshot-longitude")
let latitude = document.getElementById("snapshot-latitude")
let speed = document.getElementById("snapshot-speed")

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
  navigator.geolocation.getCurrentPosition(displayLocation, error, options)
}

snapshotBtn.addEventListener("click", onClick, false)