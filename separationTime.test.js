const { compareElements, sortWallsByTime, buildBlockedPath } = require('./separationTime');

describe('compareElements () :', () => {
  it('should return -1 if two arrays are sorted in ascending order by their third element', () => {
    expect(compareElements([1, 2, 3], [2, 3, 4])).toEqual(-1);
  });
  it('should return 0 if two arrays have equal key for comparision', () => {
    expect(compareElements([1, 2, 3], [10, 13, 3])).toEqual(0);
  });
  it('should return 1 if two arrays are sorted in descending order by their third element', () => {
    expect(compareElements([1, 2, 3], [10, 13, 1])).toEqual(1);
  });
});

describe('sortWallsByTime () :', () => {
  const input = [[1, 3, 2], [7, 1, 10], [1, 4, 1], [5, 4, 3]];
  const output = [[1, 4, 1], [1, 3, 2], [5, 4, 3], [7, 1, 10]];
  it('should return the elements sorted by their third element', () => {
    expect(sortWallsByTime(input)).toEqual(output);
  });
  const input1 = [[7, 1, 10], [5, 4, 3], [1, 3, 2], [1, 4, 1]];
  const output1 = [[1, 4, 1], [1, 3, 2], [5, 4, 3], [7, 1, 10]];
  it('should return the elements sorted by their thirdelement which were reverse sorted', () => {
    expect(sortWallsByTime(input1)).toEqual(output1);
  });
  const input2 = [[1, 4, 1], [1, 3, 2], [5, 4, 3], [7, 1, 10]];
  const output2 = [[1, 4, 1], [1, 3, 2], [5, 4, 3], [7, 1, 10]];
  it('should return the array which was already sorted', () => {
    expect(sortWallsByTime(input2)).toEqual(output2);
  });
});

describe('buildBlockedPath () :', () => {
  it('should return an array representing the points where couple do not see each other', () => {
    const input1 = [[5, 7, 3], [2, 5, 4], [3, 6, 5]];
    const input2 = 0;
    const output = [0, 0, 0, 0, 1, 1, 1, 0];
    expect(buildBlockedPath(input1, input2)).toEqual(output);
  });
  it('should return an array representing the points where couple do not see each other', () => {
    const input1 = [[5, 7, 3], [2, 5, 4], [3, 6, 5]];
    const input2 = 1;
    const output = [0, 0, 0, 1, 1, 1, 1, 0];
    expect(buildBlockedPath(input1, input2)).toEqual(output);
  });
  it('should return an array representing the points where couple do not see each other', () => {
    const input1 = [[5, 7, 3], [2, 5, 4], [3, 6, 5]];
    const input2 = 2;
    const output = [0, 0, 1, 1, 1, 1, 1, 0];
    expect(buildBlockedPath(input1, input2)).toEqual(output);
  });
});
