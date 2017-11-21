import { registerComponent } from 'nornj';
import Toast from 'antd-mobile/lib/toast/index.web';
import 'antd-mobile/lib/toast/style/index.web';

registerComponent({
  'antm-Toast': Toast
});

export default Toast;