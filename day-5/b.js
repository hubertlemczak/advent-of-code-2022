const fs = require('fs/promises');

async function main() {
  const data = await fs.readFile('./day-5/input.txt', 'utf8');
  const dataArr = data.trim().split('\r\n');

  const stackData = dataArr.slice(0, dataArr.indexOf('') - 1);
  const stepsData = dataArr.slice(dataArr.indexOf('') + 1);

  const columnNumbers = dataArr
    .slice(dataArr.indexOf('') - 1, dataArr.indexOf(''))[0]
    .replaceAll(' ', '')
    .split('');
  const columnLength = Number(columnNumbers[columnNumbers.length - 1]);

  const stack = stackData.reduce(
    (acc, row) => {
      const stackRow = row.split(' ');
      const newAcc = [...acc];
      let currCol = -1;

      for (let i = 0; i < stackRow.length; i++) {
        if (!stackRow[i]) {
          currCol += 0.25;
          continue;
        }
        currCol++;
        newAcc[currCol].push(stackRow[i]);
      }

      return newAcc;
    },
    Array.from({ length: columnLength }, () => Array().fill([]))
  );

  for (let step of stepsData) {
    const [, num, , from, , to] = step.split(' ');

    const items = stack[from - 1].splice(0, num);
    stack[to - 1].unshift(...items);
  }

  let final = '';
  for (let column of stack) {
    final += column[0].charAt(1);
  }

  return final;
}

main().then(console.log);
