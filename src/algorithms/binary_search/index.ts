// @ts-ignore
const binary_search = (haystack: number[], needle: number) => {
    let lo = 0, hi = haystack.length - 1

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m]

        if (v === needle) return m
        else if (v > needle) {
            hi = m
        }
        else {
            lo = m + 1
        }
    }
}

export default binary_search
