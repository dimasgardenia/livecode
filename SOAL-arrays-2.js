// Array 2 Competency Test

function initialGrouping(studentsArr) {
  // Code hanya disini
  var tampung = [];
  var timpang = [];
  var gabung = studentsArr.split("");
  for (var i = 0; i < studentsArr.length; i++) {
    if (studentsArr[i[0]] === studentsArr[i[0]+1]) {
      tampung.push(studentsArr[i]);
    }else {
      timpang.push(studentsArr[i]);
    }
  }
  return tampung;
}
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
