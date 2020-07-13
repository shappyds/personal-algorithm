// 选择排序
function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }      
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp      
  }

  return arr
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(selectionSort(arr))
