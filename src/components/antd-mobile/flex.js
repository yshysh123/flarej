import { registerComponent } from 'nornj';
import Flex from 'antd-mobile/lib/flex/index.web';
import 'antd-mobile/lib/flex/style/index.web';

registerComponent({
  'antm-Flex': Flex,
  'antm-FlexItem': Flex.Item
});

export default Flex;