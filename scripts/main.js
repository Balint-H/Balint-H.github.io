const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/y_bot_echo.png') {
      myImage.setAttribute('src','images/full_body_chart.png');
    } else {
      myImage.setAttribute('src','images/y_bot_echo.png');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  }
  else {
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + '\'s main heading';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + '\'s main heading';;
}

myButton.onclick = function() {
  setUserName();
}