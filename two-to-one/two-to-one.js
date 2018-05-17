let longest = (s1, s2)=>{
  return s1.concat(s2).split('').sort().filter((a,b,arr)=>{return a!=arr[b-1]}).join('')
}
