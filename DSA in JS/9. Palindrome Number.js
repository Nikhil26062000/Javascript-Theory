/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {


    // x=x.toString();
    // return x.split("").reverse().join("")===x


    //ABOVE SOL IS BY CONVERTING IT INTO STRING

    //----------------------- below sol is without converting into string --------------->

    if (x < 0) { // If x is negative, it can't be a palindrome
        return false;
    }
    
    // Initialize variables
    let original = x;
    let reversed = 0;
    
    // Reverse the integer
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Check if the original integer is equal to the reversed integer
    return original === reversed;
};