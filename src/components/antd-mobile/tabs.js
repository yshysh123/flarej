import { registerComponent } from 'nornj';
import Tabs from 'antd-mobile/lib/tabs/index.web';
import 'antd-mobile/lib/tabs/style/index.web';

registerComponent({
  'antm-Tabs': Tabs,
  'antm-TabsPane': Tabs.TabPane
});

export default Tabs;