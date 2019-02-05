function oddOccurance(arr){
  let result = 0;
  for(val of arr){
    result ^= val
  }
  return result;
}

oddOccurance([1,3,1,4,4,2,3,2,6,4,4,6,7])