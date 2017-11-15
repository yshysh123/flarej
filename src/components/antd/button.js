import { registerComponent } from 'nornj';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index';

registerComponent({
  'ant-Button': Button
});

export {
  Button
};

export default Button;