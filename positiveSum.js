function positiveSum(arr) {
  let result = 0
  for (num of arr) {
    if (num > 0) result += num
  }
  return result
}