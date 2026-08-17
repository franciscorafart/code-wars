var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  const validateArray = (arr, validArray) => {
    // Validate compliance of array.
    const sortedArray = [...arr].sort((a, b) => a > b ? 1: -1);
    // sort and stringify
    if (sortedArray.toString() === validArray.toString()) return true
    
    return false;
  }

  const extractClusterArray = (data, x, y, clusterSize) => {
    const cluster = [];
    for (let i=0; i<clusterSize; i++) {
      for (let j=0; j<clusterSize; j++) {
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
      const validArray = createArrayResult(n);
      
      // YOUR SOLUTION
        // a. Row array
      for (let i=0; i<n; i++) {
        let valid = validateArray(data[i], validArray);
        if (!valid) return false;
        
        // b. Column array
        const columnArray = [];
        for (let j=0; j<n; j++) {
          columnArray.push(data[j][i]);
        }
        valid = validateArray(columnArray, validArray);
        if (!valid) return false;
      }
      
        // c. Clusters
      for (let i=0; i<n; i+=clusterSize) {
        for (let j=0; j<n; j+=clusterSize) {
          const cluster = extractClusterArray(data, i, j, clusterSize);
          const valid = validateArray(cluster, validArray);
          if (!valid) return false;
        }
      }

      return true;
    }
  };
};