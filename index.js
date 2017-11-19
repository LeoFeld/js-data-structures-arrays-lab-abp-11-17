// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
  return newArray = [...drivers, "Broom"];
}

function prependDriver() {
  return anotherArray = ["Arnold", ...drivers];
}

function removeLastDriver() {
  drivers.slice("Garfield");
}
