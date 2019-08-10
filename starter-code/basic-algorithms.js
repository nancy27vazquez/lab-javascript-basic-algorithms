// Names and Input
let driver = "Michael Jackson";
console.log(`The driver's name is ${driver}.`);
let navigator = prompt("Hey, navigator! What's your name?");
console.log(`The navigator's name is ${navigator}.`);

//Conditionals
if(driver.length > navigator.length) {
  console.log(`The Driver has the longest name, it has ${driver.length} characters `);
} else if (navigator.length > driver.length) {
  console.log(`Yo, navigator got the longest name, it has ${navigator.length} characters`)
} else (
  console.log(`wow, you both got equally long names, ${driver.length} characters!!`)
)

// Loops
console.log(driver.split('').join(' ').toUpperCase());
console.log(navigator.split('').reverse().join(''));

// Lexicographic


// Lorem ipsum generator
