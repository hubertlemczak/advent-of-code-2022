const fs = require('fs');

fs.readFile('./day-1/input-a.txt', 'utf-8', (err, data) => {
  const elfCalories = data.split('\r\n');

  const totalElfCalories = [];

  let currentCalories = 0;
  for (let i = 0; i < elfCalories.length; i++) {
    const curr = elfCalories[i];
    if (curr === '') {
      totalElfCalories.push(currentCalories);
      currentCalories = 0;
      continue;
    }

    currentCalories += Number(curr);
  }

  totalElfCalories.sort((a, b) => b - a);

  console.log(totalElfCalories[0] + totalElfCalories[1] + totalElfCalories[2]);
});
