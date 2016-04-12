import Widget from './widget';
import nj from 'nornj';

class Pagination extends Widget {
  show() {
    return super.show();
  }

  render() {
    return nj.compileComponent(nj`<div>test${this.show()}</div>`)();
  }
}

export default Pagination;