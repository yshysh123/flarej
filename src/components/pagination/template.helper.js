import { registerFilter } from 'nornj';

registerFilter({
  clickBtn: function(fn, type) {
    switch(type){
      case 'first':
        return () => {
          let { pageIndex } = this.data[0];
          if(pageIndex != 1) {
            fn(1);
          }
        };
      case 'prev':
        return () => {
          let { pageIndex } = this.data[0];
          if(pageIndex > 1) {
            fn(pageIndex - 1);
          }
        };
      case 'next':
        return () => {
          let { pageIndex, pageCount } = this.data[0];
          if(pageIndex < pageCount) {
            fn(pageIndex + 1);
          }
        };
      case 'last':
        return () => {
          let { pageIndex, pageCount } = this.data[0];
          if(pageIndex != pageCount) {
            fn(pageCount);
          }
        };
      case 'index':
        return () => fn(this.index);
      default:
        return () => fn();
    }
  },
  isCurrentPage: function(no) {
    return parseInt(no, 10) == this.data[0].pageIndex ? '-c' : '';
  },
  showPartPage: function(no, type) {
    let { pageCount } = this.data[0];
    switch(type){
      case '1':  //当前页码 <=  4,左侧显示所有 +  当前页码  +  右侧2个页码 + ... + 尾页
        return no <= 4;
      case '2':  //当前页码 > 4 且<= 页面总数(n) - 3,首页  + ... + 左侧2个页码  + 当前页码  + 右侧2个页码  + ...  +  尾页
        return no > 4 && no <= pageCount - 3;
      case '3':  //当前页码 > 页面总数(n) - 3,首页 + ... +  左侧2个页面 +  当前页码  +  右侧显示所有
        return no > pageCount - 3;
    }
  }
});