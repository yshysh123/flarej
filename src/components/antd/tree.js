import { registerComponent } from 'nornj';
import Tree from 'antd/lib/tree';
import 'antd/lib/tree/style/index';
const TreeNode = Tree.TreeNode;

registerComponent({
  'ant-Tree': Tree,
  'ant-TreeNode': TreeNode
});

export {
  Tree,
  TreeNode
};

export default Tree;