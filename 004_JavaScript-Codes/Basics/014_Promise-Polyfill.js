class MyPromise {
  constructor(executorFn) {
    this._state = "pending"; // Initial state of the promise
    this._successCallbacks = []; // Stores success callbacks for resolution
    this._errorCallbacks = []; // Stores error callbacks for rejection
    this._finallyCallbacks = []; // Stores callbacks to be executed in finally

    this.value = undefined; // Stores the resolved value

    // Execute the function passed to the promise with resolver and rejector functions
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    // If the promise is already resolved, execute the callback immediately
    if (this._state == "fulfilled") {
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
      cb(this.value);
      return this;
    }

    // Store the success callback to execute later when resolved
    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    // If the promise is already rejected, execute the callback immediately
    if (this._state == "rejected") {
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
      cb();
      return this;
    }

    // Store the error callback to execute later when rejected
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    // If the promise is already settled, execute the callback immediately
    if (this._state !== "pending") {
      cb();
      return this;
    }

    // Store the finally callback to execute when settled
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(value) {
    console.log(
      `Fulfilling Promise, Running ${this._successCallbacks.length} callbacks`
    );
    this.value = value; // Store resolved value
    this._state = "fulfilled"; // Update state to fulfilled

    // Execute all stored success callbacks
    this._successCallbacks.forEach((cb) => cb(value));

    // Execute all stored finally callbacks
    this._finallyCallbacks.forEach((cb) => cb());
  }

  rejectorFunction(err) {
    this._state = "rejected"; // Update state to rejected

    // Execute all stored error callbacks
    this._errorCallbacks.forEach((cb) => cb(err));

    // Execute all stored finally callbacks
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

// Function to create a promise that resolves instantly
function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    resolve("Hahaha"); // Resolving immediately without waiting
  });
  return p;
}

const p = wait(5); // Creating a new promise

console.log("Registering Callbacks");

// Registering multiple callbacks to test promise functionality
p.then((e) => console.log(`V1 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(`V1 Rejected after 5 sec`))
  .finally(() => console.log(`V1 Mei toh harr baar chalunga`));

p.then((e) => console.log(`V2 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(`V2 Rejected after 5 sec`))
  .finally(() => console.log(`V2 Mei toh harr baar chalunga`));
