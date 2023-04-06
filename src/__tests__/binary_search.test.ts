import bs from "@basic/binary_search"

describe("testing add function", () => {
    it("returns 3", () => {
        const mockArr1 = [1, 2, 5, 10, 55, 100]
        expect(bs(mockArr1, 10)).toBe(3)
    })
})
