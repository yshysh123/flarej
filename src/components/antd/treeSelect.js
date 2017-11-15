import { registerComponent } from 'nornj';
import TreeSelect from 'antd/lib/tree-select';
import 'antd/lib/tree-select/style/index';

registerComponent({
  'ant-TreeSelect': TreeSelect,
  'ant-TreeNode': TreeSelect.TreeNode
});

export {
  TreeSelect
};

export default TreeSelect;