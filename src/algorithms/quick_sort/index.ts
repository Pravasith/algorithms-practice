const partition = (arr: number[], l: number, r: number): number => {
  let i = l - 1
  let j = l

  for (; j < r; j++) {
    if (arr[j] <= arr[r]) {
      i++
      const temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }

  const temp = arr[r]
  arr[r] = arr[i + 1]
  arr[i + 1] = temp

  return i + 1
}

const qs = (arr: number[], l: number, r: number) => {
  if (l >= r) return

  const p = partition(arr, l, r)

  qs(arr, l, p - 1)
  qs(arr, p + 1, r)
}

const quick_sort = (unsorted: number[]) => {
  qs(unsorted, 0, unsorted.length - 1)
}

export default quick_sort
