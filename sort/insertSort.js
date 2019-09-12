// 插入排序
function insertSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let key = arr[i] // 待插入的元素
    let j = i - 1
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }

  return arr
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(insertSort(arr))