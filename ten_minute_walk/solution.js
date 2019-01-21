let quickFilter = (arr, s1,s2) => {
  return arr.filter(x=> {
    return (x==s1 || x==s2)? false:true
  })
}

function isValidWalk(walk) {
  if (walk.length!=10)
    return false
  //transform array into two arrays of 1 or -1
  let nthsth = quickFilter(walk,'w','e').map(x => {return x=='n'? 1:-1 })
  let wstest = quickFilter(walk,'n','s').map(x => {return x=='e'? 1:-1 })

  //Add them up
  nthsth.length > 0? nthsth = nthsth.reduce((x,y) => {return x+y}): nthsth=false
  wstest.length > 0? wstest = wstest.reduce((x,y) => {return x+y}): wstest=false

  //Test if addition equals 0 (back to origin point)
  if (wstest==0 && nthsth==0)
    return true

  return false
}
