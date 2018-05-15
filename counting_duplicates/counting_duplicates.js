let duplicateCount = text => {
  let textArray = text.toLowerCase().split('').sort()
  let textfilt = textArray.filter((a,b) =>{return a!=textArray[b-1]})

  let sum = 0
  for(ch of textfilt){
    if (textArray.filter(ch2 =>{return ch2==ch}).length > 1)
      sum ++
  }
  return sum
}
