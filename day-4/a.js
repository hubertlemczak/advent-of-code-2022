const fs = require('fs/promises');

async function main() {
  const data = await fs.readFile('./day-4/input.txt', 'utf8');
  const elfPairs = data.trim().split('\r\n');

  let overlappingPairsSum = 0;

  for (let pairStr of elfPairs) {
    const pair = pairStr.split(',');
    const [l1, l2] = pair[0].split('-');
    const [r1, r2] = pair[1].split('-');

    if (Number(l1) <= Number(r2) && Number(l2) >= Number(r1)) {
      overlappingPairsSum++;
    }
  }

  return overlappingPairsSum;
}

main().then(console.log);
