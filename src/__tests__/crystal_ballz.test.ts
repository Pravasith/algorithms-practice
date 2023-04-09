import crystal_ballz from "@problems/crystal_ballz"

describe("crystal balls return 6", () => {
    it("returns 3", () => {
        const mockArr1 = [false, false, false, false, false, false, true, true, true, true, true, true,]
        const mockArr2 = [false, false, false, false, false, false, true,]

        expect(crystal_ballz(mockArr1)).toBe(6)
        expect(crystal_ballz(mockArr2)).toBe(6)
    })
})
