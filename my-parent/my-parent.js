// Mothers arranged dance party for children in school.On that party there are only mothers and their children.
// All are having great fun on dancing floor when suddenly all lights went out.Its dark night and no one can see eachother.But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers,lowercase stand for their children. I.E "A" mothers children are "aaaa".
// -Function input:String contain only letters,Uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children.I.E "aAbaBb" => "AaaBbb".

const findChildren = dancingBrigade => {
  // Put item in dict with their count
  const moms = stringToArr(dancingBrigade).filter(ch => !isLower(ch)).sort((a,b) => a>b)
  const kids = stringToArr(dancingBrigade).filter(ch => isLower(ch)).sort((a,b) => a>b)

  let result = []
  for (let mom of moms){
    let momsKids = kids.filter(k => k == mom.toLowerCase())
    result.push(mom,...momsKids)
  }
  return arrToStr(result)
};

const isLower = (ch) => ch == ch.toLowerCase()

const stringToArr = str => {
  const result = []
  for (let i=0; i<str.length; i++){
    result.push(str.charAt(i));
  }
  return result
}
const arrToStr = arr => {
  let result = ''
  for (let ch of arr){
    result = result+ch
  }
  return result
}
