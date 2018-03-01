import { registerComponent } from 'nornj';
import Rate from 'antd/lib/rate';
import 'antd/lib/rate/style/index';

registerComponent({
  'ant-Rate': Rate
});

export {
  Rate
};

export default Rate;