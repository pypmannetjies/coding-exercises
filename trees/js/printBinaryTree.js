/* eslint-disable no-unused-vars */
class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function printBinaryTree (node) {
  const depth = getDepth(node, 0)
  let str = ''
  let currentNode = node
  let currentIndex = 0
  let nodesToPrint = []
  let currentDepth = 0
  nodesToPrint.push({ depth: currentDepth, node: currentNode })
  while (true) {
    if (currentNode.left || currentNode.right) {
      currentDepth++
    }

    if (currentNode.left && !currentNode.left.visited) {
      currentNode.left.visited = true
      nodesToPrint.push({ depth: currentDepth, node: currentNode.left })
    }

    if (currentNode.right && !currentNode.right.visited) {
      currentNode.right.visited = true
      nodesToPrint.push({ depth: currentDepth, node: currentNode.right })
    }

    if (currentIndex >= nodesToPrint.length) break

    currentDepth = nodesToPrint[currentIndex].depth
    currentNode = nodesToPrint[currentIndex++].node
  }

  let lastDepth = -1
  nodesToPrint.forEach((item, index) => {
    if (item.depth !== lastDepth) {
      lastDepth = item.depth
      str += '\n' + getSpaces(Math.pow(2, depth - item.depth - 1)) + item.node.value
    } else {
      str += getSpaces(Math.pow(2, depth - item.depth)) + item.node.value
    }
  })

  console.log(str)
}

function getSpaces (numSpaces) {
  return ' '.repeat(numSpaces)
}

function getDepth (node, sum) {
  if (node === null) return 0

  const leftDepth = getDepth(node.left, sum)
  const rightDepth = getDepth(node.right, sum)

  if (leftDepth > rightDepth) return leftDepth + 1
  return rightDepth + 1
}

module.exports = printBinaryTree

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

// console.log(getDepth(a, 0)) // 5
// console.log(getDepth(c, 0)) // 2

// printBinaryTree(i, 5, 0)
