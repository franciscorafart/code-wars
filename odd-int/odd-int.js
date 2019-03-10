// Given an array, find the int that appears an odd number of times. 
// There will always be only one integer that appears an odd number of times.

const findOdd = (A) => {
  const aFiltered = A.sort((a,b)=>{return a<=b? -1:1}).filter((x,i,arr) => x!=arr[i+1])

	for (let el of aFiltered){
		const onlyEl = A.filter(x=> x==el)

		if (onlyEl.length%2==1){
	    return el;
    }
  }
  return
}
