import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });
import jasmineEnzyme from 'jasmine-enzyme';
import nj from 'nornj';
import {Affix} from '../../src/components/antd/affix';
import '../../src/components/antd/alert';
import '../../src/components/antd/breadcrumb';
import '../../src/components/antd/button';
import '../../src/components/antd/calendar';
import '../../src/components/antd/card';
import '../../src/components/antd/cascader';
import '../../src/components/antd/checkbox';
import '../../src/components/antd/collapse';
import '../../src/components/antd/datePicker';
import '../../src/components/antd/form';
import '../../src/components/antd/icon';
import '../../src/components/antd/input';
import '../../src/components/antd/menu';
import {Message} from '../../src/components/antd/message';
import '../../src/components/antd/modal';
import '../../src/components/antd/notification';
import '../../src/components/antd/pagination';
import '../../src/components/antd/popover';
import '../../src/components/antd/progress';
import '../../src/components/antd/radio';
import '../../src/components/antd/select';
import '../../src/components/antd/slider';
import '../../src/components/antd/switch';
import '../../src/components/antd/table';
import '../../src/components/antd/tabs';
import '../../src/components/antd/tooltip';
import '../../src/components/antd/transfer';
import '../../src/components/antd/tree';
import '../../src/components/antd/treeSelect';
import '../../src/components/antd/upload';

describe('Antd spec', function() {
  beforeEach(() => {
    jasmineEnzyme();
  });

  // describe('default', () => {
  //   const defaultWrapper1 = shallow(nj `<ant-Affix/>` ());
  //
  //   it('should be div tag by default', () => {
  //     expect(defaultWrapper1).toHaveTagName('div');
  //   });
  // });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Alert message="Success Text" type="success"/>` ());

    it('should be Animate tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Animate');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Breadcrumb><ant-Breadcrumb.Item>Home</ant-Breadcrumb.Item></ant-Breadcrumb>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });

    it('should has a class: ant-breadcrumb', ()=>{
      expect(defaultWrapper1).toHaveClassName('ant-breadcrumb');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Button>Default</ant-Button>` ());

    it('should be button tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('button');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Calendar/>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Card><p>Card content</p></ant-Card>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });

    it('should has a class: ant-card', ()=>{
      expect(defaultWrapper1).toHaveClassName('ant-card');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Cascader />` ());

    it('should be Cascader tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Cascader');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Checkbox>Checkbox</ant-Checkbox>` ());

    it('should be label tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('label');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Collapse />` ());

    it('should be Collapse tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Collapse');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-datePicker />` ());

    it('should be CalenderWrapper tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('CalenderWrapper');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Form><ant-FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <ant-Input placeholder="Username" />
          )}
        </ant-FormItem></ant-Form>` ());

    it('should be form tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('form');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Icon type="link"/>` ());

    it('should be i tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('i');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Input />` ());

    it('should be input tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('input');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Menu />` ());

    it('should be Menu tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Menu');
    });
  });

  describe('default', () => {
    var message = jasmine.createSpyObj('Message', ['info', 'error', 'success', 'warning']);

    message.info('This is a normal message');

    it('should be called', () => {
      expect(message.info).toHaveBeenCalled();
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Modal />` ());

    it('should be DialogWrap tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('DialogWrap');
    });
  });

  describe('default', () => {
    var notification = jasmine.createSpyObj('Notification', ['info', 'error', 'success', 'warning']);

    notification.info({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });

    it('should be called', () => {
      expect(notification.info).toHaveBeenCalled();
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Pagination />` ());

    it('should be Pagination tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Pagination');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Popover />` ());

    it('should be Tooltip tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Tooltip');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Progress />` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Radio />` ());

    it('should be label tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('label');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Select />` ());

    it('should be Select tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Select');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Slider />` ());

    it('should be a ComponentEnhancer(undefined)', () => {
      expect(defaultWrapper1).toHaveTagName('ComponentEnhancer(undefined)');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Switch />` ());

    it('should be Switch tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Switch');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Table />` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Tabs />` ());

    it('should be Tabs tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Tabs');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Tooltip />` ());

    it('should be Tooltip tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Tooltip');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Transfer />` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Tree />` ());

    it('should be Tree tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Tree');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-TreeSelect />` ());

    it('should be Select tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('Select');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<ant-Upload />` ());

    it('should be span tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('span');
    });
  });
});