function createPhoneNumber(numbers){

let a = give_string(numbers.splice(0,3))
let b = give_string(numbers.splice(0,3))
let c = give_string(numbers.splice(0,4))

let result = '('+a+') '+b+'-'+c

return result
}

give_string = st => {
  let a = ''
  for (let s of st) {
    let b = a.concat(s)
    a = b
  }
  return a
}
