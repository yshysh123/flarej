import { registerComponent } from 'nornj';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/index';

registerComponent({
  'ant-Menu': Menu,
  'ant-SubMenu': Menu.SubMenu,
  'ant-MenuItemGroup': Menu.ItemGroup,
  'ant-MenuItem': Menu.Item
});

export {
  Menu
};

export default Menu;