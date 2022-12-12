const fs = require('fs/promises');

async function main() {
  const data = await fs.readFile('./day-3/input.txt', 'utf-8');
  const puzzleStrategy = data.split('\r\n');

  let prioritySum = 0;

  for (let rucksack of puzzleStrategy) {
    const compartmentOne = rucksack.substring(0, rucksack.length / 2);
    const compartmentTwo = rucksack.substring(rucksack.length / 2);

    const splitCompartmentTwo = compartmentTwo.split('');

    for (let item of compartmentOne) {
      const foundItem = splitCompartmentTwo.find(itemType => itemType === item);

      if (foundItem) {
        const itemCharValue = foundItem.charCodeAt(0);
        const itemPriorityNumber =
          itemCharValue > 96 ? itemCharValue - 96 : itemCharValue - 38;

        prioritySum += itemPriorityNumber;
        break;
      }
    }
  }

  return prioritySum;
}

main().then(console.log);
