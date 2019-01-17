function sumOfAll(n){

let terms = 0
  for(let i=1; i<=n;i++)
    terms+=i

let sum = []
for(let i=0;i<terms;i++)
    sum.push((i*2)+1)
return sum.reduce((a,b)=>{return a+b})
}

function rowSumOddNumbers(n) {
  if (n==1)
    return 1
  return sumOfAll(n)-sumOfAll(n-1)
}
