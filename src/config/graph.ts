import { Graph } from '@/interfaces/graph.interface';

export const graph: Graph = {
    A: { B: 4, C: 6 },
    B: { A: 4, F: 2 },
    C: { A: 6, D: 8 },
    D: { C: 8, E: 4, G: 1 },
    E: { B: 2, D: 4, F: 3, I: 8 },
    F: { B: 2, E: 3, G: 4, H: 6 },
    G: { D: 1, F: 4, H: 5, I: 5 },
    H: { F: 6, G: 5 },
    I: { E: 8, G: 5 },
};