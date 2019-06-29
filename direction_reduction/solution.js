const dirReduc = (arr) => {
    let i=0
    while (i<arr.length-1){
      if(OPPOSITE_MAP[arr[i]] == arr[i+1]){ 
        arr.splice(i,2)
        i=0
      } else {
        i+=1
      }
    }
    return arr
  }
  
  const OPPOSITE_MAP={
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  }
