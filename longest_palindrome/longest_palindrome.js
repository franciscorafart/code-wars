//function that reverses string
const reversed = st => {
	let res = ""
	for (let i=st.length-1; i>=0; i--){
		res = res.concat(st[i])
  }
  return res
}

// Function that determines if a string is a palindrome
const isPalindrome = st => {
	let indexMiddle = Math.floor(st.length/2)
	const strA = st.slice(0,indexMiddle)
	//odd length case
	if (st.length%2 == 1)
		indexMiddle++

  const strB = st.slice(indexMiddle, st.length)

	if (strA == reversed(strB))
		return true

	return false
 }

// Function that returns all substrings for a susbstring length
let subStringsForLength = (st, length) => {
	let res = []
	for (let i=0; i+length<=st.length; i++){
  	const subStr = st.substring(i,i+length)
  	res.push(subStr)
  }

  return res
}

// Length of largest palindrome substring
const longestPalindrome = st => {
    let subStringLength = st.length
    let lengthOfLargest = 0

    while (subStringLength > 0){
        //1. Get all subStrings for length
        const subStrings = subStringsForLength(st, subStringLength)
        // 2. Compare each to reversed version
        for (subStr of subStrings){
        	if (isPalindrome(subStr )){
            	lengthOfLargest = subStringLength;
            	break;
            }
        }

      	if (lengthOfLargest!=0)
      		break;

        subStringLength--
    }

    return lengthOfLargest
}
