class PriorityQueue {
  constructor() {
      this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

export function dijkstra(graph, start, finish) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  let path = [];
  let smallest;

  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in graph[smallest]) {
        let nextNode = graph[smallest][neighbor];
          let candidate = distances[smallest] + nextNode;
          let nextNeighbor = neighbor;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
      }
    }
  }

  return path.concat(smallest).reverse();
}