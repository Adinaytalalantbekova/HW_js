const name = prompt("Как вас зовут?");
console.log("HELLO! " + name);

let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log( fruits.length)

let number = [23, 24, 345, 567, 899, 213];
console.log(number.length)

// ПЕРВЫЙ ВАРИАНТ
// const circles = document.querySelectorAll(".circle")
// console.log(circles)
// let activeLight = 0;
//
// setInterval(() => {
//     changeLight();
// }, 2000);
//
// function changeLight() {
//     circles[activeLight].className = "circle";
//     activeLight++;
//
//     if( activeLight > 2){
//         activeLight = 0;
//     }
//     const currentLight = circles[activeLight];
//     currentLight.classList.add(currentLight.getAttribute
//     ("color"))
// }


// ВТОРОЙ ВАРИАНТ
document.getElementById('AllButton').onclick = switchAll;
function illuminateRed() {
    clearLights();
    document.getElementById("StopLight").style.backgroundColor = "red"
}function illuminateYellow() {
    clearLights();
    document.getElementById("StopLight").style.backgroundColor = "yellow"
}function illuminateGreen() {
    clearLights();
    document.getElementById("StopLight").style.backgroundColor = "red"
}

function illuminateRedOrange() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('slowLight').style.backgroundColor = "orange";
}

function illuminateBlack() {
  clearLights();

}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

var clickTimes = 0;
var change = 1;

function switchAll() {
  clickTimes++;
  switch (clickTimes) {
    case 1:
      clearLights();
      document.getElementById('stopLight').style.backgroundColor = "red";
      break;
    case 2:
      clearLights();
      document.getElementById('stopLight').style.backgroundColor = "red";
      document.getElementById('slowLight').style.backgroundColor = "yellow";
      break;
    case 3:
      clearLights();
      document.getElementById('goLight').style.backgroundColor = "green";
      break;
    case 4:
      clearLights();
      document.getElementById('slowLight').style.backgroundColor = "yellow";
      break;
    case 5:
      clearLights();
      document.getElementById('stopLight').style.backgroundColor = "red";
      break;
    case 6:
      document.getElementById('stopLight').style.backgroundColor = "black";
      document.getElementById('slowLight').style.backgroundColor = "black";
      document.getElementById('goLight').style.backgroundColor = "black";
      break;

  }
}





