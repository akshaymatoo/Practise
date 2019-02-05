function decimalToBinary(number){
	let binary = [];
  while(number >0){
    binary.push(number%2);
    number = parseInt(number/2);
  }
  //binary.push(1);

  if(binary.length<4){
    while(binary.length < 4){
      binary.push(0);
    }
  }
	return binary.reverse().join('');
}



function hammingDistance(x,y){

  x = decimalToBinary(x);
  y = decimalToBinary(y);

console.log(x,y)

  let lenFirst = x.length;
  let lenSecond = y.length;

  let counter = (lenFirst>lenSecond)?lenSecond:lenFirst;

  console.log(lenFirst,lenSecond,counter)
  let hd =0;
  for(let i=0;i<counter;i++){
    if(x[x.length-1-i]!=y[y.length-1-i])
      hd++;
  }
  return hd;
}
//console.log(decimalToBinary(1));
hammingDistance(680142203,1111953568);