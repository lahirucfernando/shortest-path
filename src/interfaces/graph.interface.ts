export interface Graph {
    [node: string]: {
        [neighbor: string]: number;
    };
}
