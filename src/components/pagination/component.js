import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';
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
    hasBtnGo: true,
    responsive: false,
    responsiveDelay: 70,
    responsiveOnlyWidth: true,
    defaultResponsiveParam: {               //默认响应式参数
      '(max-width: 480px)': {
        state: {
          showCount: false,
          showPageSize: false,
          hasPages: false,
          hasBtnGo: false
        }
      },
      '(min-width: 481px) and (max-width: 768px)': {
        state: {
          showCount: false,
          showPageSize: false,
          hasPages: true,
          hasBtnGo: true
        }
      },
      '(min-width: 769px)': {
        state: {
          showCount: true,
          showPageSize: true,
          hasPages: true,
          hasBtnGo: true
        }
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
    this.pageIndexBlur = this.pageIndexBlur.bind(this);
    this.goPage = this.goPage.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pageIndex !== this.props.pageIndex) {
      this.setState({ pageIndex: nextProps.pageIndex });
    }
  }

  componentWillMount () {
    //初始化时默认执行刷新
    this.refresh();
  }

  getPageCount(pageSize = this.state.pageSize) {
    let { count } = this.props;

    return parseInt(count % pageSize > 0 ? count / pageSize + 1 : count / pageSize, 10);
  }

  //切换每页数据数
  pageSizesChange(e) {
    this.refresh(this.state.pageIndex, parseInt(e.target.value));
  }

  //页数文本框失去焦点
  pageIndexBlur(e) {
    if(!fj.RegExp.num.test(e.target.value.trim())) {
      e.target.value = 1;
    }
  }

  //刷新分页
  refresh(pageIndex = this.state.pageIndex, pageSize = this.state.pageSize) {
    let props = this.props,
      pageCount = this.getPageCount(pageSize);

    if(this.refs.pageTxt) {
      this.refs.pageTxt.value = pageIndex;
    }

    //如果当前页大于总页数,则设置总页数为当前页
    if(pageIndex > pageCount) {
      pageIndex = pageCount;
    }
    else if(pageIndex < 1) {
      pageIndex = 1;
    }

    this.setState({
      pageIndex: pageIndex,
      pageSize: pageSize,
      pageCount: pageCount
    });

    if(props.onChange) {
      props.onChange.call(this, pageIndex, pageSize);
    }
  }

  //跳转页数
  goPage(e) {
    this.refresh(parseInt(this.refs.pageTxt.value, 10));
  }

  render() {
    let disabled = ' fj-disabled',
      state = this.state,
      extra = {
        pageSizesChange: this.pageSizesChange,
        pageIndexBlur: this.pageIndexBlur,
        goPage: this.goPage,
        refresh: this.refresh,
        firstDisabled: '',
        prevDisabled: '',
        nextDisabled: '',
        lastDisabled: ''
      };

    //翻页按钮展示逻辑
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