import { registerComponent } from 'nornj';
import AutoComplete from 'antd/lib/auto-complete';
import 'antd/lib/auto-complete/style/index';

registerComponent({
  'ant-AutoComplete': AutoComplete
});

export {
  AutoComplete
};

export default AutoComplete;