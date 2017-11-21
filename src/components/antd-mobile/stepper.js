import { registerComponent } from 'nornj';
import Stepper from 'antd-mobile/lib/stepper/index.web';
import 'antd-mobile/lib/stepper/style/index.web';

registerComponent({
  'antm-Stepper': Stepper
});

export default Stepper;