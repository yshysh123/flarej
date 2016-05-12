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
      default:
        return () => fn();
    }
  }
});