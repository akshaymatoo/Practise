class Solution {
   public int findMin(int[] nums) {
        
        return nums[new Solution().findPivot(nums, 0,nums.length-1)];
  }

  public int findPivot(int[] A, int start, int end){

    int pivot = 0;
    if(A.length == 1)
        return pivot;
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
}