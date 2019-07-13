const step = (g, m, n) => {
    let primes = []
    for (let i=m; i<=n; i++){
        if(isPrime(i)){ 
          primes.push(i)
            if (primes.length>=2){
                const thisStep = scanSteps(primes,g)
                if (thisStep) { return thisStep } 
            }
        }
    }
    return null
}
  
const isPrime = n => {
    if (n%2 == 0){
        return false
    } else {
        const middleN = Math.floor(n/2)
        for (let i=3;i<=middleN;i++){
          if(n%i==0){ 
              return false
          }
        }
    }
    return true
}
  
const scanSteps = (arr,step) => {
    const lastElement = arr[arr.length-1]
    for (let i=arr.length-1; i>=0; i--){
        const thisStep = lastElement-arr[i]
        
        if (thisStep == step){
            return [arr[i], lastElement]
        }
        if (thisStep > step){ break }
    }
    return null
}