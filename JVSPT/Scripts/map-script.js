getLocation()

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        fail()
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude)
    console.log("Longitude: " + position.coords.longitude)
}

function fail() {
    console.log("Geolocation is not supported by this browser.")
}