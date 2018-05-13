function alphabetPosition(text) {
  return text.toLowerCase().match(/[a-z]+/g).join('').split('').map(ch => {return ch.charCodeAt()-96}).join(' ')
}
