
const crystal_ballz = (floors: boolean[]) => {

    const sqrt = Math.floor(Math.sqrt(floors.length - 1))

    let i = 0

    for (; i < floors.length - 1; i += sqrt) {
        if (floors[i])
            break
    }

    const end = i

    let j = i - sqrt
    for (; j < end && j < floors.length; j++) {
        if (floors[j]) break
    }

    return j
}

export default crystal_ballz
