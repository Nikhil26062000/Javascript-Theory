var sumCounts = function(nums) {
  let res = 0;

  for(let i =0;i<nums.length;i++){
    let set = new Set();

    for(let j=i;j<nums.length;j++){
        set.add(nums[j]);
        res+=set.size*set.size
    }
  }
  return res
};
