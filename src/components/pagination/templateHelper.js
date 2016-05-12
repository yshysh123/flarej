import { registerFilter } from 'nornj';

registerFilter({
  clickBtn: function(fn, type) {
    switch(type){
      case 'first':
        return () => fn(1);
      case 'prev':
        return () => fn(parseInt(this.data[0].pageIndex, 10) - 1);
      case 'next':
        return () => fn(parseInt(this.data[0].pageIndex, 10) + 1);
      case 'last':
        return () => fn(this.data[0].pageCount);
      default:
        return () => fn();
    }
  }
});