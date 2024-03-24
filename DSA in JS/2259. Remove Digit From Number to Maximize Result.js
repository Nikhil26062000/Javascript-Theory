/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {

    //   let maxNumber = BigInt(0);

    // for (let i = 0; i < number.length; i++) {
    //     if (number[i] === digit) {
    //         let str = number.substring(0, i) + number.substring(i + 1);
    //         let currentNumber = BigInt(str);
    //         maxNumber = maxNumber < currentNumber ? currentNumber : maxNumber;
    //     }
    // }

    // return maxNumber.toString();

    //above solution is working fine .
    let res = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let temp1 = number.substring(0, i) + number.substring(i + 1);
            res.push(BigInt(temp1));
        }
    }

    res.sort((a, b) => a < b ? 1 : -1); // Sorting BigInt values
    return res[0].toString();



};