import java.util.HashMap;

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    int [] arr = {1,2,5,3,6,7,8};
    new Main().findPairs(9, arr);
  }

  public void findPairs(int number, int[] arr){
    HashMap<Integer,Integer> mp = new HashMap<Integer,Integer>();

    for(int i=0;i<arr.length;i++){
      mp.put(arr[i],0);
    }
    for(int i=0;i<arr.length;i++){
      if(mp.containsKey(number - arr[i]) && mp.get(number-arr[i]) !=1){
        System.out.println(arr[i] + "----" +(number-arr[i]));
        mp.put(arr[i],1);
        mp.put(number-arr[i],1);
      }
      

    }

  }
}