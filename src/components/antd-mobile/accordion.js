import { registerComponent } from 'nornj';
import Accordion from 'antd-mobile/lib/accordion/index.web';
import 'antd-mobile/lib/accordion/style/index.web';

registerComponent({
  'antm-Accordion': Accordion,
  'antm-AccordionPanel': Accordion.Panel
});

export default Accordion;