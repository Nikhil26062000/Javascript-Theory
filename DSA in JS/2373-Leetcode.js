/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {

    let n = grid.length
    let maxLocal = []
    for(let row=1;row<n-1;row++){
        let arr=[]
        for(let col=1;col<n-1;col++){
            let max = -Infinity;
            for(let i=row-1;i<=row+1;i++){
                for(let j=col-1;j<=col+1;j++){
                   max = Math.max(grid[i][j],max)
                }
            }
            arr.push(max);
        }
        maxLocal.push(arr)
    }
    return maxLocal
}
