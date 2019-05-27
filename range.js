function range(start, end, step) {
  var array = [];
  if (isNaN(start) || isNaN(end) || isNaN(step) || start > end || step < 0) {
    return array;
  } else {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(2, -5, 3));
console.log(range(2, 5, -3));


//var chorus = "Let's dance!";
//for (var repeat = 0; repeat <10; repeat++) {
  //console.log(chorus);
//}
//console.log("Until the sun comes up!");