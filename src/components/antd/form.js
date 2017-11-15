import { registerComponent } from 'nornj';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/index';
const FormItem = Form.Item;

registerComponent({
  'ant-Form': Form,
  'ant-FormItem': FormItem
});

export {
  Form,
  FormItem
};

export default Form;