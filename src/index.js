/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    let next = preferences[i] - 1;
    if (next == i) {
      continue;
    }

    let next_Next = preferences[next] - 1;
    if (next == next_Next) {
      continue;
    }

    let next_Next_Next = preferences[next_Next] - 1;
    if (next_Next_Next == next_Next) {
      continue;
    }

    if (next_Next_Next == i) {
      count++;
    }
  }
  return count / 3;
};