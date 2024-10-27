import { setActivePinia, createPinia } from 'pinia';
import { useGraphStore } from '@/stores/graphStore';

describe('Graph Store - Calculate Shortest Path', () => {
  let graphStore: ReturnType<typeof useGraphStore>;

  beforeEach(() => {
    // Set up Pinia and store before each test
    setActivePinia(createPinia());
    graphStore = useGraphStore();
  });

  it('should handle no path between nodes correctly', () => {
    graphStore.fromNode = 'A';
    graphStore.toNode = 'Z'; // Node not in graph
    expect(() => graphStore.calculateShortestPath()).toThrowError('No path from A to Z');
  });

  it('should return zero distance for path from a node to itself', () => {
    graphStore.fromNode = 'A';
    graphStore.toNode = 'A';
    graphStore.calculateShortestPath();

    expect(graphStore.result?.path).toEqual(['A']);
    expect(graphStore.result?.distance).toBe(0);
  });

  it('should find the shortest path from A to I', () => {
    graphStore.fromNode = 'A';
    graphStore.toNode = 'I';
    graphStore.calculateShortestPath();

    expect(graphStore.result?.path).toEqual(['A', 'B', 'F', 'G', 'I']);
    expect(graphStore.result?.distance).toBe(15);
  });

  it('should find the shortest path from D to H', () => {
    graphStore.fromNode = 'D';
    graphStore.toNode = 'H';
    graphStore.calculateShortestPath();

    expect(graphStore.result?.path).toEqual(['D', 'G', 'H']);
    expect(graphStore.result?.distance).toBe(6);
  });

});
