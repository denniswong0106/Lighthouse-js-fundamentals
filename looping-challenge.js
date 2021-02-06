for (let i = 100; i <= 200; i++) {
  /* here I add a conditional that evaluates if i is 
   divisible by 3 and 4, by 3 only, by 4 only, or by none. */

  if (!(i % 3) && !(i % 4)) { 
  // I use the falsy value of 0, and 'not' operator to evaluate to true.
    console.log('LoopyLighthouse');
  } else if (!(i % 4)) {
    console.log('Lighthouse');
  } else if (!(i % 3)) {
    console.log('Loopy');
  } else {
    console.log(i);
  }
}