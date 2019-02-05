let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let arr = [2,4,7,1,3,5,0,9]
for(let i=0;i<arr.length;i++){
  if(arr[i]<min)
    min = arr[i]
  else if(arr[i]>max)
    max = arr[i]
}
console.log(min,max)