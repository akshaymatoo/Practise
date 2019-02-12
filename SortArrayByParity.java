import java.io.*;
import java.math.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
class SortArrayByParity {
  public static void main(String[] args) {
    int count []= new SortArrayByParity().sortArrayByParity(new int [] {3,1,2,4});
    System.out.println(Arrays.toString(count));
  }

  public int[] sortArrayByParity(int[] A) {

    int counter =0;
    for(int i=0;i<A.length;i++){
      if(A[i] % 2 ==0)
      {
        int temp = A[i];
        A[i] = A[counter];
        A[counter] = temp;
        counter ++;
      }
    }

  return A;      
  }
}