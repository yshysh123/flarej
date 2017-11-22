import { registerComponent } from 'nornj';
import Message from 'antd/lib/message';
import 'antd/lib/message/style/index';

registerComponent({
  'ant-Message': Message
});

export {
  Message
};

export default Message;