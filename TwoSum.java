import java.util.HashMap;
import java.util.Map;

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    int ar[]=new Main().twoSum(new int[]{ 3,3 },6);

    System.out.print(ar[0]+"------"+ar[1]);
  }


//Double pass
  public int[] twoSum(int nums[], int target)
  {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    System.out.println(map.toString());
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement) && map.get(complement) != i) {
            return new int[] { i, map.get(complement) };
        }
    }
    throw new IllegalArgumentException("No two sum solution");
  }


//Single pass
  public int[] twoSum(int[] arr, int target) {
        
    HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
     
    for (int i=0;i<arr.length;i++) {
         int complement = target-arr[i];
        if(map.containsKey(complement)){
            
            return  new int[] { map.get(complement), i };
        }else{
            map.put(arr[i],i);
        }
    }

    throw new IllegalArgumentException("No solution");
   
  }
}