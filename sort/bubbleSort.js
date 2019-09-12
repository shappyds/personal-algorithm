let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

// 标准版冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }    
    }    
  }

  return arr
}

console.log(bubbleSort(arr))

// 优化冒泡排序，如果到某次循环之后，已经无需再排序，则结束
function bubbleSort2(arr) {
  let len = arr.length
  let flag = true
  for (let i = 0; i < len && flag; i++) {
    flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }    
    }    
  }

  return arr
}

console.log(bubbleSort2(arr))
