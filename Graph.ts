
export class Graph {
    matrix : Array<Array<number>>
    constructor(matrix: Array<Array<number>>) {
        this.matrix = matrix;
    }
    DFS(): Array<number> {
        let stack : Array<number> = [];
        let vertices : Array<Boolean> = Array(this.matrix.length);
        let traversedVertices = Array<number>();
        vertices.fill(false);
        vertices[0] = true;
        stack.push(0);
        traversedVertices.push(0);
        while(stack.length != 0) {
            let currentVertex = stack[stack.length - 1] as number;
            for(let vertex in this.matrix[currentVertex]) {
                let vertexInt = parseInt(vertex);
                if(this.matrix[currentVertex][vertexInt] != 0 && vertices[vertexInt] == false) {
                    stack.push(vertexInt);
                    traversedVertices.push(vertexInt);
                    vertices[vertexInt] = true;
                    break;
                }
                if(vertexInt == this.matrix[currentVertex].length - 1)
                    stack.pop();
            }
        }
        return traversedVertices;
    }
    BFS(): Array<number> {
        let queue = new Array<number>();
        let vertices = new Array<Boolean>(this.matrix.length);
        let traversedVertices = new Array<number>();
        vertices.fill(false);
        vertices[0] = true;
        traversedVertices.push(0);
        let currentVertex: number | undefined = 0;
        while (typeof currentVertex != 'undefined') {
            for(let vertex in this.matrix[currentVertex]){
                let vertexInt = parseInt(vertex);
                if(this.matrix[currentVertex][vertex]!=0 && vertices[vertexInt] == false) {
                    queue.push(vertexInt);
                    vertices[vertexInt] = true;
                    traversedVertices.push(vertexInt);
                }
            }
            currentVertex = queue.shift();
        }
        return traversedVertices;
    }
}
