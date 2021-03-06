import java.util.*;

public class Main{
 public static void main(String[] args) {
      String str[] = new String[]{"i", "love", "leetcode", "i", "love", "coding"};
      List<String> lst = new Main().topKFrequent(str,2);
      System.out.println(lst);
    }


 public List<String> topKFrequent(String[] words, int k) {
        
        HashMap<String,Integer> map = new HashMap<String,Integer>();
        //builds the hashmap
        for(String word:words)
            map.put(word,map.getOrDefault(word,0)+1);
        
        //Now build a priority queue
        PriorityQueue<String> heap = new PriorityQueue<String>(
            (w1,w2) -> map.get(w1).equals(map.get(w2))?w1.compareTo(w2):map.get(w2)-map.get(w1)
        );
        
        //its a max heap 
         for (String word: map.keySet()) 
             heap.offer(word);
        

        List<String> lst = new ArrayList<String>();
        while(!heap.isEmpty())
          lst.add(heap.poll());
        
        
        return lst.subList(0,k);
    }
 public List<String> topKFrequent2(String[] words, int k) {
        Map<String, Integer> count = new HashMap();
        for (String word: words) {
            count.put(word, count.getOrDefault(word, 0) + 1);
        }
        PriorityQueue<String> heap = new PriorityQueue<String>(
                (w1, w2) -> count.get(w1).equals(count.get(w2)) ?
                w2.compareTo(w1) : count.get(w1) - count.get(w2) );

        System.out.println("----Before---"+heap);
        for (String word: count.keySet()) {
            heap.offer(word); // Inserts an element
            if (heap.size() > k) heap.poll(); // removes and returns the head of the heap
        }


System.out.println("---After---"+heap);
        List<String> ans = new ArrayList();
        while (!heap.isEmpty()) ans.add(heap.poll());
        Collections.reverse(ans);
        return ans;
    }


     public List<String> topKFrequent1(String[] words, int k) {
        Map<String, Integer> count = new HashMap();
        for (String word: words) {
            count.put(word, count.getOrDefault(word, 0) + 1);
        }
        List<String> candidates = new ArrayList(count.keySet());
        //This sorts the list based on values in the hash map
        Collections.sort(candidates, (w1, w2) -> count.get(w1).equals(count.get(w2)) ?
                w1.compareTo(w2) : count.get(w2) - count.get(w1));
        
        //cuts the list for the given number of k
        return candidates.subList(0, k);
   }
}
