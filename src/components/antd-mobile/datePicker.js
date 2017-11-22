import { registerComponent } from 'nornj';
import DatePicker from 'antd-mobile/lib/date-picker/index.web';
import 'antd-mobile/lib/date-picker/style/index.web';

registerComponent({
  'antm-DatePicker': DatePicker
});

export default DatePicker;