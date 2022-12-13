const fs = require('fs/promises');

async function main() {
  const data = (await fs.readFile('./day-6/input.txt', 'utf8')).trim();

  let markerLength = 4;

  for (let i = 0; i < data.length; i++) {
    const marker = new Set(data.substring(i, i + markerLength));

    if (marker.size === markerLength) {
      return i + markerLength;
    }
  }
}

main().then(console.log);
