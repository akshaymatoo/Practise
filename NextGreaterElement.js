//brute force
function nextGreaterElement(arr){

  for(let i=0;i<arr.length;i++){
     if(i == arr.length-1)
    console.log("Next greater element for "+arr[i]+" is -1");
        
    for(let j=i+1;j<arr.length;j++){
    
      if(arr[j] > arr[i])
      {
        console.log("Next greater element for "+arr[i]+" is "+arr[j]);
        break;
      }

       if(j == arr.length-1)
        console.log("Next greater element for "+arr[i]+" is -1")
    }
  }
}

//Brute forcte with a but of enhancement
function nextGreaterElement(arr){

  for(let i=0;i<arr.length;i++){
     let next = -1;
    for(let j=i+1;j<arr.length;j++){
    
      if(arr[j] > arr[i])
      {
        next = arr[j]
        break;
      }
    }
    console.log("Next greater element for "+arr[i]+" is "+next);
  }
}


// The above two are O(n^2)



//The below version is using a stack

function nextGreaterElement(arr){

let stack = [arr[0]];
for(let i=1;i<arr.length;i++){

  let compare_element = arr[i];
  let stack_element =  stack[stack.length-1];

  //console.log("=========",compare_element , stack_element);

  if(compare_element < stack_element)
  {
    stack.push(compare_element);
    continue;
  }
  else{
    //stack_element = stack.pop();
    while(compare_element>stack_element){
      //console.log( compare_element , stack_element)
      if(stack.length<=0)
        break;
      stack_element = stack.pop(); 
      console.log("Next greater element for "+stack_element+" is "+compare_element);
       stack_element =  stack[stack.length-1];

    }
    stack.push(compare_element);
  }
  //console.log(stack);
}
 
 while(stack.length>0){
   let pop_element = stack.pop();
   console.log("Next greater element for "+pop_element+" is -1");
 }

}


nextGreaterElement([13,4,5,6])