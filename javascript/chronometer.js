class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    let start = new Date().getTime();
    this.intervalId = setInterval(() => {
      let now = new Date().getTime();
      this.currentTime = now - start;
      callback();
    }, 25);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 1000) - this.getMinutes() * 60;
  }

  getMilliseconds() {
    return (
      this.currentTime - this.getMinutes() * 60000 - this.getSeconds() * 1000
    );
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0').slice(0, 2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
