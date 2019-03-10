const transform = (hoursMirr, minutesMirr) => {
	// to int
	let hours = Number(hoursMirr)
	let minutes = Number(minutesMirr)

//transform mirror
  if (minutes > 0){
    switch(hours){
      //edge cases
      case 12: hours = '11'; break;
      case 11: hours = '12'; break
      case 6: hours = '5'; break;
      case 5: hours = '6'; break;
      default: hours = String(Math.abs(12 - hours)); break;
    }
  } else {
    hours = (hours == 12)? '12': String(Math.abs(12 - hours));
  }

	minutes != 0? minutes = String(Math.abs(60-minutes)): minutes = '0';

	//To string
	if (hours.length===1)
    hours = "0"+hours
    if (minutes.length === 1)
    minutes = "0"+minutes

    return [hours, minutes]
}

const WhatIsTheTime = timeInMirror => {
	const mirrorArray = timeInMirror.split(":");
	const time = transform(mirrorArray[0], mirrorArray[1]);

	return time[0]+":"+time[1]
}
