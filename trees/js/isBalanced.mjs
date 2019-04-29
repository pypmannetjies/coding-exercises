import Node from './structures/binarySearchTree/Node.mjs'
import printBinaryTree from './utilities/printBinaryTree.mjs'

function isBalanced (root) {
  return getHeightOrNullIfUnbalanced(root) != null
}

function getHeightOrNullIfUnbalanced (node, sum = 0) {
  if (node === null) return -1

  const leftDepth = getHeightOrNullIfUnbalanced(node.left, sum)
  if (leftDepth === null) return null

  const rightDepth = getHeightOrNullIfUnbalanced(node.right, sum)
  if (rightDepth === null) return null

  if (Math.abs(rightDepth - leftDepth) > 1) return null

  return Math.max(leftDepth, rightDepth) + 1
}

// Tests

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')
const g = new Node('G')
const h = new Node('H')
const i = new Node('I')
const j = new Node('J')

a.left = b
a.right = c
b.left = d
b.right = e
d.left = g
d.right = h
e.left = f
c.left = i
i.left = j

printBinaryTree(a)
console.log(`Balanced? ${isBalanced(a)}`) // false

printBinaryTree(c)
console.log(`Balanced? ${isBalanced(c)}`) // false

printBinaryTree(d)
console.log(`Balanced? ${isBalanced(d)}`) // true

printBinaryTree(f)
console.log(`Balanced? ${isBalanced(f)}`) // true
