import { registerComponent } from 'nornj';
import Notification from 'antd/lib/notification';
import 'antd/lib/notification/style/index';

registerComponent({
  'ant-Notification': Notification
});

export {
  Notification
};

export default Notification;