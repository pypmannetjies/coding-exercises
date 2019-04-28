/* eslint-disable no-unused-vars */
/**
 * Minimal tree
 *
 * Critical information:
 *
 * * Items are unique
 * * Integers only
 * * Array has already been sorted - increasing order
 */

const printBinaryTree = require('./printBinaryTree')

class Node {
  constructor (value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

const testArray = [0, 4, 6, 7, 8, 9]

function createMinTree (arr) {
  const pivot = Math.floor(arr.length / 2)
  const item = arr[pivot]
  const root = new Node(item)
  if (arr.length === 1) return root

  if (pivot > 0) {
    const leftArr = arr.slice(0, pivot)
    root.left = createMinTree(leftArr)
  }

  if (pivot + 1 < arr.length) {
    const rightArr = arr.slice(pivot + 1)
    root.right = createMinTree(rightArr)
  }

  return root
}

printBinaryTree(createMinTree(testArray))
