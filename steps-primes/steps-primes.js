function step(g, m, n) {
    let primes = []
    for (let i=m; i<=n; i++){
      if(isPrime(i)){ primes.push(i)
        if (primes.length>=2){
            const thisStep = scanSteps(primes,g)
            if (thisStep) { return thisStep }
          }
        }
    }
    return null
}

const isPrime = n => {
  const middleN = Math.floor(n/2)
  for (let i=middleN;i>=2;i--){
    if(n%i==0){ return false }
  }
  return true
}

const scanSteps = (arr,step)=> {
  const lastElement = arr[arr.length-1]
  for (let i=lastElement; i>=0; i--){
    const thisStep = lastElement-arr[i]
    if (thisStep == step){
      return [arr[i], lastElement]
    }
  }
  return null
}