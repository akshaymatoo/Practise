function primeNumber (number){
for(let i=2;i<number;i++){
  if(number %i == 0){
   return "Not Prime";
  }
}
return "Prime";
}


for(let i=2;i<=50;i++)
  console.log("Number "+i +" is "+primeNumber(i))


---------------*------------

function primeNumbers(limit){

  //console.log("1 \n"+"2 \n"+"3");

  for(let i=2;i<=limit;i++){
    let numberToTest = i;
    let primeTest = 0;
    for(let j=2;j<=Math.sqrt(numberToTest);j++){

        if(numberToTest % j == 0){
          console.log("Not prime "+numberToTest);
          primeTest =1 ;
          break;
        }
    }
    if(primeTest == 0)
      console.log("Prime "+numberToTest);
   
  }
}

primeNumbers(50)