import { Node } from "../interface"

class SinglyLinked<T> {
    head: Node<T> | null

    constructor() {
        this.head = null
    }

    fillWithListValues(inputArr: T[]) {
        let curr: Node<T> | null = null

        inputArr.forEach((num, i) => {
            const tempNode = {
                data: num,
                next: null
            }

            if (i === 0) {
                curr = tempNode
                this.head = curr
            }

            else {

                if (!!curr) {
                    curr.next = tempNode
                    curr = curr.next
                }
            }
        })

    }

    getList() {
        let curr = this.head

        const temp = []

        while (curr !== null) {
            temp.push(curr.data)
            curr = curr.next
        }

        return (temp)
    }
}

export default SinglyLinked
