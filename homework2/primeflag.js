var num = 13;
var isPrime = true;

if (num < 2) {
    isPrime = false;
}

for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);
