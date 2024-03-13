/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let f = new Map()

    for(let e of edges){
        f.set(e[0],(f.get(e[0]) || 0)+1)
        
        f.set(e[1],(f.get(e[1]) || 0)+1)
    }

    for(let [n,c] of f){
        if(c==edges.length){
            return parseInt(n)
        }
    }
    return -1
};
