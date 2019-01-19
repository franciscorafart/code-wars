function bouncingBall(h,  bounce,  window) {
  if (h<=0 || bounce>=1 || bounce<=0 || window>=h)
    return -1

  let allPasses = 0

  while (h > window){
    //from up
    if (h>window) //The ball is above the window
      allPasses+=1

    h = h*bounce //hits the floor
    // bounce
    if (h>window)
      allPasses+=1
  }

  return allPasses
}
