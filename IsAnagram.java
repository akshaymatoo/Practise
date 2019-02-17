import java.util.*;
class Main {
  public static void main(String[] args) {
  
  System.out.println(new Main().isAnagram("aacc","ccac"));
  }


    public boolean isAnagram(String s, String t) {
        if(!(s.length() == t.length()))
          return false;
        HashMap<Character,Integer> map = new HashMap<Character,Integer> ();
        for(int i=0;i<s.length();i++)
            map.put(s.charAt(i),map.getOrDefault(s.charAt(i),0)+1);
       // System.out.println(map);

        for(int i=0;i<t.length();i++)
            map.put(t.charAt(i),map.getOrDefault(t.charAt(i),0)-1);

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
        if(entry.getValue() <0 || entry.getValue() >0)
          return false;
    }

        return true;

    }

}