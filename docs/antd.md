## Ant Design

为`Ant Design`组件的分模块引入，以及与`NornJ`模板的结合做的一个简单的封装。使用方法如下：

```js
import 'flarej/lib/components/antd/card';  //按`flarej/lib/components/antd/组件名`引入组件
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/table';
...

class DemoPage extends React.Component {
  ...
  render() {  //在nj模板中，用"ant-*"为组件名使用即可。各组件的用法请参考Ant design官网
    return nj`
      <ant-Table {columns}
                 dataSource={demoData}
                 pagination={false}
                 rowKey="attrName"
                 bordered
                 ref="demoTable" />
    `();
  }
}
```

### 支持的组件目录

* ant-Affix
* ant-Alert
* ant-Breadcrumb
* ant-Button
* ant-Card
* ant-Cascader
* ant-Checkbox
* ant-Collapse
* ant-DatePicker
* ant-Form
* ant-Icon
* ant-Input
* ant-Menu
* ant-Message
* ant-Modal
* ant-Notification
* ant-Pagination
* ant-popover
* ant-Progress
* ant-Radio
* ant-Select
* ant-Slider
* ant-Switch
* ant-Table
* ant-Tabs
* ant-Tooltip
* ant-Transfer
* ant-Tree
* ant-TreeSelect
* ant-Upload
* ant-Steps
* ant-Dropdown
* (其他的antd组件待添加)


* 各组件的详细使用方式请看[Ant Design 官方文档](https://ant.design/docs/react/introduce-cn)