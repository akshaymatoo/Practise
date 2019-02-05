function fibonaci (limit){

  let first = 0;
  let second = 1;
  console.log(first);
  console.log(second);
  let count = 2;
  while(count<limit){
    console.log(first+second);
    let temp = first+second;
    first = second;
    second = temp;  
    count ++;  
  }
}

fibonaci(10)