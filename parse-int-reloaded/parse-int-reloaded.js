function parseInt(string) {
    // seven hundred eighty-three [thousand] nine [hundred] and nineteen
    // one hundred
    // seven hundred thousand
    // six hundred and seventy-five thousand eight hundred and eighty-four
    
    const millIndex = string.split(' ').indexOf('million')
    if (millIndex !== -1) return 1000000
    
    const [k, h, d] = extractComponents(string);
    
    const decimal = parseDecimals(d);
    const hundred = parseCientos(h);
    const thousand = parseMiles(k)
  
    return thousand + hundred + decimal
  }
  
  const extractComponents = (s) => {
    // Separar decimales, cientos, y miles
    const split = s.split(' ')
    
    const kIndex = split.indexOf('thousand');
    const thousandString = kIndex > 0 ? split.slice(0, kIndex).join(' ') : ""
    
    const hunSplit = kIndex < split.length - 1 ? split.slice(kIndex+1) : []
  //   console.log('s', s, 'kString', thousandString, 'hundred split', hunSplit)
    const [hundredString, decimalString] = extractHundredDecimals(hunSplit);
    
    return [thousandString, hundredString, decimalString]
  }
  
  const extractHundredDecimals = (sArray) => {
    if (sArray.length === 0) return ["", ""]
    
    const hundredIndex = sArray.lastIndexOf('hundred');
    const hundredString = hundredIndex > 0 ? sArray[hundredIndex - 1] : ""
    
    const decimalString = sArray[sArray.length - 1]
    
    return [hundredString, decimalString]
  }
  
  // Convertir string entre 0-99 en integer 
  const parseDecimals = (dString) => {
    if (dString === 'hundred' || dString === 'thousand' || dString === "" || dString === undefined) return 0;
    const components = dString.split('-');
    const sum = components.length > 1 ? numMap[components[0]] + numMap[components[1]] : numMap[components[0]];
    
    return sum;
  }
  
  const parseCientos = (hString) => {
    if (hString === "" || hString === 'thousand') return 0
    
    return numMap[hString] * 100;
  }
  
  const parseMiles = (kString) => {
    // parseDecimales y parseCientos y * 1000
    if (kString === "") return 0;
    
    const split = kString.split(' ');
    const [hundredString, decimalString] = extractHundredDecimals(split);
  //   console.log('Miles parsing', split, 'hundredString', hundredString, 'decimalString', decimalString)
    
    return (parseCientos(hundredString) + parseDecimals(decimalString))*1000;
  }
  
  const numMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  }
  