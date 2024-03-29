import DoublyLinked from "@data-structures/linked_list/doubly_linked"

describe("Doubly Linked Test 1", () => {
    it("Creates List", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        const result = [
            [null, 1, 2],
            [1, 2, 5],
            [2, 5, 10],
            [5, 10, 55],
            [10, 55, 100],
            [55, 100, null]
        ]

        const doublyLinked = new DoublyLinked()

        doublyLinked.fillWithListValues(mockArr1)

        expect(doublyLinked.getList()).toEqual(result)
    })
})
