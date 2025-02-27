// function changeBackGroundColorBlack() {
//   document.body.style.backgroundColor = "black";
// }

// function changeBackGroundColorWhite() {
//   document.body.style.backgroundColor = "white";
// }

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function setDate() {
  let currentDate = new Date();
  let hours = currentDate.getHours() % 12 || 12;
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // display time
  timeElement.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.innerHTML = currentDate.toLocaleDateString(undefined, options);
}
setInterval(setDate, 1000);
setDate();

function changeBackGroundColor(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
  const currentBackgroundColor = document.body.style.backgroundColor;
  console.log(document.body.style.backgroundColor);
  //   console.log("The Theme Mode Button Is Clicked");

  if (!currentBackgroundColor || currentBackgroundColor == "white") {
    changeBackGroundColor("black");
    document.body.style.color = "white";
  } else {
    changeBackGroundColor("white");
    document.body.style.color = "black";
  }
});

// changeBackGroundColor();
