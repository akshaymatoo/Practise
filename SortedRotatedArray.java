
class Main {
  public static void main(String[] args) {
   // int index = new Main().binarySearch(new int[]{9,12,15,17,18,19,37,3,7,8}, 0, 6, 9);
  int nums[] = new int[]{1,3};
  int result = new Main().search(nums,0); 
  System.out.println("result "+result);
  }

  public int search(int[] nums, int target) {
    if(nums.length == 0)
      return -1;
    if(nums.length ==1){
      if(target == nums[0])
        return 0;
      else
        return -1;
    }
    int pivot = new Main().findPivot(nums, 0, nums.length-1);
   
    if(target == nums[pivot])
      return pivot;
    else if (pivot == 0)
      return new Main().binarySearch(nums,0, nums.length-1,target);
    else if(target>nums[pivot] && target <= nums[nums.length-1])
      return new Main().binarySearch(nums,pivot,nums.length-1,target);
    else
      return new Main().binarySearch(nums,0,pivot,target);
    
          
  }

  public int findPivot(int[] A, int start, int end){

    int pivot = 0;
    
    if(A[0]<A[A.length-1])
        return pivot;
    if(start<=end){
      int mid = (start+end)/2;

      if(A[mid]>A[mid+1])
        return mid+1;
      else if(A[start]>A[mid])
        return findPivot(A,start,mid-1);
      else
        return findPivot(A,mid+1,end);
    }
    else
      return pivot;
  }

  public int binarySearch(int[] A, int start, int end , int element) {
     
    int index = -1;
    if(start<=end){
    int mid = (start + end)/2;

    if(element == A[mid])
        return mid;
    else if (element > A[mid])
      return binarySearch(A, mid+1, end, element);
    else
      return binarySearch(A, start, mid-1, element);
    }
    else
      return index;

  }

}