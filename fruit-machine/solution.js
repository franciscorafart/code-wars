const weight = {
    "Wild":10,
    "Star": 9,
    "Bell": 8,
    "Shell": 7,
    "Seven": 6,
    "Cherry": 5,
    "Bar": 4,
    "King": 3,
    "Queen": 2,
    "Jack": 1
}

  const fruit = (reels, spins) => {
    // weighted results
    const [a,b,c] = reels.map((reel, idx) => weight[reel[spins[idx]]]).sort((a,b) => a<b);

    if (a == b && b === c)
        return a * 10;

    let diff, equal = 0;
    if (a === b) {
        equal = a;
        diff = c;
    }
    if (b === c){
        equal = c;
        diff = a;
    }

    return diff == 10? equal*2: equal;
  }
