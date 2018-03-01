import { registerComponent } from 'nornj';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index';

registerComponent({
  'ant-Spin': Spin
});

export {
  Spin
};

export default Spin;