function longestConsec(strarr, k) {
    //control invalid
    if (strarr.length===0 || k>strarr.length || k<= 0)
      return ''

    return allConseq(strarr, k).reduce((x,y) => {
      return (x.length >= y.length)? x:y;
    })

}

let allConseq = (arr, k) => {
  let allConseq = []
  for (let i=0; i<=arr.length-k; i++){
      let res = ''
      for (let j=i; j<i+k; j++){
        res = res.concat(arr[j])
      }
      allConseq.push(res)
    }
  return allConseq
}
