import { registerComponent } from 'nornj';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/index';
const Option = Select.Option,
  OptGroup = Select.OptGroup;

registerComponent({
  'ant-Select': Select,
  'ant-Option': Option,
  'ant-OptGroup': OptGroup
});

export {
  Select,
  Option,
  OptGroup
};

export default Select;