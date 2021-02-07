const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (array) {
  // create array variable for appropriate venues.
  let goodStations = [];
  // loop through all the possible stations 
  for (i = 0; i < array.length; i++) {
    if (array[i][1] >= 20) {
      if ((array[i][2] === 'school') || (array[i][2] === 'community centre')) {
        goodStations.push(array[i][0]);
      };
    };
  }
  return goodStations;
}

console.log(chooseStations(stations));