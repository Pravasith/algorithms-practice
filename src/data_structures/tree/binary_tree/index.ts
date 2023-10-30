import { Node } from "./interface"

class BinaryTree<T> {
  root: Node<T> | null

  constructor() {
    this.root = null
  }

  fillRootWithValues(inputArr: T[]) {
    const x = {
      data: 1,
      left: {
        data: 2,
        left: {
          data: 3,
          left: null,
          right: null,
        },
        right: {
          data: 4,
          left: null,
          right: null,
        },
      },
      right: {
        data: 5,
        left: {
          data: 6,
          left: null,
          right: null,
        },
        right: {
          data: 7,
          left: null,
          right: null,
        },
      },
    }
  }
}
