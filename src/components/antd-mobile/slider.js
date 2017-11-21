import { registerComponent } from 'nornj';
import Slider from 'antd-mobile/lib/slider/index.web';
import 'antd-mobile/lib/slider/style/index.web';

registerComponent({
  'antm-Slider': Slider
});

export default Slider;