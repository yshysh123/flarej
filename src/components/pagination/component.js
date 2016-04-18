import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';

class Pagination extends Widget {
  static defaultProps = {
    fjType: 'Pagination',
    responsive: false,
    responsiveParam: {
      "(max-width: 768px)|Pagination": {
        state: { objId: 10000 },
        delay: 100
      },
      "(min-width: 769px)|Pagination": {
        state: { objId: 20000 },
        delay: 100
      }
    }
  };
  
  constructor(props) {
    super(props, {});

    this.init();
  }

  template = compileComponent(tmpl);

  show() {
    return super.show();
  }

  render() {
    alert(this.props);
    return this.template({ id: this.show() });
  }
}

export default Pagination;