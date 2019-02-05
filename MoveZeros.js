function moveZeros(nums){
  let count =0;
  for(let i=0;i<nums.length;i++){
     if(nums[i]!=0){
      nums[count] = nums[i];
      count = count +1;
     }
  }

  while(count<nums.length)
  {
    nums[count] =0;
    count = count+1;
  }
  return nums;
}


moveZeros([1,0,0,0,3])