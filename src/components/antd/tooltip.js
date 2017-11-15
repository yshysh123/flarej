import { registerComponent } from 'nornj';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index';

registerComponent({
  'ant-Tooltip': Tooltip
});

export {
  Tooltip
};

export default Tooltip;