import { registerComponent } from 'nornj';
import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/index';

registerComponent({
  'ant-InputNumber': InputNumber
});

export {
  InputNumber
};

export default InputNumber;