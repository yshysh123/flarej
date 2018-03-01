import { registerComponent } from 'nornj';
import TimePicker from 'antd/lib/time-picker';
import 'antd/lib/time-picker/style/index';

registerComponent({
  'ant-TimePicker': TimePicker
});

export {
  TimePicker
};

export default TimePicker;