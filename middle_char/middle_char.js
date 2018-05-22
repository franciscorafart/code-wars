let getMiddle = s => {
  idx = Math.floor(s.length/2)-1
  return s.length%2==0? s.substring(idx,idx+2): s.charAt(idx+1)
}
