import { registerComponent } from 'nornj';
import Mention from 'antd/lib/mention';
import 'antd/lib/mention/style/index';

registerComponent({
  'ant-Mention': Mention
});

export {
  Mention
};

export default Mention;