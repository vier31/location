let trackingBtn = document.getElementById("tracking-btn")
let trackingTimestamp = document.getElementById("tracking-timestamp")
let trackingLongitude = document.getElementById("tracking-longitude")
let trackingLatitude = document.getElementById("tracking-latitude")
let trackingSpeed = document.getElementById("tracking-speed")

// let options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

function displayLocation(pos) {
  trackingTimestamp.value = pos.timestamp
  trackingLongitude.value = pos.coords.longitude
  trackingLatitude.value = pos.coords.latitude
  trackingSpeed.value = pos.coords.speed
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function startTracking() {
  navigator.geolocation.watchPosition(displayLocation, error, options)
}

snapshotBtn.addEventListener("click", startTracking, false)