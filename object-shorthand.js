// Part 1: Object Shorthand

const parrot = 'Parrot'
const colors = ['Red', 'Green', 'Blue', 'Yellow']
const talons = true

const bird = {
    name: parrot,
    colors: colors,
    talons: talons
}

console.log(bird)


const capital = 'Hanoi'
const continent = 'Asia'

const vietnam = {
    capital: capital,
    continent: continent
}

console.log(vietnam)


const wheelsCount = 4
const doorsCount = 4
const color = 'black'

const car = {
    wheelsCount: wheelsCount,
    doorsCount: doorsCount,
    color: color
}

console.log(car)


// Part 2: Destructing
function getAverage(obj) {
    return Math.floor((obj.x + obj.y + obj.z) / 3.0); 
}
  
getAverage({ x: 3.6, y: 7.8, z: 4.3 })


function getAddress(obj) {
    return obj.city === "HCMC" && obj.country === "Vietnam" && obj.street === "Ton Dan";
}
  
getAddress({
    city: "HCMC",
    country: "Vietnam",
    address: {
        number: 12,
        street: "Ton Dan",
        district: "4",
    },
})

function objectifyElements(arr) {
    const first = arr[0];
    const second = arr[1];
    const third = arr[2];
    const fourth = arr[3];
  
    return { first, second, third , fourth};
  }
  
  objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4


function getFoodItems() {
    const food = [
        ["carrots", "beans", "peas", "lettuce"],
        ["apples", "mangos", "oranges"],
        ["cookies", "cake", "pizza", "chocolate"],
    ];
    const carrots = food[0][0];
    const cookies = food[2][0];
    const mangos = food[1][2]; // CHANGE ME

    return { carrots, cookies, mangos } // CHANGE ME
}

getFoodItems().mangos === 'mangos'

function getHistoricPrices(index) {
    const bingo = index[0] || index[1] || index[2] // CHANGE ME
    return bingo
}
  
getHistoricPrices([true, false, true])

function getHistoricPrices(index) {
    const bingo = (index[0][0] || index[0][1]) && (index[1][0] || index[1][1]) // CHANGE ME
    return bingo
}
  
getHistoricPrices([[true, false], [false, true]])

function getHistoricPrices(index) {
    const bingo = index[0][0][0] // CHANGE ME
    return bingo
}
  
getHistoricPrices([[[true, false],[true, false]]])


function getHistoricPrices(index) {
    const bingo = index[0][0][0][0] === {} // CHANGE ME
    return bingo
}
  
getHistoricPrices([[[{}, {}]]])

// Part 3: Rest and Spread
function restParams(first, ...rest) {
    return first === 'first' && rest[0] === 'second'
}
  
console.log(restParams('first', ['second'])); // CHANGE ME


function restParams2(first, ...rest) {
    return first === 'first' && rest[0] === 'second' && rest[1] === 'third'
}
  
console.log(restParams2('first', ['second', 'third'])); // CHANGE ME


function restParams3(first, ...rest) {
    return first === "first" && rest[0] === "second" && rest[1] === "third" && rest[2] === undefined;
}
  
console.log(restParams3('first', ['second', 'third'])); // CHANGE ME


function restParams4(...rest) {
    return rest[0] === "first" && rest[1] === "second" && rest[2] === "third"; // CHANGE ME
}
  
console.log(restParams4("first", "second", "third"));


function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {};
    // CHANGE BELOW
    object = array.slice(6);
    // CHANGE ABOVE
  
    return object;
}

function findTheMax() {
    const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];
    return Math.max(arr1.concat(arr2));
}

function concatenateArrays() {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const result = arr1.concat(arr2.concat(arr3));
    return result;
}

function mergeObjects() {
    // what does this return?
    const obj1 = {
      a: "a from obj1",
      b: "b from obj1",
      c: "c from obj1",
      d: {
        e: "e from obj1",
        f: "f from obj1",
      },
    };
    const obj2 = {
      b: "b from obj2",
      c: "c from obj2",
      d: {
        g: "g from obj2",
        h: "h from obj2",
      },
    };
    const result = { ...obj1, ...obj2 };
    return (
      result.a === "YOUR_ANSWER" &&
      result.b === "YOUR_ANSWER" &&
      result.c === "YOUR_ANSWER" &&
      result.d.e === "YOUR_ANSWER" &&
      result.d.f === "YOUR_ANSWER" &&
      result.d.g === "YOUR_ANSWER" &&
      result.d.h === "YOUR_ANSWER"
    );
}

// Arrow function
function multiArgument() {
    // CHANGE BELOW
    let divide = (a,b) => a / b;
    return divide(40, 10);
}

