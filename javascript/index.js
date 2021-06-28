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
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0] || 0;
  minUniElement.innerText = minutes[1] || 0;
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  if (secUniElement.innerText === '9' && secDecElement.innerText === '5') {
    secUniElement.innerText = 0;
    secDecElement.innerText = -1;
  }

  secDecElement.innerText = seconds[0] || 0;
  secUniElement.innerText = seconds[1] || 0;
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds().toString().slice(0, 2);

  milDecElement.innerText = milliseconds[0] || 0;
  milUniElement.innerText = milliseconds[1] || 0;
}

function printSplit() {
  const split = chronometer.split();
  const splitElement = document.createElement('li');
  splitElement.innerText = split;
  splitsElement.appendChild(splitElement);
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
    milDecElement.innerText = 0;
    milUniElement.innerText = 0;
    splitsElement.innerHTML = '';
  }

  btnRightElement.innerText === 'RESET' ? chronometer.reset() : printSplit();
});
