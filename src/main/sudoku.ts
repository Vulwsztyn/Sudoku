interface Neighbour {
  row: number
  col: number
}
export interface Node {
  row: number
  col: number
  neighbours: Neighbour[]
  possible: number[]
  value?: number
}
type Sudoku = number[][]
type Row = number[]
export function Sudoku() {
  this.trzy = () => 3
  this.generateNodes = (input: Sudoku) => {
    const nodes: Node[] = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!input[i][j]) {
          const neighbours: Neighbour[] = []
          const notPossible: Set<number> = new Set([])
          for (let l = 0; l < 9; l++) {
            if (input[i][l]) {
              notPossible.add(input[i][l])
            } else if (l != j) {
              neighbours.push({
                row: i,
                col: l,
              })
            }

            if (input[l][j]) {
              notPossible.add(input[l][j])
            } else if (l != i) {
              neighbours.push({
                row: l,
                col: j,
              })
            }
          }
          const sRow = Math.floor(i / 3) * 3
          const sCol = Math.floor(j / 3) * 3
          for (let l = 0; l < 3; l++) {
            for (let k = 0; k < 3; k++) {
              const tRow = sRow + l
              const tCol = sCol + k
              if (input[tRow][tCol]) {
                notPossible.add(input[tRow][tCol])
              } else if (tRow != i || tCol != j) {
                neighbours.push({
                  row: tRow,
                  col: tCol,
                })
              }
            }
          }
          const possible: number[] = []
          for (let l = 1; l < 10; l++) {
            if (!notPossible.has(l)) {
              possible.push(l)
            }
          }
          nodes.push({
            row: i,
            col: j,
            possible,
            neighbours,
          })
        }
      }
    }
    return nodes
  }
}
