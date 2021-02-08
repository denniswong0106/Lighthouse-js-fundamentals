const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (array) => {
  let outputArray = [0 ,0];

  for (let i of array) {
    if (i === 'north'){
      outputArray[1]++;
    } else if (i === 'south'){
      outputArray[1]--;
    } else if (i === 'east'){
      outputArray[0]++;
    } else {
      outputArray[0]--;
    }
  }
  return outputArray;
}

console.log(finalPosition(moves));