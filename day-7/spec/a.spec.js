const main = require('../a');

describe('', () => {
  it('day 7 a', async () => {
    const result = await main('./day-7/spec/test-input.txt');

    expect(result).toEqual({
      '/': {
        a: {
          e: {
            i: {
              size: '584',
            },
          },
          f: {
            size: '29116',
          },
          g: {
            size: '2557',
          },
          'h.lst': {
            size: '62596',
          },
        },
        'b.txt': {
          size: '14848514',
        },
        'c.dat': {
          size: '8504156',
        },
        d: {
          j: {
            size: '4060174',
          },
          'd.log': {
            size: '8033020',
          },
          'd.ext': {
            size: '5626152',
          },
          k: {
            size: '7214296',
          },
        },
      },
    });
  });
});
