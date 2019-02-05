function plusOne(arr){

  var result = 0; var carry=1;

  for(var i=arr.length-1;i>=0;i--){
    result = arr[i]+carry;

    if(result>9){
      arr[i] = result%10;
      carry = result/10;
    }
    else{
      arr[i] = result;
      break;
    }
    if(i==0 && carry==1){
        arr[0] = 1;
        arr.push(0);
    }
  }
  return arr;
}

plusOne([9,9,9,9,9,9,9,9])