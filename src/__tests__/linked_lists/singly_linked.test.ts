import SinglyLinked from "@ds/linked_list/singly_linked"
import { Node } from "@ds/linked_list/interface"

describe("Singly Linked Test 1", () => {
    it("Creates List", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        const singlyLinked = SinglyLinked

        let curr: Node<number | null> = singlyLinked.head

        mockArr1.forEach((num, i) => {
            if (i === 0) {
                curr.data = num
            }

            else {
                const tempNode = {
                    data: num,
                    next: null
                }

                curr.next = tempNode
                curr = curr.next
            }
        })

        singlyLinked.print()
    })
})
