import { registerComponent } from 'nornj';
import Card from 'antd-mobile/lib/card/index.web';
import 'antd-mobile/lib/card/style/index.web';

registerComponent({
  'antm-Card': Card,
  'antm-CardHeader': Card.Header,
  'antm-CardBody': Card.Body
});

export default Card;