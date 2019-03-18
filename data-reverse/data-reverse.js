function dataReverse(data) {
  //split array
  let dataArr = []
  while(data.length>0){
    dataArr.unshift(data.splice(0,8))
  }
  //reverse and concat
  return dataArr.length>0? dataArr.reduce((a,b)=>a.concat(b)): []
}
