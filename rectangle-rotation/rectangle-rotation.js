function rectangleRotation(a, b) {
    const max = Math.max(a, b);
    const start = max;
    let count = 0;
    
    for (let i = -start; i <= start; i++) {
      for (let j = -start; j <= start; ++j) {
        const [xTransform, yTransform] = rotatePoint(i, j, Math.PI/4);
  
        if (isInHorizontalRectangle(xTransform, yTransform, a, b)){
          count++
        }
      }
    }
    
    return count;  
  }
  
  const rotatePoint = (x, y, angle) => {
    return [x*Math.cos(angle)+y*Math.sin(angle), -x*Math.sin(angle) + y*Math.cos(angle)]
  }
  
  const isInHorizontalRectangle = (x, y, w, h) => {
    return (y <= h / 2 && y >= -h/2) && (x <= w/2 && x>= - w / 2)
  }