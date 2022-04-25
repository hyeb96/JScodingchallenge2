/* HARD: Given the information below for Tom and Jerry.
● Tom - height:  9in mass: 8 g
● Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

const tomBMI = tomMass / tomHeight ** 2;
const jerryBMI = jerryMass / jerryHeight ** 2;

console.log(tomBMI, jerryBMI);

let BMI = tomBMI > jerryBMI;
console.log(`Is Tom's BMI higher than Jerry's? ${BMI}`);