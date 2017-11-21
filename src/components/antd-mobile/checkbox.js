import { registerComponent } from 'nornj';
import Checkbox from 'antd-mobile/lib/checkbox/index.web';
import 'antd-mobile/lib/checkbox/style/index.web';

registerComponent({
  'antm-Checkbox': Checkbox,
  'antm-CheckboxItem': Checkbox.CheckboxItem,
  'antm-CheckboxAgreeItem': Checkbox.AgreeItem
});

export default Checkbox;