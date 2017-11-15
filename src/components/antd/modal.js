import { registerComponent } from 'nornj';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index';

registerComponent({
  'ant-Modal': Modal
});

export {
  Modal
};

export default Modal;