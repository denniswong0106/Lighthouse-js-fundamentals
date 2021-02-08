// ageCalculator() takes 3 para, returns string of the 3 paras
// so i need to write a function that takes a yearofbirth and current year, and finds the age

let age = (yearOfBirth, currentYear) => currentYear - yearOfBirth;

let ageCalculator = (name, yearOfBirth, currentYear) => {
  let output = '';
  output = `${name} is ${age(yearOfBirth, currentYear)} years old.`;
  return output;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));