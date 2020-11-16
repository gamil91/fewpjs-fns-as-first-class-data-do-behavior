/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  timeString = parseInt(timeString)
  if (timeString < 12) {
    return "Good Morning"
  }
  else if (timeString > 17){
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */


function displayMessage(string){
  greeting = document.querySelector('#greeting')
  greeting.innerText = string
}