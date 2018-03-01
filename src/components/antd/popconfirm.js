import { registerComponent } from 'nornj';
import Popconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/index';

registerComponent({
  'ant-Popconfirm': Popconfirm
});

export {
  Popconfirm
};

export default Popconfirm;