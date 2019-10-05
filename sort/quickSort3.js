// 单边循环法
function quickSort(arr) {
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
 * 对数组进行单边循环排序，实现基准左边都是小于基准值的，右边都是大于基准值
 * @param {*} arr 待排序的数组 
 * @param {*} startIndex 
 * @param {*} endIndex 
 */
function partition(arr, startIndex, endIndex) {
  // 取某个元素作为基准元素，可任意选择，这里取得的是起始位置
  const pivot = arr[startIndex]
  let mark = startIndex

  for (let index = startIndex + 1; index <= endIndex; index++) {
    if( arr[index] < pivot ) {
      mark++
      let temp = arr[mark]
      arr[mark] = arr[index]
      arr[index] = temp
    }    
  }

  arr[startIndex] = arr[mark]
  arr[mark] = pivot

  return mark
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

quickSort(arr)
console.log(arr);
