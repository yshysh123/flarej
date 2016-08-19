import { Component } from 'react';
import {
  compileComponent,
  registerComponent
} from 'nornj';
import '../../njConfig';
import classNames from 'classnames';
import tmpl from './gridLayout.tmpl';
const templateRow = compileComponent(tmpl.row, 'row');
const templateCol = compileComponent(tmpl.col, 'col');
const templateClearFix = compileComponent(tmpl.clearFix, 'clearFix');

//Grid row
class Row extends Component {
  render() {
    const {
      className,
      style,
      left,
      right,
      children, ...others } = this.props;

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
      children,
      wrap: c => this.wrap = c
    });
  }
}

function _createRowRender(context, compClass) {
  return function() {
    const {
      className,
      style,
      width,
      children
    , ...others } = this.props;

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
      children,
      wrap: c => this.wrap = c
    });
  }.bind(context);
}

//Grid row left container
class RowLeft extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-left');
  }
}

//Grid row right container
class RowRight extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-right');
  }
}

//Grid col
class Col extends Component {
  render() {
    const {
      className,
      l,
      m,
      s,
      ms,
      right,
      left,
      shift,
      rightM,
      leftM,
      shiftM,
      rightS,
      leftS,
      shiftS,
      rightMs,
      leftMs,
      shiftMs,
      children, ...others } = this.props;

    const classes = classNames({
      ['fj-col' + l]: l != null,
      ['fj-col-m' + m]: m != null,
      ['fj-col-s' + s]: s != null,
      ['fj-col-ms' + ms]: ms != null,
      ['fj-col-right' + right]: right != null,
      ['fj-col-left' + left]: left != null,
      ['fj-col-shift' + shift]: shift != null,
      ['fj-col-right-m' + rightM]: rightM != null,
      ['fj-col-left-m' + leftM]: leftM != null,
      ['fj-col-shift-m' + shiftM]: shiftM != null,
      ['fj-col-right-s' + rightS]: rightS != null,
      ['fj-col-left-s' + leftS]: leftS != null,
      ['fj-col-shift-s' + shiftS]: shiftS != null,
      ['fj-col-right-ms' + rightMs]: rightMs != null,
      ['fj-col-left-ms' + leftMs]: leftMs != null,
      ['fj-col-shift-ms' + shiftMs]: shiftMs != null,
      [className]: className
    });

    return templateCol({
      props: others,
      classes,
      children,
      wrap: c => this.wrap = c
    });
  }
}

//Clear the float style
class ClearFix extends Component {
  render() {
    const {
      className,
      l,
      m,
      s,
      ms, ...others } = this.props;

    const classes = classNames({
      ['fj-clearfix']: l != null,
      ['fj-clearfix-m']: m != null,
      ['fj-clearfix-s']: s != null,
      ['fj-clearfix-ms']: ms != null,
      [className]: className
    });

    return templateClearFix({
      props: others,
      classes,
      wrap: c => this.wrap = c
    });
  }
}

registerComponent({
  'fj-Row': Row,
  'fj-RowLeft': RowLeft,
  'fj-RowRight': RowRight,
  'fj-Col': Col,
  'fj-ClearFix': ClearFix
});

export {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
};