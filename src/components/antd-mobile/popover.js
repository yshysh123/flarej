import { registerComponent } from 'nornj';
import Popover from 'antd-mobile/lib/popover/index.web';
import 'antd-mobile/lib/popover/style/index.web';

registerComponent({
  'antm-Popover': Popover,
  'antm-PopoverItem': Popover.Item
});

export default Popover;