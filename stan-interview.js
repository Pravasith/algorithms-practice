function fetch_available_slots(duration, events) {
  let lowerBound = 0,
    upperBound = 100

  // this one has 288 slots
  const slotArr = []
  // Fill a simple array with 5 min slots
  for (let i = 0; i < upperBound / 5; i++) {
    slotArr.push(0)
  }

  function roundUp5(x) {
    return Math.ceil(x / 5) * 5
  }

  function roundDown5(x) {
    return Math.floor(x / 5) * 5
  }

  for (let i = 0; i < events.length; i++) {
    lowerBound = events[i][0]
    upperBound = events[i][1]

    if (lowerBound < 0 || upperBound > 1440) {
      // handles out of bounds error condition
    }

    lowerBound = roundDown5(lowerBound)
    upperBound = roundUp5(upperBound)

    let currIdx = lowerBound / 5
    const endIdx = upperBound / 5

    // console.log(lowerBound, upperBound)

    while (currIdx <= endIdx && endIdx - currIdx > 0) {
      slotArr[currIdx] = 1
      currIdx++
    }
  }

  let startIdx = -1,
    endIdx = -1,
    inFreeTimeSlot = false

  for (let i = 0; i < slotArr.length; i++) {
    if (slotArr[i] == 0) {
      if (!inFreeTimeSlot) {
        startIdx = i
        inFreeTimeSlot = true
      }
    } else {
      if (inFreeTimeSlot) {
        endIdx = i
        console.log([startIdx * 5, endIdx * 5])
        inFreeTimeSlot = false
        startIdx = endIdx = -1
      }
      // console.log(startIdx * 5)
    }
  }

  // console.log(slotArr)
  console.log(events)
}

// console.log(
// fetch_available_slots(30,[[0,30],[660,690], [900,960]
// // , [960, 24 * 60]
// ]))

// console.log
fetch_available_slots(300, [
  [1, 3],
  [10, 23],
  [65, 66],
  [78, 86],
])

// 0 -> 24*60 1440
