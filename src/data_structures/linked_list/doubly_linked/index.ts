import { Node } from "./interface"

class DoublyLinked<T> {
    head: Node<T> | null

    constructor() {
        this.head = null
    }

    fillWithListValues(inputArr: T[]) {
        let curr = null
        let prev = null

        for (let i = 0; i < inputArr.length; i++) {
            const temp: Node<T> | null = {
                data: inputArr[i],
                next: null,
                prev: null,
            }

            if (prev)
                prev.next = temp
            temp.prev = prev
            curr = temp
            prev = curr

            if (i === 0) {
                this.head = curr
            }
        }
    }

    getList() {
        let curr = this.head
        const temp = []

        while (curr !== null) {
            temp.push(
                [
                    curr.prev === null ? curr.prev : curr.prev.data,
                    curr.data,
                    curr.next === null ? curr.next : curr.next.data,
                ],
            )
            curr = curr.next
        }

        return (temp)
    }

}

export default DoublyLinked
