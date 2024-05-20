export function isBST(node, min = null, max = null) {
  if (node === null) return true;

  if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
    return false;
  }

  return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}