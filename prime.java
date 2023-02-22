import java.util.ArrayList;
class prime{
    public static void determinePrime(int number){
        boolean isPrime = true;
        ArrayList<Integer> factors = new ArrayList<Integer>();
        for(int j=2;j<number;j++){
            if(number%j == 0){
                isPrime = false;
                factors.add(j);
            }
        }
        if(isPrime == true){
            System.out.println("Prime!");
        }
        else{
            System.out.println(factors);
        }
    }
    public static void main(String[] args) {
        determinePrime(3);
    }
}