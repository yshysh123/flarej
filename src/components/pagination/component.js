import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';
const template = compileComponent(tmpl);

class Pagination extends Widget {
  constructor(props) {
    console.log(props);
    super(props);
  }

  show() {
    return super.show();
  }

  render() {
    return template({ id: this.show() });
  }
}

export default Pagination;