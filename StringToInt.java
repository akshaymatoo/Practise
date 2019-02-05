public class Main{
 public static void main(String[] args) {
     int max = new Main().stringToInt("123999");
     System.out.println(max);
     
    }

    public int stringToInt(String  str) {
        
        int res = 0 ;
        int i=0;
        int sign =1;
        if(str.charAt(0) == '-')
        {
            sign =-1;
            i++;
        }
        
        for(;i<str.length();i++){
          res = res*10+str.charAt(i) - '0';
        }

        res = res*sign;
        return res;
    }
}