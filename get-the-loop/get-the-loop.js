
function loop_size(node){
    const visited = new Map();
    let currentValue = node;
    let nextNode = null;
    let nextNodeNew = true;
    let index = -1
    let visitedIndex = -1;
    
    while (nextNodeNew) {
      index++
      visited.set(currentValue, index);
      nextNode = currentValue.getNext();
    
      visitedIndex = visited.get(nextNode)
      const nextVisited = visitedIndex !== undefined
      
      if (nextVisited) {
        nextNodeNew = false;
      } else {
        currentValue = nextNode;
      }
    }
    
    return index - visitedIndex + 1
  }