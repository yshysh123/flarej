import { registerComponent } from 'nornj';
import Upload from 'antd/lib/upload';
import 'antd/lib/upload/style/index';

registerComponent({
  'ant-Upload': Upload
});

export {
  Upload
};

export default Upload;