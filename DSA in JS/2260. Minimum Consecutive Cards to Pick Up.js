/**
 * @param {number[]} cards
 * @return {number}
 */var minimumCardPickup = function (cards) {


    const indicesMap = new Map();
    let min = Infinity;
    let flag = false;

    for (let i = 0; i < cards.length; i++) {
        if (indicesMap.has(cards[i])) {
            min = Math.min(min, i - indicesMap.get(cards[i]) + 1); // this line will find the difference of indeices between the two same number in the card so that that difference +1 will be the total minimum which we have to return
            flag = true;
        }
        indicesMap.set(cards[i], i);
    }

    if (!flag) return -1;
    return min;
};