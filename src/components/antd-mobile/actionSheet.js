import { registerComponent } from 'nornj';
import ActionSheet from 'antd-mobile/lib/action-sheet/index.web';
import 'antd-mobile/lib/action-sheet/style/index.web';

registerComponent({
  'antm-ActionSheet': ActionSheet
});

export default ActionSheet;