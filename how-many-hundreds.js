function howManyHundreds (num) {
  return Math.floor(num/100);
}

console.log(howManyHundreds(894));

console.log(howManyHundreds(1000), "=?", 9);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);