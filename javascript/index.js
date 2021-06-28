const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  console.log(minutes, minutes % 10);

  if (minutes && minutes % 10 === 0) {
    minUniElement.innerText = 0;
    minDecElement.innerText = Number(minDecElement.innerText) + 1;
  } else {
    minUniElement.innerText = Number(minUniElement.innerText) + 1;
  }
}

function printSeconds() {
  let seconds = chronometer.getSeconds();

  if (secUniElement.innerText === '9' && secDecElement.innerText === '5') {
    secUniElement.innerText = 0;
    secDecElement.innerText = -1;
  }

  if (seconds % 10 === 0) {
    secUniElement.innerText = 0;
    secDecElement.innerText = Number(secDecElement.innerText) + 1;
  } else {
    secUniElement.innerText = Number(secUniElement.innerText) + 1;
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.innerText === 'START' ? setStopBtn() : setStartBtn();
  btnLeftElement.innerText === 'START' ? setResetBtn() : setSplitBtn();
  btnLeftElement.innerText === 'START'
    ? chronometer.stop()
    : chronometer.start(printTime);
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
  }
  btnRightElement.innerText === 'RESET'
    ? chronometer.reset()
    : chronometer.split();
});
