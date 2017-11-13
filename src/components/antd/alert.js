import { registerComponent } from 'nornj';
import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/index';

registerComponent({
  'ant-Alert': Alert
});

export {
  Alert
};

export default Alert;