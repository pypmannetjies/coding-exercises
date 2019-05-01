// Without array slices

function mergeSort (arr) {
  return _mergeSort(arr, new Array(arr.length), 0, arr.length - 1)
}

function _mergeSort (arr, helper, low, high) {
  if (low >= high) return arr

  // Find the place to cut the array in half
  const middle = Math.floor((low + high) / 2)

  // Sort the 2 halves
  _mergeSort(arr, helper, low, middle)
  _mergeSort(arr, helper, middle + 1, high)

  // Merge the sorted halves
  merge(arr, helper, low, middle, high)
  return arr
}

function merge (arr, helper, low, middle, high) {
  // Create a copy of arr
  helper = [...arr]

  let helperLeft = low
  let helperRight = middle + 1
  let current = low

  // Starting from the "low" index, copy either from the left or the right array
  // Left if the value is smaller than the right
  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      arr[current] = helper[helperLeft]
      helperLeft++
    } else {
      arr[current] = helper[helperRight]
      helperRight++
    }
    current++
  }

  // helperLeft is now the point at which the loop stopped
  // But we may have missed some values at the end of the left list because we ran out of values on the right
  // We need to copy the rest of the values
  const remaining = middle - helperLeft
  for (let index = 0; index <= remaining; index++) {
    arr[current + index] = helper[helperLeft + index]
  }
}

console.log(mergeSort([5, 9, 3, 2, 1, 8, 0]))
console.log(mergeSort([3, 2, 1]))
console.log(mergeSort([1]))
console.log(mergeSort([5, 5, 5, 5]))
