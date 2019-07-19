const countDeafRats = (town) => {
    const indexP = town.indexOf('P');
    const townLeft = town.slice(0, indexP).split('') || [];
    const townRight = town.slice(indexP+1, town.length).split('') || [];

    return findRat('~O', townRight)+findRat('O~', townLeft);
  }

const findRat = (rat, town) => {
    const cleanTown = town.filter(ch => ch!=" ");
    let count = 0;
    for (let i=0;i<cleanTown.length;i+=2){
        if (rat == cleanTown.slice(i,i+2).join(''))
        count++
    }
    return count
}