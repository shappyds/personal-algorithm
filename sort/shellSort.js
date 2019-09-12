// 希尔排序 不稳定
// 希尔排序的核心在于间隔序列的设定，既可以提前设定好间隔序列，也可以动态的定义间隔序列
function shellSort(arr) {
  let len = arr.length
  let gap = 1
  // 动态计算间隔序列
  while(gap > len / 5) {
    gap = gap * 5 + 1
  }

  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      let key = arr[i]
      let j = i - gap
      while (j >= 0 && arr[j] > key) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = key  
    }
  }

  return arr
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(shellSort(arr))