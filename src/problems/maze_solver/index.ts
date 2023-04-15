import { Point } from "./interface"

const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [-1, 0]
]

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    endPoint: Point,
    seen: boolean[][],
    path: Point[]
): boolean => {
    // Base Cases
    // 1. hit a wall
    if (maze[curr.y][curr.x] === wall) return false

    // Reach the end
    if (curr.x === endPoint.x && curr.y === endPoint.y) {
        path.push(endPoint)
        return true
    }

    // Off the map  
    if (curr.x < 0 || curr.x > maze[0].length - 1 ||
        curr.y < 0 || curr.y > maze.length - 1)
        return false

    // We've already seen it
    if (seen[curr.y][curr.x]) return false

    // Recursive cases
    // Pre
    path.push(curr)

    // Recursion
    for (let i = 0; i < dir.length; i++) {
        if (walk(maze, wall, {
            x: curr.x + dir[i][0],
            y: curr.y + dir[i][1]
        }, endPoint, seen, path)) {
            seen[curr.y][curr.x] = true
            return true
        }
    }

    // Post
    path.pop()

    return false
}

const maze_solver = (
    maze: string[],
    wall: string,
    startPoint: Point,
    endPoint: Point,
) => {

    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; i++) {
        const temp = new Array(maze[0].length).fill(false)
        seen.push(temp)
    }

    walk(maze, wall, startPoint, endPoint, seen, path)

    return path
}

export default maze_solver
