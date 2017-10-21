// first, write a function that takes the minimum value and pushes it into a new array

function findMinAndRemove(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0] // just start with the first value of each array
  let minsecondHalf = secondHalf[0]

  if(minfirstHalf < minsecondHalf){ // compare the two values, and return the smaller value
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf, secondHalf){ //calling the split array from above
  let sorted = [] // a new arrray to hold them in order
  let currentMin; // the current minimum
  while(firstHalf.length != 0 && secondHalf.length != 0){ // if both of the arrays have elements in them
    let currentMin = findMinAndRemove(firstHalf, secondHalf) // find the minimum value of the two arrays
    sorted.push(currentMin) // then push that into the sorted array
  }
  return sorted.concat(firstHalf).concat(secondHalf) // either the first half or the second half will be empty by this point, and so we will have one empty array and one sorted half
}

function mergeSort(array) {
  let midpoint = array.length/2 // split the array in half
  let firstHalf = array.slice(0, midpoint) // first portion
  let secondHalf = array.slice(midpoint, array.length) // second portion

  if (array.length < 2) { // the array cannot be split in half again
    return array
  } else { // the array can continue to be split
    merge(mergeSort(firstHalf), mergeSort(secondHalf) //new function which regressively calls merge sort on each half, to continue to split the size of the arrays
   }
}


mergeSort()
