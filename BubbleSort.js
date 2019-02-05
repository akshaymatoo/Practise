function bubbleSort(arr){
  let len = arr.length;
  for(let i=0;i<len;i++){
    for (let j=i+1;j<len;j++){
      if(arr[i]>arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

bubbleSort([2,3,4,6,5,-7,9,10,18])