import { registerComponent } from 'nornj';
import List from 'antd-mobile/lib/list/index.web';
import 'antd-mobile/lib/list/style/index.web';

registerComponent({
  'antm-List': List,
  'antm-ListItem': List.Item
});

export default List;