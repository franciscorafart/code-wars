function smallerThan(a,b){return a<=b? a:b}

function sumTwoSmallestNumbers(numbers){
  let x = numbers.reduce(smallerThan)
  let y = numbers.filter(a =>a!=x).reduce(smallerThan)
  return x + y
};
