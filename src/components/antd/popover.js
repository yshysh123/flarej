import { registerComponent } from 'nornj';
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/index';

registerComponent({
  'ant-Popover': Popover
});

export {
  Popover
};

export default Popover;