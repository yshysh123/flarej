import { registerComponent } from 'nornj';
import SegmentedControl from 'antd-mobile/lib/segmented-control/index.web';
import 'antd-mobile/lib/segmented-control/style/index.web';

registerComponent({
  'antm-SegmentedControl': SegmentedControl
});

export default SegmentedControl;