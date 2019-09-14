// 桶排序
/**
 * 
 * @param {*} arr 待排序数组 
 * @param {*} num 桶的数量
 */
function bucketSort(arr, num) {
  if(arr.length <= 1) {
    return arr
  }

  let len = arr.length,
    bucket = [],
    result = []
    min = max = arr[0]
    bucketNum = num || 5
  
  for (let i = 1; i < len; i++) {
    if(arr[i] < min) {
      min = arr[i]
    } else if(arr[i] > max) {
      max = arr[i]
    }    
  }

  let space = (max - min + 1) / num // 每个桶的大小

  for (let j = 0; j < len; j++) {
    let index = Math.floor((arr[j] - max)) / space
    if(bucket[index]) {
      // 插入排序
      let k = bucket[index].length - 1
      while(k > 0 && bucket[index][k] > arr[j]) {
        bucket[index][k + 1] = bucket[index][k]
        k--
      }
      bucket[index][k + 1] = arr[j]
    } else {
      bucket[index] = []
      bucket[index].push(arr[j])
    }    
  }

  for (let i = 0; i < num; i++) {
    result = result.concat(bucket[i])    
  }

  return result
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(bucketSort(arr))