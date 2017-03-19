import fj from '../../core';
import { Component } from 'react';
import { registerTmpl } from 'nornj-react';
import classNames from 'classnames';
import tmpls from './grid.t.html';

/**
 * Grid row
 */
@registerTmpl('fj-Row')
export class Row extends Component {
  render() {
    const {
      className,
      style,
      left,
      right,
      children,
      ...others
    } = this.props;

    const classes = classNames({
      'fj-row': true,
      [className]: className
    });

    let styles = {};
    if (style) {
      Object.assign(styles, style);
    }
    if (left) {
      styles.marginLeft = parseInt(left, 10);
    }
    if (right) {
      styles.marginRight = parseInt(right, 10);
    }

    return tmpls.row({
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
      children,
      ...others
    } = this.props;

    const classes = classNames({
      [compClass]: true,
      [className]: className
    });

    let styles = {};
    if (style) {
      Object.assign(styles, style);
    }
    if (width) {
      styles.width = parseInt(width, 10);
    }

    return tmpls.row({
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
export class RowLeft extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-left');
  }
}

/**
 * Grid row right container
 */
@registerTmpl('fj-RowRight')
export class RowRight extends Component {
  constructor(props) {
    super(props);

    this.render = _createRowRender(this, 'fj-row-right');
  }
}

/**
 * Grid col
 */
@registerTmpl('fj-Col')
export class Col extends Component {
  render() {
    const {
      className,
      l,
      m,
      s,
      xs,
      right,
      left,
      shift,
      rightM,
      leftM,
      shiftM,
      rightS,
      leftS,
      shiftS,
      rightXs,
      leftXs,
      shiftXs,
      children,
      ...others
    } = this.props;

    const classes = classNames({
      ['fj-col' + l]: l != null,
      ['fj-col-m' + m]: m != null,
      ['fj-col-s' + s]: s != null,
      ['fj-col-xs' + xs]: xs != null,
      ['fj-col-right' + right]: right != null,
      ['fj-col-left' + left]: left != null,
      ['fj-col-shift' + shift]: shift != null,
      ['fj-col-right-m' + rightM]: rightM != null,
      ['fj-col-left-m' + leftM]: leftM != null,
      ['fj-col-shift-m' + shiftM]: shiftM != null,
      ['fj-col-right-s' + rightS]: rightS != null,
      ['fj-col-left-s' + leftS]: leftS != null,
      ['fj-col-shift-s' + shiftS]: shiftS != null,
      ['fj-col-right-xs' + rightXs]: rightXs != null,
      ['fj-col-left-xs' + leftXs]: leftXs != null,
      ['fj-col-shift-xs' + shiftXs]: shiftXs != null,
      [className]: className
    });

    return tmpls.col({
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
@registerTmpl('fj-ClearFix')
export class ClearFix extends Component {
  render() {
    const {
      className,
      l,
      m,
      s,
      xs,
      ...others
    } = this.props;

    const classes = classNames({
      ['fj-clearfix']: l != null || (m == null && s == null && xs == null),
      ['fj-clearfix-m']: m != null,
      ['fj-clearfix-s']: s != null,
      ['fj-clearfix-xs']: xs != null,
      [className]: className
    });

    return tmpls.clearFix({
      props: others,
      classes,
      wrap: c => this.wrap = c
    });
  }
}

Object.assign(fj, {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
});