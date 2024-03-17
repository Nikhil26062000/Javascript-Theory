var isValid = function(s) {
    // Create an empty stack to store opening brackets
    let stack = [];

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the current character is an opening bracket, push it onto the stack
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else { // If the current character is a closing bracket
            // Check if the stack is empty, which means there's no corresponding opening bracket
            if (stack.length === 0) {
                return false;
            } else { // If the stack is not empty
                // Pop the top element from the stack (last opening bracket)
                let temp = stack.pop();
                // Check if the closing bracket matches the last opening bracket
                if (
                    (s[i] === ")" && temp !== "(") ||
                    (s[i] === "}" && temp !== "{") ||
                    (s[i] === "]" && temp !== "[")
                ) {
                    // If the brackets don't match, return false
                    return false;
                }
            }
        }
    }
    // After iterating through the entire string,
    // check if there are any remaining opening brackets left in the stack
    // If the stack is empty, all brackets have been matched and the string is valid
    return stack.length === 0;
};
