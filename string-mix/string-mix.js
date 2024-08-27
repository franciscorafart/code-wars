function mix(s1, s2) {
    // your code
    const min = 'a'.charCodeAt(0)
    const max = 'z'.charCodeAt(0)
    // defininr rango numerico caracteres a-z, filtrar solo minusculas
  
    let s1Filter = s1.split('').filter(ch => ch.charCodeAt(0) >= min && ch.charCodeAt(0) <= max);
    let s2Filter = s2.split('').filter(ch => ch.charCodeAt(0) >= min && ch.charCodeAt(0) <= max);
    console.log({s1Filter, s2Filter})
    // Guardar elementos con su conteo en objeto
    const s1Count = s1Filter.reduce((acc, el) => {
      const currentCount = acc[el] || 0;
      acc[el] = currentCount+1;
      return acc;
    }, {})
    
    const s2Count = s2Filter.reduce((acc, el) => {
      const currentCount = acc[el] || 0;
      acc[el] = currentCount+1;
      return acc;
    }, {}) //   A: { n: 5, a: 4, } B: {n: 3, a: 5}
  
    const keysSet = new Set([...Object.keys(s1Count), ...Object.keys(s2Count)]);
    const keys = Array.from(keysSet);
  
    // combinarlos {n: {count: 8, greater: '1:' }} // 1:, 2:,  =:
    // Filtrarlos > 1
    const combination = keys.reduce((acc, el) => {
      const maxElementCount = Math.max((s1Count[el] || 0), (s2Count[el] || 0));
      if (maxElementCount > 1) {
        const sig = s1Count[el] === s2Count[el] ? '=:' : s1Count[el] > s2Count[el] ? '1:' : '2:'
        acc[el] = { count: maxElementCount, sig}
      } 
      
      return acc;
    }, {});
  
    // TODO: Fix sorting issue
    // orden por conteo o orden alfabetico
    const sortComb = Object.entries(combination).sort((a, b) => {
      const countA = a[1].count;
      const countB = b[1].count;
      
      if (countA > countB) {
        return -1;
      }
      if (countA < countB) {
        return 1;
      }
      // a or b
      if (a[1].sig > b[1].sig) {
        return 1
      }
      
      if (a[1].sig < b[1].sig) {
        return -1
      }
      // alphabetic order
  
      if (a[0].charCodeAt(0) >= b[0].charCodeAt(0)) {
        return 1;
      }
      
      return -1;
    });
    console.log(sortComb)
  //   console.log(sortComb[0])
    return sortComb.map(([k, v]) => `${v.sig}${Array(v.count).fill(k).join('')}`).join('/')
    // Escribir string
  }