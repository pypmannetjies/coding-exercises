function doQuickSort (arr) {
  return quickSort(arr, 0, arr.length - 1)
}

function quickSort (arr, start, end) {
  const pivot = arr[Math.floor((start + end) / 2)]
  if (start >= end) return arr

  var leftIndex = start
  var rightIndex = end
  while (true) {
    while (arr[leftIndex] < pivot) leftIndex++

    while (arr[rightIndex] > pivot) rightIndex--

    if (leftIndex > rightIndex) break

    const tmp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = tmp
    leftIndex++
    rightIndex--
  }

  quickSort(arr, start, leftIndex - 1)
  quickSort(arr, leftIndex + 1, end)

  return arr
}

console.log(doQuickSort([5, 9, 3, 2, 1, 8, 0]))
console.log(doQuickSort([2, 1]))
console.log(doQuickSort([1, 1]))
console.log(doQuickSort([5, 5, 5, 5]))
