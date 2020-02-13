// Event oriented node modules

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", () => {
  console.log("my event has occurred");
});

eventEmitter.emit("myEvent");

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let alex = new Person("Alex");
let chris = new Person("Chris");
chris.on("name", () => {
  console.log("my name is " + chris.name);
});
alex.on("name", () => {
  console.log("my name is " + alex.name);
});

alex.emit("name");
chris.emit("name");
