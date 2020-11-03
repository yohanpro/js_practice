const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  console.log(secondRatio, minuteRatio, hourRatio);

  secondHand.style.transform = `rotate(${secondRatio * 360}deg)`;
  minHand.style.transform = `rotate(${minuteRatio * 360}deg)`;
  hourHand.style.transform = `rotate(${hourRatio * 360}deg)`;
}
setInterval(setClock, 1000);
