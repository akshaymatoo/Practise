function reverseArray(arr){
  let len = arr.length;
  for(let i=0;i<=len/2;i++){
    let temp = arr[i];
    arr[i] = arr[len-i-1];
    arr[len-i-1] = temp;
  }
  return arr;
}


function reverse (arr,start,end){
  if(!start)
    start = 0;
  if(!end)
    end = arr.length;
  let s = start-1;
  let e = end-1;
  while (s<e){
    let tem = arr[s];
     arr[s] = arr[e];
    arr[e] = tem;
    s++;
    e--;
  }
  return arr;
}

reverseArray([1,2,3,4,5,6,7,8,9,10])