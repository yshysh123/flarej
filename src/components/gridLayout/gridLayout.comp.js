import { Component } from 'react';
import { registerTmpl, compileComponent } from 'nornj';
import '../../njConfig';
import classNames from 'classnames';
import tmpl from './gridLayout.tmpl';
const templateRow = compileComponent(tmpl.row);

/**
 * Grid row
 */
@registerTmpl('fj-Row')
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

/**
 * Grid row left container
 */
@registerTmpl('fj-RowLeft')
class RowLeft extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-left');
  }
}

/**
 * Grid row right container
 */
@registerTmpl('fj-RowRight')
class RowRight extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-right');
  }
}

/**
 * Grid col
 */
@registerTmpl({
  name: 'fj-Col',
  template: tmpl.col
})
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

    return this.template({
      props: others,
      classes,
      children,
      wrap: c => this.wrap = c
    });
  }
}

/**
 * Clear the float style
 */
@registerTmpl({
  name: 'fj-ClearFix',
  template: tmpl.clearFix
})
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

    return this.template({
      props: others,
      classes,
      wrap: c => this.wrap = c
    });
  }
}

export {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
};