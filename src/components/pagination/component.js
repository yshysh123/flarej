import { compileComponent } from 'nornj';
import Widget from '../widget';
import tmpl from './template';
const template = compileComponent(tmpl, 'pagination');

class Pagination extends Widget {
  static defaultProps = {
    fjType: 'pagn',
    pageSize: [15, 30, 50],                 //每页数据数
    pageCount: 0,                           //总页数
    curPage: 1,                             //当前页码
    dataCount: 0,                           //数据总数
    totalTxt: "条数据",
    btnGoName: "确定",                      //跳转按钮上的字
    noCount: false,                         //为true则在无法获取数据总数时使用
    showDataCount: true,                    //是否显示数据总数
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
      curPage: props.curPage,
      curPageSize: props.pageSize[0]
    });
  }

  init() {
    super.init();

    this.pageSizeChange = this.pageSizeChange.bind(this);
    this.goPage = this.goPage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.curPage !== this.props.curPage) {
      this.setState({ curPage: nextProps.curPage });
    }
  }

  //shouldComponentUpdate (nextProps, nextState) {
  //  if(nextState.) {
  //  }
  //}

  pageSizeChange(e) {
    let { curPage, curPageSize } = this.state;
    this.refresh(curPage, curPageSize);
  }

  refresh(page = this.state.curPage, pageSize = this.state.curPageSize) {
    this.refs.pageTxt.value = page;
    this.setState({
      curPage: page,
      curPageSize: pageSize
    });
  }

  goPage(e) {
    this.refresh(this.refs.pageTxt.value);
  }

  render() {
    return template(this.state, this.props, {
      pageSizeChange: this.pageSizeChange,
      goPage: this.goPage,
      refresh: (e) => {
        this.refresh();
      }
    });
  }
}

export default Pagination;