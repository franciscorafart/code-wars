function swapHeadAndTail(arr) {
    if (arr.length === 0 || arr.length === 1) return arr;
    const isPivot = arr.length%2 === 1;
    const half = Math.floor(arr.length/2)
  
    return isPivot? 
      [ ...arr.slice(-half), arr[half], ...arr.slice(0, half)]
      : 
      [...arr.slice(-half), ...arr.slice(0, half)];
}