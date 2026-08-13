var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  const validateArray = (arr, validArray) => {
    // Validate compliance of array.
    const sortedArray = arr.copy().sort();
    // sort and stringify
    if (sortedArray.toString() === validArray.toString()) return true
    
    return false;
  }

  const extractClusterArray = (data, x, y, n) => {
    const cluster = [];
    for (let i=0; i<n; i++) {
      for (let j=0; j<n; j++) {
        cluster.push(data[x+i][y+j]);
      }
    }
    return cluster;
  }
  
  const createArrayResult = (N) => {
    const res = [];
    for (let i=1; i<=N; i++) {
      res.push(i);
    }
    return res;
  }

  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      const n = data.length;
      const clusterSize = Math.sqrt(n);
      const resultArray = createArrayResult(n);
      
      
      // YOUR SOLUTION
        // a. Row array
      for (let i=0; i<n, i++) {
        let valid = validateArray(data[i]);
        if (!valid) return false;
        
        // b. Column array
        const columnArray = [];
        for (let j=0; j<n; j++) {
          columnArray.push(data[i][j]);
        }
        valid = validateArray(columnArray);
        if (!valid) return false;
      }
      
        // c. Clusters
      for (let i=0; i<n; i+=clusterSize) {
        for (let j=0; j<n; j+=clusterSize) {
          const cluster = extractClusterArray(data, i, j, clusterSize);
          const valid = validateArray(cluster);
          if (!valid) return false;
        }
      }

      return true;
    }
  };
};