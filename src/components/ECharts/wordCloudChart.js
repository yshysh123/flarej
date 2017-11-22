import { Component, PropTypes } from 'react';
import { registerComponent } from 'nornj';
import EChartsEnhance from './EChartsEnhance';
import 'echarts-wordcloud';
import template from './ECharts.t.html';

class WordCloudChart extends Component {
  static propTypes = {
    type: PropTypes.string
  };

  static defaultProps = {
    type: 'wordCloud'
  };

  render() {
    return template.chart(this);
  }
}

const ecWordCloudChart = EChartsEnhance(WordCloudChart);
registerComponent({ 'ec-WordCloudChart': ecWordCloudChart });
export default ecWordCloudChart;