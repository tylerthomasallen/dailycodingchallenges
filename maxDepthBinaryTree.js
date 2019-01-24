
const maxDepth = (root) => {
    return maxDepthHandler(root, 1);
};

const maxDepthHandler = (root, num) => {
  // return 0 here if the root node is null
    if (root === null) return 0;

    // this is base case

    if (root.right === null && root.left === null) {
        return num;
    }

    // return the max num between the two if both nodes go out
    // otherwise, go down right or left node recursively

    // O(N) time complexity b/c you are going down the size of each node. 

    if (root.right && root.left) {
        return Math.max(maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num+1));
    } else if (root.right) {
        return maxDepthHandler(root.right, num + 1);
    } else {
        return maxDepthHandler(root.left, num + 1);
    }
};
