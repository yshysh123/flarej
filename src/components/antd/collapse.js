import { registerComponent } from 'nornj';
import Collapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style/index';

registerComponent({
  'ant-Collapse': Collapse,
  'ant-CollapsePanel' : Collapse.Panel
});

export {
  Collapse
};

export default Collapse;