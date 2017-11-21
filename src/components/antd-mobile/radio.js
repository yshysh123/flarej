import { registerComponent } from 'nornj';
import Radio from 'antd-mobile/lib/radio/index.web';
import 'antd-mobile/lib/radio/style/index.web';

registerComponent({
  'antm-Radio': Radio,
  'antm-RadioItem': Radio.RadioItem
});

export default Radio;