const fs = require('fs/promises');

async function main() {
  const data = await fs.readFile('./day-3/input.txt', 'utf-8');
  const puzzleStrategy = data.split('\r\n');

  let prioritySum = 0;

  for (let i = 0; i < puzzleStrategy.length; i += 3) {
    const rucksackOne = puzzleStrategy[i];
    const rucksackTwo = puzzleStrategy[i + 1];
    const rucksackThree = puzzleStrategy[i + 2];

    for (let item of rucksackOne) {
      const resOne = rucksackTwo.includes(item);
      const resTwo = rucksackThree.includes(item);

      if (resOne && resTwo) {
        const itemCharValue = item.charCodeAt(0);
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
