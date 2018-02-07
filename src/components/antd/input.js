import { registerComponent } from 'nornj';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/index';

registerComponent({
  'ant-Input': Input,
  'ant-InputGroup': Input.Group,
  'ant-TextArea': Input.TextArea
});

export {
  Input
};

export default Input;
