import SinglyLinked from "@ds/linked_list/singly_linked"
import { Node } from "@ds/linked_list/interface"

describe("Singly Linked Test 1", () => {
    it("Creates List", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        const singlyLinked = new SinglyLinked()

        singlyLinked.fillWithListValues(mockArr1)
        console.log(singlyLinked.getList())

    })
})
