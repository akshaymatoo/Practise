function missingNumber(arr){

  let range = arr[arr.length-1];
  let sum=0;
  for(ar of arr)
    sum^=ar;
  let comp=0;
  for(let i=1;i<=range;i++)
    comp ^=i;
  
  return comp^sum;
}


var missingNumber = function(nums) {
        let expectedSum = nums.length*(nums.length + 1)/2;
        let actualSum = 0;
        for (num of nums) actualSum += num;
        return expectedSum - actualSum;
    }

missingNumber([1,2,3,5,6,7,8,9])