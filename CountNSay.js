 

function countNSay(s){

  let result = "";
  let count = 1;
  let charater = s[0];

  for(let i=1;i<s.length;i++){

      if(s[i] == charater)
        count++;
      else{
        result += charater+count;
        charater = s[i];
        count =1;
      }
  }
  result += charater+count;
  return result;
}
 

 countNSay("aaaaaaabbcccd");
