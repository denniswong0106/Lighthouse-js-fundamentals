let yourAge = 1;  //here is input for your age.
let school = ''; //this will be filled by function whichSchool.


const whichSchool = age => {
  if (age < 13) {
    //for under 13 year olds.
    school = 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    // for age between 13 to 18 years old, inclusive.
    school = 'Secondary School';
  } else {
    // all other ages.
    school = 'Lighthouse Labs';
  }
}

whichSchool(yourAge);

console.log(school);