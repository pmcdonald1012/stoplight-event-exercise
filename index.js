let controls = document.getElementById('controls');
let bulbs = document.getElementsByClassName('bulb')


//stopLight///////////////////////////////////////////
let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');

stopButton.addEventListener("click", () => {
  if (stopLight.classList.contains('stop')) {
    stopLight.classList.remove("stop")
    console.log(stopButton.innerText + ' bulb off')
  } else {
    stopLight.classList.add('stop');
    console.log(stopButton.innerText + ' bulb on')
  }
})

stopButton.addEventListener('mouseenter', () => {
  console.log('Entered Stop Button')
})
stopButton.addEventListener('mouseleave', () => {
  console.log('Left Stop Button');
})

//slowLight//////////////////////////////////////////
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');


slowButton.addEventListener('click', () => {
  if (slowLight.style.backgroundColor === "yellow") {
    slowLight.style.backgroundColor = "black"
    console.log(slowButton.innerText + ' bulb off')
  } else {
    slowLight.style.backgroundColor = "yellow"
    console.log(slowButton.innerText + ' bulb on')
  }
})

slowButton.addEventListener('mouseenter', () => {
  console.log('Entered Slow Button')
})
slowButton.addEventListener('mouseleave', () => {
  console.log('Left Slow Button');
})

//goLight///////////////////////////////////////////
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');


goButton.addEventListener('click', () => {
 
  if (goLight.style.backgroundColor === "green") {
    goLight.style.backgroundColor = "black"
    console.log(goButton.innerText + ' bulb off')
  } else {
    goLight.style.backgroundColor = "green"
    console.log(goButton.innerText + ' bulb on')
  }
  
})

goButton.addEventListener('mouseenter', () => {
  console.log('Entered Go button');
})

goButton.addEventListener('mouseleave', () => {
  console.log('Left Go button');
})





