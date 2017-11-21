import { registerComponent } from 'nornj';
import Popup from 'antd-mobile/lib/popup/index.web';
import 'antd-mobile/lib/popup/style/index.web';

registerComponent({
  'antm-Popup': Popup
});

export default Popup;