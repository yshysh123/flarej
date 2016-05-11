import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';
import './filters';
const template = compileComponent(tmpl, 'pagination');

class Pagination extends Widget {
  static defaultProps = {
    fjType: 'pagn',
    pageSize: 15,                           //每页数据数
    pageSizes: [15, 30, 50],                //可选择的每页数据数
    pageIndex: 1,                           //当前页码,从1开始
    count: 0,                               //数据总数
    totalTxt: "条数据",
    btnGoName: "跳转",                      //跳转按钮上的字
    noCount: false,                         //为true则在无法获取数据总数时使用
    setPageSize: false,                     //是否可以设置每页数据数
    showCount: true,                        //是否显示数据总数
    showPageSize: true,                     //是否显示每页数据数
    showPageCount: true,                    //是否显示总页数
    showRefresh: true,
    hasPages: true,                         //是否显示页数链接
    responsive: true,
    responsiveDelay: 70,
    responsiveOnlyWidth: true,
    responsiveParam: {
      '(max-width: 768px)|default': {
        //preHandler: (isInit, newState) => {
        //  newState.objId = 5000;
        //  return newState;
        //},
        state: { objId: 10000 },
        delay: 100
      },
      '(min-width: 769px)|default': {
        state: { objId: 20000 },
        delay: 100
      }
    }
  };
  
  constructor(props) {
    super(props, {
      pageIndex: props.pageIndex,
      pageSize: props.pageSize
    });
  }

  init() {
    this.state.pageCount = this.getPageCount()  //总页数
    super.init();

    this.pageSizesChange = this.pageSizesChange.bind(this);
    this.goPage = this.goPage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pageIndex !== this.props.pageIndex) {
      this.setState({ pageIndex: nextProps.pageIndex });
    }
  }

  //shouldComponentUpdate (nextProps, nextState) {
  //  if(nextState.) {
  //  }
  //}

  getPageCount(pageSize = this.state.pageSize) {
    let { count } = this.props;

    return parseInt(count % pageSize > 0 ? count / pageSize + 1 : count / pageSize, 10);
  }

  //切换每页数据数
  pageSizesChange(e) {
    this.refresh(this.state.pageIndex, e.target.value);
  }

  //刷新分页
  refresh(page = this.state.pageIndex, pageSize = this.state.pageSize) {
    this.refs.pageTxt.value = page;
    this.setState({
      pageIndex: page,
      pageSize: pageSize,
      pageCount: this.getPageCount(pageSize)
    });
  }

  //跳转页数
  goPage(e) {
    this.refresh(this.refs.pageTxt.value);
  }

  render() {
    let disabled = ' fj-disabled',
      state = this.state,
      extra = {
        self: this,
        pageSizesChange: this.pageSizesChange,
        goPage: this.goPage,
        refresh: (e) => {
          this.refresh();
        },
        firstDisabled: '',
        prevDisabled: '',
        nextDisabled: '',
        lastDisabled: ''
      };

    //计算按钮展示逻辑
    if (state.pageCount <= 1) {  //只有一页
      extra.firstDisabled = disabled;
      extra.prevDisabled = disabled;
      extra.nextDisabled = disabled;
      extra.lastDisabled = disabled;
    }
    else if (state.pageIndex == 1) {  //首页
      extra.firstDisabled = disabled;
      extra.prevDisabled = disabled;
    }
    else if (state.pageIndex == state.pageCount) {  //尾页
      extra.nextDisabled = disabled;
      extra.lastDisabled = disabled;
    }

    return template(state, this.props, extra);
  }
}

export default Pagination;