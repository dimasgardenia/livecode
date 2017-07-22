// Function 2 Competency Test

function removeDash(str) {
  // Code Disini
  var cleanedStr = str.split("-").join(" ");
  //console.log(cleanedStr)
}

function capitalizeString(str) {
  // Code Disini
  var capitalizedStr= [];
  for (var i=0; i < str.length ; i++){
	  capitalizedStr[i]= capitalizedStr[i].charAt(0).toUpperCase();
  }
  return capitalizedStr[i];
}

function transformTextToNumber(str) {
  // Code Disini
  var transformedStr= [];
  for (var i= 0; i< str.length; i++){
	  transformedStr[i]= str[i+1];
	  }
	  return transformedStr;
}

function stringManipulator(str) {
  var cleanedStr = removeDash(str);
  var capitalizedStr = capitalizeString(cleanedStr);
  var transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
