import binary_search from "@algorithms/binary_search"

describe("testing add function", () => {
    it("returns 3", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        expect(binary_search(mockArr1, 10)).toBe(3)
    })
})
