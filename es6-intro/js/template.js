const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Doland Trump`;

const multiLine = 'First Line Text \n' +
    'Second Line of Code \n' +
    'Third Line of Text \n' +
    'Fourth Line of String';
// console.log(multiLine);

const newMultiLine = `
First line text
Second line of code
Third line of text
Fourth line of string
`
// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

const newSummary = `sum of: ${a} and ${nums.length} is: ${a+b}`;
console.log(newSummary);