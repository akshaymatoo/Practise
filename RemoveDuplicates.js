/*
In this Question the main catch is the array passed is sorted array.
*/

//using an Object
function removeDuplicates (arr){
  let obj = {};
  for(element of arr){
    obj[element] =1;
  }
  return Object.keys(obj);
}


//using extra array
function removeDuplicates (arr){
  let temp = [];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]!= arr[i+1])
      temp.push(arr[i]);
  }
  temp.push(arr[arr.length-1]);
  
  return temp;
}

//Without using extra space.

function removeDuplicates (arr){
  let temp = [];
  let j=0;
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]!= arr[i+1]){
      arr[j] = arr[i];
      j++;
    }
  }
arr[j] = arr[arr.length-1];
let k = j+1;

while(k<arr.length){
  arr.pop();
}
return arr;
}


removeDuplicates([1,2,3,3,4,5,6,6,7,8,8,9,9])