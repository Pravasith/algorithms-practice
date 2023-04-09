import SinglyLinked from "@data-structures/linked_list/singly_linked"

describe("Singly Linked Test 1", () => {
    it("Creates List", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        const singlyLinked = new SinglyLinked()

        singlyLinked.fillWithListValues(mockArr1)
        expect(singlyLinked.getList()).toEqual(mockArr1)

    })
})
