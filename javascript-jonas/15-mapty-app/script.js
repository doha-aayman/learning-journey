("use strict");

const form = document.querySelector(".form");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--distance");
const inputType = document.querySelector('.form__input--typez')

let map;
let mapEvent;
////////////////////////////////////////////////////////////////////////////////

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];
      map = L.map("map").setView(coords, 12);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      map.on("click", function (mapE) {
        form.classList.remove("hidden");
        inputDistance.focus();
        mapEvent = mapE;
      });
    },
    function () {
      alert("could not get your podition");
    },
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const { lat, lng } = mapEvent.latlng;

  //clear input fields
  inputCadence.value =
    inputDistance.value =
    inputDuration.value =
    inputElevation.value =
      "";

      //display marker
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        mimWidth: 250,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      }),
    )
    .setPopupContent("workout")
    .openPopup();
});
