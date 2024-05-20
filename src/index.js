import { Stack } from './data-structures/stack.js';
import { Queue } from './data-structures/queue.js';
import { BinaryTree } from './data-structures/binaryTree.js';
import { Graph } from './data-structures/graph.js';
import { ListNode, LinkedList } from './data-structures/linkedList.js';
import { MinMaxStack } from './algorithmicProblems/maxMinStack.js';
import { isBST } from './algorithmicProblems/binarySearchTree.js';
import { dijkstra } from './algorithmicProblems/graphArgorithms/dijkstra.js';
import { bfsShortestPath } from './algorithmicProblems/graphArgorithms/breadthFirstSearch.js';
import { hasCycle } from './algorithmicProblems/hasCycle.js';

// Stack usage demonstration
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2

// Queue usage demonstration
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2

// Binary Tree usage demonstration
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.inOrder(); // Output: 3 5 7 10 15
console.log(binaryTree.search(7)); 
console.log(isBST(binaryTree.root)); // Output: true

// Graph usage demonstration
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
console.log(graph.dfs('A')); // Output: [ 'A', 'C', 'B' ]
console.log(graph.bfs('A')); // Output: [ 'A', 'B', 'C' ]

// Linked List usage demonstration
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
console.log(linkedList.search(2)); // Output: ListNode { value: 2, next: ListNode { value: 3, next: null } }
linkedList.delete(2);
console.log(linkedList.search(2)); // Output: null

// Min/Max Stack usage demonstration
const minMaxStack = new MinMaxStack();
minMaxStack.push(1);
minMaxStack.push(5);
minMaxStack.push(3);
console.log(minMaxStack.getMin()); // Output: 1
console.log(minMaxStack.getMax()); // Output: 5


// Linked List Cycle Detection usage demonstration
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1; // Create a cycle
console.log(hasCycle(node1)); // Output: true