// add solution here
var theBeatlesPlay = (musicians,instruments) => {
  let strings = [];
  for( let i=0; i<instruments.length; i++ ) {
      strings.push(musicians[i]+" plays "+instruments[i]);
  }
  return strings;
};
