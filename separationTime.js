const compareElements = (wall1, wall2) => {
  if (wall1[2] < wall2[2]) {
    return -1;
  } if (wall1[2] === wall2[2]) {
    return 0;
  }
  return 1;
};

module.exports = { compareElements };
