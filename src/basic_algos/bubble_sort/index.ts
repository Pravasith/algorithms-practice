
const bubble_sort = (unsorted: number[]) => {
    for (let i = 0; i < unsorted.length; i++) {
        for (let j = 0; j < unsorted.length - 1 - i; j++) {
            if (unsorted[j] > unsorted[j + 1]) {
                const temp = unsorted[j]
                unsorted[j] = unsorted[j + 1]
                unsorted[j + 1] = temp
            }
        }
    }

    return unsorted
}

export default bubble_sort 
