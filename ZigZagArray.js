function zigZagArray(arr){
  let flag = false;
   
  for(let i=0;i<arr.length;i++){
     
    if(i == arr.length-1)
          break;
    if(!flag){
       
      if((arr[i]<arr[i+1]) == false){
         let temp = arr[i];
         arr[i] = arr[i+1];
         arr[i+1] = temp; 
        
      }

    }else{
    
      if((arr[i]>arr[i+1]) == false){
       
        let temp1 = arr[i];
         arr[i] = arr[i+1];
         arr[i+1] = temp1;
         
      }
    }
    flag = (flag == true?flag = false:flag=true)
  }
  
  return arr;
}

zigZagArray([3,4,6,2,12,8,9,11,13,45])