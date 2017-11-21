import { registerComponent } from 'nornj';
import TextareaItem from 'antd-mobile/lib/textarea-item/index.web';
import 'antd-mobile/lib/textarea-item/style/index.web';

registerComponent({
  'antm-Flex': TextareaItem
});

export default TextareaItem;