import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import merge from 'lodash/merge';
import {
  initOption,
  createChart,
  updateChart
} from '../../utils/ecConfig';
import template from './ECharts.t.html';

const EChartsEnhance = (ComposedComponent) => {
  return class EcComponent extends Component {
    static propTypes = {
      update: PropTypes.bool,
      name: PropTypes.string,
      option: PropTypes.object,
      data: PropTypes.array,
      title: PropTypes.string,
      subTitle: PropTypes.string
    };

    static defaultProps = {
      update: true
    };

    constructor(props) {
      super(props);
      this.component = null;
    }

    createOption() {
      const { option, title, subTitle } = this.props;
      return merge(initOption(this.component.props.type, title, subTitle), option);
    }

    createChart() {
      this.chartOption = this.createOption();
      this.chart = createChart(this.component.refs.chart.wrap, this.props.data, this.chartOption);
    }

    componentDidMount() {
      this.createChart();
    }

    componentDidUpdate() {
      const { update } = this.props;
      if (!update) {
        return;
      }

      const {
        data,
        option,
        title,
        subTitle
      } = this.props;

      updateChart(this.chart, data, Object.assign({}, this.chartOption, merge({
        title: {
          text: title,
          subtext: subTitle
        },
        tooltip: {
          trigger: 'axis'
        }
      }, option)));
    }

    componentWillUnmount() {
      this.chart && this.chart.dispose();
    }

    render() {
      const {
        className,
        style,
        height,
        ...others
      } = this.props;

      const classes = classNames({
        'vic-area-chart-area': true,
        [className]: className
      });

      let styles = {};
      if (height != null) {
        styles.height = height;
      }
      if (style) {
        Object.assign(styles, style);
      }

      return template.enhance(this.state, {
        ComposedComponent,
        ref: c => this.component = c,
        classes,
        styles,
        props: others
      });
    }
  };
};

export default EChartsEnhance;