const datePlace = document.querySelector(".card__time");

function getTime() {
  const date = Date.now();
  // datePlace.innerHTML = new Date(date).toLocaleString();
  datePlace.innerHTML = date;
}
setInterval(getTime, 1000);
