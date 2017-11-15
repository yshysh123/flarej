import { registerComponent } from 'nornj';
import Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/breadcrumb/style/index';

registerComponent({
  'ant-Breadcrumb': Breadcrumb,
  'ant-BreadcrumbItem': Breadcrumb.Item
});

export {
  Breadcrumb
};

export default Breadcrumb;