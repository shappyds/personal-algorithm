// 计数排序
// 使用一个额外的数组, 要求待排序的数组是有确定范围的整数

function countSort(arr) {
  let len = arr.length
  let result = []
  let temp = []
  let min = max = arr[0]

  for (let i = 0; i < len; i++) {
    min = min < arr[i] ? min : arr[i]
    max = max > arr[i] ? max : arr[i]
    // 将待统计数组的每个值为i元素出现的次数，存入到数组temp的第i项
    temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] + 1 : 1
  }

  for (let j = min; j < max; j++) {
    while(temp[j]) {
      result.push(j)
      temp[j]--
    }
  }

  return result
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(countSort(arr))