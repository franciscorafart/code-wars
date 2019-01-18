function createPhoneNumber(numbers){

let a = numbers.splice(0,3).join('')
let b = numbers.splice(0,3).join('')
let c = numbers.splice(0,4).join('')

let result = '('+a+') '+b+'-'+c

return result
}
