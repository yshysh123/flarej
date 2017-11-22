import { registerComponent } from 'nornj';
import Progress from 'antd/lib/progress';
import 'antd/lib/progress/style/index';

registerComponent({
  'ant-Progress': Progress
});

export {
  Progress
};

export default Progress;