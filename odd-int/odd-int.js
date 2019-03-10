// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (A) => {
  return A.sort((a,b)=> a-b)
    .filter((x,i,arr) => x!=arr[i+1]) //sort asc and filter repeats
      .filter(el => // filter one element that repeats itself odd times
        A.filter(x=> x==el).length%2==1)[0]
}
