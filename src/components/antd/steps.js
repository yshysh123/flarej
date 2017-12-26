import { registerComponent } from 'nornj';
import Steps from 'antd/lib/steps';
import 'antd/lib/steps/style/index';

registerComponent({
  'ant-Steps': Steps,
  'ant-Step': Steps.Step,
});

export {
  Steps
};

export default Steps;