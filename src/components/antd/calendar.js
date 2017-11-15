import { registerComponent } from 'nornj';
import Calendar from 'antd/lib/calendar';
import 'antd/lib/calendar/style/index';

registerComponent({
  'ant-Calendar': Calendar
});

export {
  Calendar
};

export default Calendar;