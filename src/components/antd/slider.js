import { registerComponent } from 'nornj';
import Slider from 'antd/lib/slider';
import 'antd/lib/slider/style/index';

registerComponent({
  'ant-Slider': Slider
});

export {
  Slider
};

export default Slider;