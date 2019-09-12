// 堆排序

/**
 * 堆调整
 * @param {*} arr 堆数组
 * @param {*} i 数组下标，指定从哪个节点开始构造堆
 * @param {*} len 堆的长度
 */
function heapify(arr, i, len) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if(largest != i) {
    let temp = arr[largest]
    arr[largest] = arr[i]
    arr[i] = temp
    heapify(arr, largest, len)
  }
}


function heapSort(arr) {
  let len = arr.length
  // 构建最大堆
  for(let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len)
  }

  for (let j = len - 1; j >= 1; j--) {
    let temp = arr[j]
    arr[j] = arr[0]
    arr[0] = temp
    heapify(arr, 0, --len)
  }

  return arr
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(heapSort(arr))