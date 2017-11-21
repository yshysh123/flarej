import { registerComponent } from 'nornj';
import NavBar from 'antd-mobile/lib/nav-bar/index.web';
import 'antd-mobile/lib/nav-bar/style/index.web';

registerComponent({
  'antm-NavBar': NavBar
});

export default NavBar;