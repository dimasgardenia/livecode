// Recursive Competency Test

function tambahTerus(num) {
  // Code disini
  if(num.length === 0){
        return 0;
    }
    function add(num, i){
        console.log(num[i]);
        if(i === num.length-1){
            return num[i];
        }
        return num[i] + add(num, i+1);
    }
    return add(num, 0);
}

console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
