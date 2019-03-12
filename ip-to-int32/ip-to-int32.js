function ipToInt32(ip){
	const ipNums = ip.split(".");
	const binaryNums = ipNums.map(num => getBinary(num));
	return thirtyTwoBit(binaryNums)
}

// if reminder of % == 0 then stop
// if reminder% < reminder - add value and continue
// if reminder == reminder don’t do anything

const getBinary = num => {
	let reminder = num;
	let binary = "00000000"

  for(let i=7;i>=0;i--){
		let index = Math.abs(i-7)
		const new_reminder = reminder%Math.pow(2,i)

    if(new_reminder==0){
  	  binary = stringSplice(binary,index, 1,"1"); //replace value at index with one
  	  break;
    } else if (new_reminder<reminder) {
  	  binary = stringSplice(binary,index,1,"1");
  	  reminder = new_reminder
    }
  }

  return binary
}

const thirtyTwoBit = binaryArray => {
  const concatBins = binaryArray.reduce((a,b) => a.concat(b))

  let result = 0
  for (let i = concatBins.length-1; i>=0; i--){
  	const index = Math.abs(i-(concatBins.length-1))
  	let active = Number(concatBins.charAt(index)) //1 or 0

    if (active) {
  	  result += Math.pow(2, i)
    }
  }

  return result
}

stringSplice = (str,index, amount, value) => {
  let stringOne = str.slice(0,index)
  let stringTwo = str.slice(index+amount, str.length)

  return stringOne+value+stringTwo
}
