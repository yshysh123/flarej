import { registerComponent } from 'nornj';
import Timeline from 'antd/lib/timeline';
import 'antd/lib/timeline/style/index';

registerComponent({
  'ant-Timeline': Timeline
});

export {
  Timeline
};

export default Timeline;