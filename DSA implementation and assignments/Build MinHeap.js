//Build a Minheap.

//minHeap is used to find the correct position of parent element by comparing it with left and right elements recursively.
function minHeapify(nums,n,i){
    let left_index = (2*i)+1, right_index = (2*i)+2;
    let smallest = i;
    if(left_index < n && nums[smallest]>nums[left_index]){
        smallest = left_index;
    }
    if(right_index < n && nums[smallest]>nums[right_index]){
        smallest = right_index;
    }
    if(smallest!==i){
        [nums[i],nums[smallest]] = [nums[smallest],nums[i]];
        minHeapify(nums,n,smallest);
    }
};
//buildHeap is used to take the nums array and return the Minheap that has been built inplace using minHeapify method.
function buildHeap(nums){
    const last_non_leaf = Math.floor(nums.length/2)-1;
    for(let i = last_non_leaf;i>= 0;i--){
        minHeapify(nums,nums.length,i);
    }
    return nums;
}
//Driver code
const nums = [1,3,7,9,12,10,6,16,18,22,27];
console.log(buildHeap(nums));
