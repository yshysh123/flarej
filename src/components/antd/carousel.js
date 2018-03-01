import { registerComponent } from 'nornj';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/index';

registerComponent({
  'ant-Carousel': Carousel
});

export {
  Carousel
};

export default Carousel;