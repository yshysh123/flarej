import { registerComponent } from 'nornj';
import Carousel from 'antd-mobile/lib/carousel/index.web';
import 'antd-mobile/lib/carousel/style/index.web';

registerComponent({
  'antm-Carousel': Carousel
});

export default Carousel;