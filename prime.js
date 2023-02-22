function determinePrime(number) {
    let isPrime = true;
    let factors = [];
    for(let j=2;j<number;j++){
        if(number%j == 0){
            isPrime = false;
            factors.push(j);
        }
    }
    if(isPrime == true){
       return("Prime!");
    }
    else{
        return(factors);
    }
}

function determinePrimeInRange(start,end) {
    let primes = [];
    for(let i=start;i<=end;i++){
        let isPrime = true;
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            primes.push(i);
        }
    }
    return primes;
}

const inputNumber = document.getElementById("input-number");
const startNumber = document.getElementById("start");
const endNumber = document.getElementById("end");

const determinePrimeBtn = document.getElementById("factor-button");
const determinePrimeInRangeBtn = document.getElementById("range-button");
const result = document.getElementById("result");
determinePrimeBtn.addEventListener("click", function(){
    result.innerText = determinePrime(inputNumber.value);
});
determinePrimeInRangeBtn.addEventListener("click", function(){
    result.innerText = determinePrimeInRange(start.value,end.value);
});