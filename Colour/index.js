let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let message = document.getElementById("message");
let button = document.getElementById("btn")
let colorDiv = document.querySelector(".colorchange")

const hex = (color) => {
    let number = parseInt(color.value)
    let hexVal = number.toString(16);
return hexVal.length < 2 ? `0${hexVal}` : hexVal;

}

// console.log(hex("123"))


const colorChange = () => {

  if(red.value === '' || green.value === '' || blue.value === ''){
    message.innerHTML = 'Please enter a value for each colour';
  }else if (red.value > 255 || green.value > 255 || blue.value > 255){
    message.innerHTML = 'Please enter a value less than or equal to 255';
  }else if (red.value < 0 || green.value < 0 || blue.value < 0){
    message.innerHTML = 'Negative values not allowed';
  }else {
  let bgColor = `#${hex(red)}${hex(green)}${hex(blue)}`
  colorDiv.style.backgroundColor = bgColor
  message.innerHTML = `The hex value is: ${bgColor}`
  message.style.color= '#000';
  }
  
  setTimeout(() => message.remove(), 3000);

  red.value =""
  green.value =""
  blue.value =""
}

button.addEventListener("click", colorChange)