import { registerComponent } from 'nornj';
import Tabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style/index';

registerComponent({
  'ant-Tabs': Tabs,
  'ant-TabPane': Tabs.TabPane
});

export {
  Tabs
};

export default Tabs;