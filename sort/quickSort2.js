// 使用双边循环法
function quickSort2(arr) {
  sort(arr, 0, arr.length - 1)
}

function sort(arr, startIndex, endIndex) {
  if(startIndex >= endIndex) {
    return
  }
  // 得到基准元素的位置
  const pivotIndex = partition(arr, startIndex, endIndex)
  // 根据基准位置，分为两部分进行递归排序
  sort(arr, startIndex, pivotIndex - 1)
  sort(arr, pivotIndex + 1, endIndex)
}

/**
 * 对数组进行双边循环排序，实现基准左边都是小于基准值的，右边都是大于基准值
 * @param {*} arr 待排序的数组 
 * @param {*} startIndex 
 * @param {*} endIndex 
 */
function partition(arr, startIndex, endIndex) {
  const pivot = arr[startIndex]
  let left = startIndex
  let right = endIndex
  while(left != right) {
    while(left < right && arr[right] > pivot) {
      right--
    }

    while(left < right && arr[left] <= pivot) {
      left++
    }
    if(left < right) {
      let temp = arr[right]
      arr[right] = arr[left]
      arr[left] = temp
    }
  }

  arr[startIndex] = arr[left]
  arr[left] = pivot

  return left
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

quickSort2(arr)
console.log(arr);