function binarySearch(arr, val) {
  let low = 0
  let high = arr.length - 1
  
  while( low <= high) {
    const mid = Math.floor(low + (high - low) / 2)
    
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}


function bSearchInternally(arr, low, high, val) {
  if(low > high) return

  const mid = Math.floor(low + (high - low)/ 2)
  
  if (arr[mid] === val) {
    return mid
  } else if(arr[mid] < val) {
    return bSearchInternally(arr, mid + 1, high, val)
  } else {
    return bSearchInternally(arr, low, mid - 1, val)
  }
}

// 递归版本
function binarySearch2(arr, val) {
  return bSearchInternally(arr, 0, arr.length - 1, val)
}


let arr = [ 2, 4, 5, 11, 22, 24, 32, 33, 38, 44, 45, 47, 67, 76, 89 ]

console.log(binarySearch(arr, 47));
console.log(binarySearch2(arr, 47));