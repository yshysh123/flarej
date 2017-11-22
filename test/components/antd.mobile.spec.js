import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });
import jasmineEnzyme from 'jasmine-enzyme';
import nj from 'nornj';
import '../../src/components/antd-mobile/accordion';
import {ActionSheet} from '../../src/components/antd-mobile/actionSheet';
import '../../src/components/antd-mobile/activityIndicator';
import '../../src/components/antd-mobile/badge';
import '../../src/components/antd-mobile/button';
import '../../src/components/antd-mobile/card';
import '../../src/components/antd-mobile/carousel';
import '../../src/components/antd-mobile/checkbox';
import '../../src/components/antd-mobile/datePicker';
import '../../src/components/antd-mobile/flex';
import '../../src/components/antd-mobile/grid';
import '../../src/components/antd-mobile/icon';
import '../../src/components/antd-mobile/inputItem';
import '../../src/components/antd-mobile/list';
import '../../src/components/antd-mobile/modal';
import '../../src/components/antd-mobile/navBar';
import '../../src/components/antd-mobile/noticeBar';

describe('antd mobile spec', function() {
  beforeEach(() => {
    jasmineEnzyme();
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-Accordion><antm-AccordionPanel></antm-AccordionPanel></antm-Accordion>` ());
    console.log(defaultWrapper1.html());
    it('should be div tag with class name "am-accordion" by default', () => {
      expect(defaultWrapper1.find("div").at(0)).toHaveClassName('am-accordion');
    });

    it('should have child div tag with class name "am-accordion-item"', () => {
      expect(defaultWrapper1.find("div").at(1)).toHaveClassName('am-accordion-item');
    });
  });

  describe('default', () => {
    var actionSheet = jasmine.createSpyObj('ActionSheet', ['showActionSheetWithOptions', 'showShareActionSheetWithOptions', 'showShareActionSheetWithOptions', 'close']);
    const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
    const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
    let wrapProps;
    if (isIPhone) {
      wrapProps = {
        onTouchStart: e => e.preventDefault()
      };
    }
    actionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        message: 'I am description, description, description',
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps
      },
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      });

    it('actionSheet.showActionSheetWithOptions should be called', () => {
      expect(actionSheet.showActionSheetWithOptions).toHaveBeenCalled();
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-ActivityIndicator animating/>` ());

    it('should be div tag with class name "am-activity-indicator" by default', () => {
      expect(defaultWrapper1.find("div").at(0)).toHaveClassName('am-activity-indicator');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Badge text='new' style="margin-left:12"/>` ());

    it('should be span tag with class name "am-badge" by default', () => {
      expect(defaultWrapper1.find("span").at(0)).toHaveClassName('am-badge');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Button>Default</antm-Button>` ());
    it('should be a tag with class name "am-buttom" by default', () => {
      expect(defaultWrapper1.find("a").at(0)).toHaveClassName('am-button');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Card>
      <antm-CardHeader
        title="This is title"
        extra={<span>this is extra</span>}
      />
      <antm-CardBody>
        <div>This is content of \`Card\`</div>
      </antm-CardBody>
      <antm-CardFooter content="footer content" extra={<div>extra footer content</div>} />
    </antm-Card>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });

    it('and should have class name "am-card"', ()=>{
      expect(defaultWrapper1).toHaveClassName('am-card');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-Carousel><img/></antm-Carousel>` ());
    console.log(defaultWrapper1.html());
    it('should be div tag with class name "am-carousel" by default', () => {
      expect(defaultWrapper1.find('div').at(0)).toHaveClassName('am-carousel');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-CheckboxItem key="test">test</antm-CheckboxItem>` ());
    console.log(defaultWrapper1.html());
    it('should be div tag with class name "am-checkbox-item" by default', () => {
      expect(defaultWrapper1.find("div").at(0)).toHaveClassName('am-checkbox-item');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-DatePicker><antm-ListItem arrow="horizontal">Datetime</antm-ListItem></antm-DatePicker>` ());

    it('should be div tag with class name "am-list-item" by default', () => {
      expect(defaultWrapper1.find('div').at(1)).toHaveClassName('am-list-item');
    });
    // defaultWrapper1.find('div').at(0).simulate('click');
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Flex>
      <antm-FlexItem></antm-FlexItem>
      <antm-FlexItem></antm-FlexItem>
    </antm-Flex>` ());

    it('should be div tag with class name "am-flexbox" by default', () => {
      expect(defaultWrapper1.find('div').at(0)).toHaveClassName('am-flexbox');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Grid/>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-Icon type="link"/>` ());

    it('should be svg tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('svg');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-InputItem
            type="phone"
            placeholder="phone number"
            clear
          >phone</InputItem>` ());
    it('should contain input tag with "tel" type', () => {
      expect(defaultWrapper1.find('input[type="tel"]').exists()).toBe(true);
    });
  });

  describe('default', () => {
    const defaultWrapper1 = mount(nj `<antm-Modal visible={true}/>` ());
    console.log(5, defaultWrapper1.html());
    it('its props visible equal to true', () => {
      expect(defaultWrapper1.props().visible).toEqual(true);
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `<antm-NavBar mode="dark" leftContent="Back">NavBar</antm-NavBar>` ());

    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });

  describe('default', () => {
    const defaultWrapper1 = shallow(nj `  <antm-NoticeBar marqueeProps=${{ loop: true }}>
    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
  </antm-NoticeBar>` ());
    it('should be div tag by default', () => {
      expect(defaultWrapper1).toHaveTagName('div');
    });
  });
});