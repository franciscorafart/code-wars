moveZeros = arr => {
  return arr.filter(x => {return x!==0}).concat(
      arr.filter(x => {return x===0})
  )
}

// Explanation:
// I concat the array filtered on non-0s with arr filtered on 0s.
// Make sure it's a triple === comparison, because 0==false,
// 0==={}, etc.
