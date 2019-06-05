//function merges 2 SORTED arrays and returns a sorted array with values from both.
function merge(array1, array2){
 // Check to see if array1 is empty; if so return array2 only.
  if (array1.length === 0) {
    return array2;
  }
  // Check to see if array2 is empty; if so return array1 only.
  else if (array2.length === 0) {
    return array1;
  }
  // If all the numbers in array2 are larger than array1, concatenate array2 onto array1
  else if (array2[0] >= array1[array1.length - 1]) {
    for (let i = 0; i < array2.length; i++) {
     array1.push(array2[i]);
    }
    return array1;
  // If the first number of array1 is larger than last number of array2, concatenate array1 onto array2
  } else if (array1[0] >= array2[array2.length - 1]) {
      for (let j = 0; j < array1.length; j++) {
      array2.push(array1[j]);
    }
    return array2;
  }
  // For all other cases, concat & insertion sort
else { 
  let array= array1.concat(array2);
  // start at 2nd element in concatenated array
  for (let k = 1; k < array.length; k++) {
    let compare = array[k];
    let l = k-1;
    while (l >= 0) { 
      if (compare < array[l]) {
        array[l+1] = array[l]; //shift element right
        array[l] = compare; //shift element left
        l--;
      } else {
        break;
      }
    }
    
  }
 return array;     
    
}

}  

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([4, 6, 8], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);