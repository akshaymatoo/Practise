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