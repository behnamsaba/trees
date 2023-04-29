/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        if (!this.root) {
            return 0;
        }
        let sum = this.root.val;
        for (let child of this.root.children) {
            sum += new Tree(child).sumValues();
        }
        return sum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        if (!this.root) {
            return 0;
        }

        let count = this.root.val % 2 === 0 ? 1 : 0;
        for (let child of this.root.children) {
            count += new Tree(child).countEvens();
        }
        return count;
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        if (!this.root) {
            return 0;
        }

        let count = this.root.val > lowerBound ? 1 : 0;
        for (let child of this.root.children) {
            count += new Tree(child).numGreater(lowerBound);
        }
        return count;
    }
}

module.exports = { Tree, TreeNode };
