## ECharts

为`ECharts`图表的分模块引入，以及与`NornJ`模板的结合做的一个简单的封装。使用方法如下：

```js
import 'flarej/lib/components/ECharts/lineChart';  //按`flarej/lib/components/ECharts/组件名`引入组件
import 'flarej/lib/components/ECharts/barChart';
import 'flarej/lib/components/ECharts/treeMapChart';
...

class DemoPage extends React.Component {
  state = {
    option: {  //配置项，具体参考echarts图表的option如何配置
      grid: {
        y: 20,
        x: 40,
        y2: 25,
        x2: 30
      }
    },
    data: [  //数据，相当于series参数，具体参考echarts图表的series如何配置
      ...
    ]
  };

  render() {  //在nj模板中，用"ec-*"为组件名使用即可
    return nj`
      <ec-BarChart {option} {data} />
    `(this.state);
  }
}
```

### 支持的组件目录

* ec-BarChart
* ec-FunnelChart
* ec-GaugeChart
* ec-GraphChart
* ec-HeatMapChart
* ec-LineChart
* ec-MapChart
* ec-PieChart
* ec-RadarChart
* ec-SankeyChart
* ec-ScatterChart
* ec-TreeMapChart
* ec-WordCloudChart
* (其他的echarts图表组件待添加)



* 各图表的详细使用方式请看[Echarts 官方文档](http://echarts.baidu.com/index.html)