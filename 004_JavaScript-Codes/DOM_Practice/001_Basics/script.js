// function changeBackGroundColorBlack() {
//   document.body.style.backgroundColor = "black";
// }

// function changeBackGroundColorWhite() {
//   document.body.style.backgroundColor = "white";
// }

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
