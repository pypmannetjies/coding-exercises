import Node from '../structures/binarySearchTree/Node.mjs'

function printBinaryTree (node) {
  const height = getHeight(node, 0)
  let str = ''
  let currentNode
  let currentIndex = 0
  let currentDepth
  let previousDepth = -1
  const listOfNextNodes = [node]
  const listOfNodeDepths = [0]

  while (true) {
    if (currentIndex >= listOfNextNodes.length) break

    currentDepth = listOfNodeDepths[currentIndex]
    currentNode = listOfNextNodes[currentIndex++]

    if (currentDepth !== previousDepth) {
      previousDepth = currentDepth
      str += '\n' + getSpaces(height, currentDepth + 1)
    } else {
      str += getSpaces(height, currentDepth)
    }

    if (currentNode == null) {
      str += '*'
      continue
    } else {
      str += currentNode.value
    }

    if (!currentNode.left && currentNode.right) {
      listOfNextNodes.push(null)
      listOfNodeDepths.push(currentDepth + 1)
    }

    if (currentNode.left && !listOfNextNodes.includes(currentNode.left)) {
      listOfNextNodes.push(currentNode.left)
      listOfNodeDepths.push(currentDepth + 1)
    }

    if (!currentNode.right && currentNode.left) {
      listOfNextNodes.push(null)
      listOfNodeDepths.push(currentDepth + 1)
    }

    if (currentNode.right && !listOfNextNodes.includes(currentNode.right)) {
      listOfNextNodes.push(currentNode.right)
      listOfNodeDepths.push(currentDepth + 1)
    }
  }

  console.log(str)
}

function getSpaces (height, currentDepth) {
  const numSpaces = Math.pow(2, height - currentDepth) - 1
  return ' '.repeat(numSpaces)
}

function getHeight (node, sum) {
  if (node === null) return 0

  const leftDepth = getHeight(node.left, sum)
  const rightDepth = getHeight(node.right, sum)

  if (leftDepth > rightDepth) return leftDepth + 1
  return rightDepth + 1
}

export default printBinaryTree

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

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f
d.left = g
d.right = h
g.left = i

// console.log(getHeightBetween(a, a)) // 0
// console.log(getHeightBetween(a, i)) // 4
// console.log(getHeightBetween(a, c)) // 1

// printBinaryTree(a)
// printBinaryTree(f)
// printBinaryTree(d)
