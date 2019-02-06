const { compareElements } = require('./separationTime');

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
