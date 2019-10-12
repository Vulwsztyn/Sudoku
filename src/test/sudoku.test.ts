import * as R from 'ramda'
import { Node, Sudoku } from '../main/sudoku'
let input = [] as number[][]
const sudoku = new Sudoku()

beforeAll(() => {
  input = [
    [0, 4, 0, 0, 0, 0, 6, 0, 2],
    [0, 0, 8, 0, 1, 0, 0, 5, 0],
    [0, 2, 0, 9, 0, 0, 8, 0, 1],
    [7, 0, 0, 8, 0, 6, 2, 0, 5],
    [6, 0, 2, 0, 5, 0, 1, 0, 7],
    [9, 0, 4, 1, 0, 7, 0, 0, 8],
    [4, 0, 5, 0, 0, 3, 0, 8, 0],
    [0, 6, 0, 0, 9, 0, 4, 0, 0],
    [2, 0, 3, 0, 0, 0, 0, 1, 0],
  ]
})
test('should have a good node', () => {
  const nodes = sudoku.generateNodes(input)
  const node45: Node = R.find(
    (n: Node) => n.row == 4 && n.col == 5,
    nodes,
  ) as Node
  expect(node45.row).toEqual(4)
  expect(node45.col).toEqual(5)
  expect(node45.possible).toEqual([4, 9])
  expect(node45.neighbours).toEqual(
    expect.arrayContaining([
      {
        row: 3,
        col: 4,
      },
      {
        row: 4,
        col: 3,
      },
      {
        row: 5,
        col: 4,
      },
      {
        row: 4,
        col: 1,
      },
      {
        row: 4,
        col: 3,
      },
      {
        row: 4,
        col: 7,
      },
      {
        row: 0,
        col: 5,
      },
      {
        row: 1,
        col: 5,
      },
      {
        row: 2,
        col: 5,
      },
      {
        row: 7,
        col: 5,
      },
      {
        row: 8,
        col: 5,
      },
    ]),
  )
  const node44 = R.find((n: Node) => n.row == 4 && n.col == 4, nodes)
  expect(node44).toBeUndefined()
})
