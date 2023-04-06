import bs from "@basic/bubble_sort"

describe("Bubble sort done", () => {
    it("returns 3", () => {
        const mockArr1 = [22, 3, 44, 2, 0, -1, 312, 3]
        expect(bs(mockArr1)).toEqual(
            [-1, 0, 2, 3, 3, 22, 44, 312]
        )
    })
})
