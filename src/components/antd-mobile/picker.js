import { registerComponent } from 'nornj';
import Picker from 'antd-mobile/lib/picker/index';
import 'antd-mobile/lib/picker/style/index.web';

registerComponent({
  'antm-Picker': Picker
});

export default Picker;