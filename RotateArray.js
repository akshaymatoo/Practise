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

function rotate(arr,rotation){
if(rotation<0 || rotation>arr.length )
    return -1;
  let first = arr.length - rotation;
   reverse(arr,first+1,arr.length);
   console.log("---1----",arr)
  reverse(arr,1,first);
  console.log("---2---",arr)
  reverse(arr,1,arr.length);
 
  console.log("---3---",arr)
}
rotate([1,2,3,4,5,6,7],7);


// 5,6,1,2,3,4
