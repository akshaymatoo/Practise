function missingRepeatingNumberUnsorted(nums){

  //initializing temp array with all 0's
  let temp =[];
  for(let i=0;i<=nums.length;i++){
    temp[i] = 0;
  }
 
  //traversing and substituing value 0 with 1 
  for(num of nums)
  {
    if(temp[num] == 1)
      console.log(num + " is reapeating number");
    else{
      temp[num] = 1;
    }
  }

  //Look for 0 in temp array to find the missing number
  for(num in temp){
    if(temp[num] == 0){
     // console.log("Missing number is "+num);
      return num;
    }
  }
}


missingRepeatingNumberUnsorted([9,6,4,2,3,5,7,0,1])