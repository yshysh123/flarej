import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';

class Pagination extends Widget {
  static defaultProps = {
    fjType: 'pagn',
    responsive: false,
    responsiveDelay: 70,
    responsiveOnlyWidth: true,
    responsiveParam: {
      '(max-width: 768px)|default': {
        //preHandler: (isInit, newState) => {
        //  newState.objId = 5000;
        //  return newState;
        //},
        state: { objId: 10000 },
        delay: 100
      },
      '(min-width: 769px)|default': {
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
    return this.template({ id: this.show() });
  }
}

export default Pagination;