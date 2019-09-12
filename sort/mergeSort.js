// 归并排序
function mergeSort(arr) {
  let len = arr.length
  if(len < 2) {
    return arr
  }

  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length) {
    result.push(...left)
  }
  if (right.length) {
    result.push(...right)
  }
  return result
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(mergeSort(arr))