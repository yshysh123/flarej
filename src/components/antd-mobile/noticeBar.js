import { registerComponent } from 'nornj';
import NoticeBar from 'antd-mobile/lib/notice-bar/index.web';
import 'antd-mobile/lib/notice-bar/style/index.web';

registerComponent({
  'antm-NoticeBar': NoticeBar
});

export default NoticeBar;