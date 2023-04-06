import add from "@basic/add"

describe("testing add function", () => {
    it("returns 15 for 10, 5", () => {
        expect(add(10, 5)).toBe(15)
    })
})
