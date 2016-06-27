import { Component } from 'react';
import { compileComponent } from 'nornj';
import classNames from 'classnames';
import utils from '../../utils/utils';
import tmpl from './gridLayout.tmpl';
const templateRow = compileComponent(tmpl.row, 'row');

class Row extends Component {
  static defaultProps = {
    fjType: 'row'
  }

  render() {
    const [{
      className,
      style,
      left,
      right,
      children
    }, others] = utils.splitObject(this.props, ['className', 'style', 'left', 'right', 'children']);

    const classes = classNames({
      'fj-row': true,
      [className]: className
    });

    let styles = {};
    if(style) {
      Object.assign(styles, style);
    }
    if(left) {
      styles.marginLeft = parseInt(left, 10);
    }
    if(right) {
      styles.marginRight = parseInt(right, 10);
    }

    return templateRow({
      props: others,
      classes,
      styles,
      children
    });
  }
}

function _createRender(context, compClass) {
  return function() {
    const [{
      className,
      style,
      width,
      children
    }, others] = utils.splitObject(this.props, ['className', 'style', 'width', 'children']);

    const classes = classNames({
      [compClass]: true,
      [className]: className
    });

    let styles = {};
    if(style) {
      Object.assign(styles, style);
    }
    if(width) {
      styles.width = parseInt(width, 10);
    }

    return templateRow({
      props: others,
      classes,
      styles,
      children
    });
  }.bind(context);
}

class RowLeft extends Component {
  static defaultProps = {
    fjType: 'rowLeft'
  }

  constructor(props) {
    super(props);

    this.render = _createRender(this, 'fj-row-left');
  }
}

class RowRight extends Component {
  static defaultProps = {
    fjType: 'rowRight'
  }

  constructor(props) {
    super(props);

    this.render = _createRender(this, 'fj-row-right');
  }
}

export {
  Row,
  RowLeft,
  RowRight
};