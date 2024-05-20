export function bfsShortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === end) {
      return path;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
    }
  }

  return null; // No path found
}