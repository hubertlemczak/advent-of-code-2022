const fs = require('fs/promises');

async function main(input) {
  const data = (await fs.readFile(input, 'utf8')).trim().split('\r\n');

  const fileSystem = createFileSystem(data);

  return fileSystem;
}

function createFileSystem(data, dir = {}) {
  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    const commandLine = line.startsWith('$');

    if (commandLine) {
      const [, command, arg] = line.split(' ');

      if (command === 'cd') {
        if (arg === '..') {
          return data.slice(i + 1);
        }

        if (!dir[arg]) {
          dir[arg] = {};
        }

        data = createFileSystem(data.slice(i + 1), dir[arg]);
        i = -1;
      }
    } else {
      const [details, name] = line.split(' ');

      if (details === 'dir') {
        dir[name] = {};
      } else {
        dir[name] = { size: details };
      }
    }
  }

  return dir;
}

// main('./day-7/input.txt').then(console.log);
main('./day-7/spec/test-input.txt');

module.exports = main;
