// Minimal tree - create a binary search tree of minimal height from a sorted array of unique integers

import printBinaryTree from './utilities/printBinaryTree'
import Node from './structures/binarySearchTree/Node.mjs'

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

const testArray = [0, 4, 6, 7, 8, 9]

printBinaryTree(createMinTree(testArray))
