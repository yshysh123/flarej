import { registerComponent } from 'nornj';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/index';

registerComponent({
  'ant-Card': Card
});

export {
  Card
};

export default Card;