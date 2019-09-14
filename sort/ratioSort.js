// 基数排序
/**
 * 
 * @param {*} arr 
 * @param {*} maxDigit 最大位数
 */
function ratioSort(arr, maxDigit) {
  let mod = 10
  let dev = 1
  let counter = []
  let len = arr.length
  
  for (let i = 0; i < maxDigit; i++, mod *= 10, dev *= 10) {
    for (let j = 0; j < len; j++) {
      let bucket = parseInt((arr[j] % mod) / dev)
      
      if(!counter[bucket]) {
        counter[bucket] = []
      }
      
      counter[bucket].push(arr[j])
    }
    let pos = 0
    for (let j = 0; j < counter.length; j++) {
      let value = null
      if(counter[j]) {
        while(value = counter[j].shift()) {
          arr[pos++] = value
        }
      }      
    }    
  }

  return arr
}

let arr = [2, 44, 38, 5, 47, 24, 32, 76, 33, 22, 11, 45, 89, 4, 67]

console.log(ratioSort(arr, 2))