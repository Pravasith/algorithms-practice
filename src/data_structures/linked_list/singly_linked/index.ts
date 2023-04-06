import { SinglyLinkedType, Node } from "../interface"

const SinglyLinked: SinglyLinkedType<number | null> = {
    head: {
        data: null,
        next: null
    },

    print() {
        let curr = this.head

        while (curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}

export default SinglyLinked
