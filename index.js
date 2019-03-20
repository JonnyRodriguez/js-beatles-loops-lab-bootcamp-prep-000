// add solution here
var theBeatlesPlay = (musicians,instruments) => {
  let strings = [];
  for( let i=0; i<instruments.length; i++ ) {
    for( let m=0; m<musicians.length; m++ ) {
      strings.push(musicians[m]+" plays "+instruments[i]);
    }
  }
  return strings;
};
