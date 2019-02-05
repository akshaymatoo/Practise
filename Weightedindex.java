import java.util.*;

import javax.lang.model.util.ElementScanner6;
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    HashMap<Integer,Integer> mp = new HashMap<Integer,Integer>();
    for(int i=0;i<10000;i++){
     int ar = new Main().pickIndex();

      if(mp.containsKey(ar))
        mp.put(ar,mp.get(ar)+1);
      else
        mp.put(ar,1);
    }
    System.out.println(Arrays.asList(mp)); // method 1
  }


  public int pickIndex(){
    int a[] = {1,2,4,8,10,7};
    int ret = 0;
    int sum =0;
    for(int i=0;i<a.length;i++)
      sum+= a[i];
    Random rn = new Random();
    int range = sum - 1 + 1;
    int random =  rn.nextInt(range) + 1;

    for(int i=0;i<a.length;i++){
      random = random-a[i];
      if(random<=0)
        {
         ret = a[i];
          break;
        }
    }
    return ret;
  }
}