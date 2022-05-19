import { Graph } from './Graph'

let matrix : Array<Array<number>> = [
    [0,1,1,1,1,0,0,0,0],
    [1,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,1,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,1,0],
    [0,0,0,1,0,0,0,0,1],
    [0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0]
];
let graph = new Graph(matrix);

console.log(graph.DFS());
console.log(graph.BFS());