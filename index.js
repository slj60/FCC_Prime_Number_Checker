function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        let primeCheck = num / i;
        if (Number.isInteger(primeCheck)) {
            return false
        }
    }
    return true;
}

module.exports = {
    isPrime,
}
