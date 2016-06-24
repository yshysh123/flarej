import { Component } from 'react';
import { compileComponent } from 'nornj';
import classNames from 'classnames';
import utils from '../../utils/utils';
import tmpl from './gridLayout.tmpl';
const { row } = tmpl;
const templateRow = compileComponent(row, 'row');

class Row extends Component {
  static defaultProps = {
    fjType: 'row'
  }

  render() {
    const [{className, children}, others] = utils.splitObject(this.props, ['className', 'children']);

    const classes = classNames({
      'fj-row': true,
      [className]: className
    });

    return templateRow({
      props: others,
      classes,
      children
    });
  }
}

export { Row };