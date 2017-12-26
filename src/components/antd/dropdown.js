import { registerComponent } from 'nornj';
import Dropdown from 'antd/lib/dropdown';
import 'antd/lib/dropdown/style/index';

registerComponent({
  'ant-Dropdown': Dropdown
});

export {
  Dropdown
};

export default Dropdown;