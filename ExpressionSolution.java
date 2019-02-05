import java.util.*;

public class Main
{   
    public static void main (String[] args) throws java.lang.Exception
    {
          System.out.println('3'-'0');
         System.out.println(new Main().calculate(" 3/2 -0*7"));
    }

     

public int calculate(String s) {
    int len;
    if(s==null || (len = s.length())==0) return 0;
    Stack<Integer> stack = new Stack<Integer>();
    int num = 0;
    char sign = '+';
    for(int i=0;i<len;i++){
        if(Character.isDigit(s.charAt(i))){
            num = num*10+s.charAt(i)-'0';
        }
        if((!Character.isDigit(s.charAt(i)) &&' '!=s.charAt(i)) || i==len-1){
           //System.out.println(i+"***"+s.charAt(i)+" --- "+num);
            if(sign=='-'){
                stack.push(-num);
            }
            if(sign=='+'){
                stack.push(num);
            }
            if(sign=='*'){
              //System.out.println(s.charAt(i)+" --- "+num);
                stack.push(stack.pop()*num);
            }
            if(sign=='/'){
                stack.push(stack.pop()/num);
            }
            sign = s.charAt(i);
            num = 0;
        }
        //System.out.println(s.charAt(i) +" <> "+num +"  <> "+Arrays.toString(stack.toArray()));
    }
    int re = 0;
    for(int i:stack){
        re += i;
    }
    return re;
}
 

     
}
 