// This function is the helper function to help compare the relative order of wall's appearance
const compareElements = (wall1, wall2) => {
  if (wall1[2] < wall2[2]) {
    return -1;
  } if (wall1[2] === wall2[2]) {
    return 0;
  }
  return 1;
};

// This function actally sorts the wall on the basis of their appearance time
const sortWallsByTime = (arrayOfWalls) => {
  const copyOfarrayOfWalls = arrayOfWalls;
  copyOfarrayOfWalls.sort(compareElements);
  return copyOfarrayOfWalls;
};

// This function builds the blocked path for a couple
const buildBlockedPath = (arrayOfWalls, walkStartTime) => {
  // End of wall stores the last extent of wall
  let endOfLastWall = 0;
  // This part calculates the end of last wall
  arrayOfWalls.forEach((x) => {
    if (x[1] > endOfLastWall) {
      [, endOfLastWall] = x;
    }
  });
  // Initializing the array with 0 till the end of path
  const blockedPath = Array(endOfLastWall + 1).fill(0);
  // Filling all the section of path with blocker as 1
  arrayOfWalls.forEach((wall) => {
    const currentLocation = Math.max((wall[2] - walkStartTime), 0);
    let [blockerStart] = wall;
    if (blockerStart < currentLocation) {
      blockerStart = currentLocation;
    }
    blockedPath.fill(1, blockerStart, wall[1]);
  });
  return blockedPath;
};

module.exports = { compareElements, sortWallsByTime, buildBlockedPath };
