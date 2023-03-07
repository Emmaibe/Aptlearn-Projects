// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (var log of dairy) {
    console.log(log);
  }
}
logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (var birdProp of Object.keys(bird)) {
    console.log(birdProp, ":", bird[birdProp]);
  }
}
birdCan();
// Task 3
function animalCan() {
  for (var prop in bird) {
    console.log(prop, ":", bird[prop]);
  }
}
animalCan();
