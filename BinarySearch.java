
class Main {
  public static void main(String[] args) {
    int index = new Main().binarySearch(new int[]{1,2,4,6,7,8,9}, 0, 6, 9);

    System.out.print(index);
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