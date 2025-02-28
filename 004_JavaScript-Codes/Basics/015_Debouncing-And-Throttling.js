// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Function to be executed
function logEvent(eventType) {
  console.log(
    `${eventType} event triggered at`,
    new Date().toLocaleTimeString()
  );
}

// Creating debounced and throttled versions of the function
const debouncedLog = debounce(() => logEvent("Debounced"), 1000);
const throttledLog = throttle(() => logEvent("Throttled"), 1000);

// Event listeners (scroll event for example)
window.addEventListener("scroll", debouncedLog);
window.addEventListener("scroll", throttledLog);
