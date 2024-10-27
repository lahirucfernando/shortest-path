
import { defineStore } from 'pinia';
import { graph } from '@/config/graph';
import { Graph } from '@/interfaces/graph.interface';
import { ShortestPathResult } from '@/interfaces/shortestPathResult.interface';


export const useGraphStore = defineStore('graph', {
  state: () => ({
    graph: <Graph>graph,
    fromNode: <string>'',
    toNode: <string>'',
    result: <ShortestPathResult | null>null,
  }),

  getters: {
    nodesList: (state) => Object.keys(state.graph),
  },

  actions: {
    calculateShortestPath() {
      if (!this.nodesList.includes(this.fromNode) || !this.nodesList.includes(this.toNode)) {
        throw new Error(`No path from ${this.fromNode} to ${this.toNode}`);
      }

      if (!this.fromNode || !this.toNode) return;

      const start = this.fromNode;
      const end = this.toNode;
      const distances: { [key: string]: number } = {};
      const visited: Set<string> = new Set();
      const previousNodes: { [key: string]: string | null } = {};

      // initialize distances to Infinity and previous nodes to null
      for (const node in this.graph) {
        distances[node] = Infinity;
        previousNodes[node] = null;
      }
      distances[start] = 0;

      const queue: [string, number][] = [[start, 0]];

      while (queue.length > 0) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = queue.shift()!;

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        // exit if we reach the destination
        if (currentNode === end) break;

        for (const neighbor in this.graph[currentNode]) {
          const distanceToNeighbor = this.graph[currentNode][neighbor];
          const totalDistance = currentDistance + distanceToNeighbor;

          if (totalDistance < distances[neighbor]) {
            distances[neighbor] = totalDistance;
            previousNodes[neighbor] = currentNode;
            queue.push([neighbor, totalDistance]);
          }
        }
      }

      const path: string[] = [];
      let currentNode: string | null = end;

      while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previousNodes[currentNode];
      }

      if (distances[end] === Infinity) {
        throw new Error(`No path from ${start} to ${end}`);
      }

      this.result = {
        path,
        distance: distances[end],
      };
    },

    resetResults() {
      this.result = null;
    },
  },
});
