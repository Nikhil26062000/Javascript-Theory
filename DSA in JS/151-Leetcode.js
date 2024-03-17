/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArr = s.split(" ").filter(word => word !== ""); // Filter out empty strings
    let stack = [];
    for (let i of strArr) {
        stack.push(i);
    }
    let res = "";
    while (stack.length) {
        let ele = stack.pop();
        res += ele + " ";
    }
    return res.trim();
};
