import { registerComponent } from 'nornj';
import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/index';

registerComponent({
  'ant-Cascader': Cascader
});

export {
  Cascader
};

export default Cascader;