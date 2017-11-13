import { registerComponent } from 'nornj';
import Table from 'antd/lib/table';
import 'antd/lib/table/style/index';
import 'antd/lib/spin/style/index';
import 'antd/lib/checkbox/style/index';
import 'antd/lib/dropdown/style/index';
import 'antd/lib/select/style/index';

const { Column, ColumnGroup } = Table;
registerComponent({
  'ant-Table': Table,
  'ant-TableColumn': Column,
  'ant-TableColumnGroup': ColumnGroup
});

export {
  Table
};

export default Table;