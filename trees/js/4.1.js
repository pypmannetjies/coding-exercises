// Depth first search and breadth first search to determine whether a directed graph has a path
// from one node to another

// Graph setup

class Graph {
  constructor () {
    this.nodes = []
  }
}

class Node {
  constructor (name) {
    this.name = name
    this.adjacent = []
    this.visited = false
  }
}

const graph = new Graph()

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

//      +---+     +---+     +---+
// +--->+ B +<----+ A +---->+ C +---+
// |    +-+-+     +---+     +-+-+   |
// |      |                   ^     |
// |      v                   |     |
// |    +-+-+                 |     |
// |    | D +-----------------+     |
// |    +-+-+                       |
// |      |                         |
// |      v                         |
// |    +-+-+     +---+             |
// +----+ E +---->+ F +<------------+
//      +---+     +---+

a.adjacent = [b, c]
b.adjacent = [d]
c.adjacent = [f]
d.adjacent = [e, c]
e.adjacent = [b, f]
f.adjacent = []

graph.nodes = [a, b, c, d, e, f]

function resetGraph (graph) {
  for (const node of graph.nodes) {
    node.visited = false
  }
}

// Depth first

function searchDepthFirst (fromNode, toNode) {
  resetGraph(graph)
  return depthFirst(fromNode, toNode)
}

function depthFirst (fromNode, toNode) {
  console.debug(fromNode.name)
  if (fromNode === toNode) return true

  fromNode.visited = true
  let found = false
  for (const adjacent of fromNode.adjacent) {
    if (!adjacent.visited) found = depthFirst(adjacent, toNode)
    if (found) return true
  }

  return found
}

// Breadth first

function searchBreadthFirst (fromNode, toNode) {
  resetGraph(graph)
  return breadthFirst(fromNode, toNode)
}

function breadthFirst (fromNode, toNode) {
  let currentNode = fromNode
  let adjacents = [...currentNode.adjacent]
  let currentIndex = 0
  console.debug(currentNode.name)
  while (currentNode.adjacent && currentIndex < adjacents.length) {
    if (currentNode === toNode) return true
    if (currentNode.visited) continue
    currentNode.visited = true
    currentNode = adjacents[currentIndex++]
    adjacents = adjacents.concat(currentNode.adjacent)
    console.debug(currentNode.name)
  }
  return false
}

// Tests

// Depth first

console.log('Depth first | Route from A to F: ', searchDepthFirst(a, f)) // true
console.log('Depth first | Route from E to D: ', searchDepthFirst(e, d)) // true
console.log('Depth first | Route from C to D: ', searchDepthFirst(c, d)) // false
console.log('Depth first | Route from D to C: ', searchDepthFirst(d, c)) // true

// Breadth first

console.log('Breadth first | Route from A to F: ', searchBreadthFirst(a, f)) // true
console.log('Breadth first | Route from E to D: ', searchBreadthFirst(e, d)) // true
console.log('Breadth first | Route from C to D: ', searchBreadthFirst(c, d)) // false
console.log('Breadth first | Route from D to C: ', searchBreadthFirst(d, c)) // true
