import { registerComponent } from 'nornj';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index';

registerComponent({
  'ant-Pagination': Pagination
});

export {
  Pagination
};

export default Pagination;