// With array slices

function mergeSort (arr) {
  if (!arr || arr.length <= 1) return arr

  const pivotIndex = Math.floor((arr.length) / 2)
  const leftArr = mergeSort(arr.slice(0, pivotIndex))
  const rightArr = mergeSort(arr.slice(pivotIndex))
  return merge(leftArr, rightArr)
}

function merge (leftArr, rightArr) {
  const mergedArr = new Array(leftArr.length + rightArr.length)
  let leftIndex = 0
  let rightIndex = 0
  for (let mergedIndex = 0; mergedIndex < mergedArr.length; mergedIndex++) {
    if (leftArr[leftIndex] <= rightArr[rightIndex] || rightIndex >= rightArr.length) {
      mergedArr[mergedIndex] = leftArr[leftIndex++]
    } else {
      mergedArr[mergedIndex] = rightArr[rightIndex++]
    }
  }
  return mergedArr
}

console.log(mergeSort([5, 9, 3, 2, 1, 8, 0]))
console.log(mergeSort([2, 1]))
console.log(mergeSort([1]))
console.log(mergeSort([5, 5, 5, 5]))
