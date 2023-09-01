function solution(price) {
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }
    if(price >= 300000){
        return Math.floor(price * 0.9)
    }
    if(price >= 100000){
        return Math.floor(price * 0.95)
    }
    return price
    
    // Ther is a difference between 'price - Math.floor(price * 0.05)' and 'Math.floor(price * .95)'.
    // if price is 10, price * 0.95 is 9.5, price * 0.05 is 0.5.
    // price - Math.floor(price * 0.05) means 10.
    // Math.floor(price * .95) means 9.
}