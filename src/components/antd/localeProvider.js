import { registerComponent } from 'nornj';
import LocaleProvider from 'antd/lib/locale-provider';
import 'antd/lib/locale-provider/style/index';

registerComponent({
  'ant-LocaleProvider': LocaleProvider
});

export {
  LocaleProvider
};

export default LocaleProvider;