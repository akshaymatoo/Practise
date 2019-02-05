function searchP (txt,pat){
      
  let M = pat.length;
  let N = txt.length;

  /* A loop to slide pat one by one */
  for (let i = 0; i <= N ; i++) {

      let j;

      /* For current index i, check for pattern 
        match */
      for (j = 0; j < M; j++)
          if (txt.charAt(i + j) != pat.charAt(j))
              break;

      if (j == M) // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
      {
          console.log("Pattern found at index " + i);
          //break;
      }
  }

  //return "Not found";
}
let returnV = searchP ("AABAACAADAABAAABAA", "ABA");
returnV;

 // Above is Search brute force.

 