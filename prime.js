function getFactors(number, firstOnly) {
    const factors = [];
    for(let i = 2; i < number; i++)
        if(number % i == 0)
        {
            factors.push(i)
            if (firstOnly)
                break
        } 
    return factors;
}

function isPrime(number) {
    return !getFactors(number, true).length;
}

function getPrimesInRange(start, end) {
    let primes = []
    for(let i = start; i <= end; i++)
        if (isPrime(i))
            primes.push(i)
    return primes
}

function showResult(result) {
    // document.getElementById("result").innerText = result;
    alert(result);
}

const determinePrimeBtn = document.getElementById("factor-button");
const determinePrimeInRangeBtn = document.getElementById("range-button");

determinePrimeBtn.addEventListener("click", function(){
    const num = document.getElementById("input-number").value
    const result = isPrime(num) ? 'Prime!' : getFactors(num);
    showResult(result);
});
determinePrimeInRangeBtn.addEventListener("click", function(){
    const startNumber = document.getElementById("start").value;
    const endNumber = document.getElementById("end").value;
    const result = getPrimesInRange(startNumber,endNumber);
    showResult(result);
});