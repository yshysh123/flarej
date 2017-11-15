import { registerComponent } from 'nornj';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index';
const CheckboxGroup = Checkbox.Group;

registerComponent({
  'ant-Checkbox': Checkbox,
  'ant-CheckboxGroup' : CheckboxGroup
});

export {
  Checkbox,
  CheckboxGroup
};

export default Checkbox;