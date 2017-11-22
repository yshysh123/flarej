## Ant Mobile Design

为`Ant Mobile Design`组件的分模块引入，以及与`NornJ`模板的结合做的一个简单的封装。使用方法如下：

```js
import 'flarej/lib/components/antd-mobile/card';  //按`flarej/lib/components/antd-mobile/组件名`引入组件
import 'flarej/lib/components/antd-mobile/grid';
import 'flarej/lib/components/antd-mobile/tabs';
...

class DemoPage extends React.Component {
  ...
  render() {  //在nj模板中，用"antm-*"为组件名使用即可。各组件的用法请参考Ant Mobile Design官网
    return nj`
      <antm-Card>
        <antm-CardHeader title="card title"></antm-CardHeader>
        <antm-CardBody>
 			<div>card body</div>
        </antm-CardBody>
    </antm-Card>
    `();
  }
}
```

### 支持的组件目录

* antm-Accordion
* ant-ActionSheet
* antm-ActivityIndicator
* antm-Badge
* antm-Button
* antm-Card
* antm-Carousel
* antm-Checkbox
* antm-DatePicker
* antm-Flex
* antm-Grid
* antm-Icon
* antm-InputItem
* antm-List
* antm-Modal
* antm-NavBar
* antm-NoticeBar
* antm-Picker
* antm-Popover
* antm-Popup
* antm-Radio
* antm-Range
* antm-SegmentedControl
* antm-Slider
* antm-Stepper
* antm-Steps
* antm-Switch
* antm-Tabs
* antm-TextareaItem
* antm-Toast
* antm-WhiteSpace
* antm-WingBlank
* (其他的antd mobile组件待添加)


* 各组件的详细使用方式请看[Ant Mobile Design 官方文档](https://mobile.ant.design/docs/react/introduce-cn)