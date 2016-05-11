import { registerFilter } from 'nornj';

registerFilter({
  clickBtn: function(fn, type) {
    switch(type){
      case 'first':
        return fn.bind(null, 1, undefined);
      case 'prev':
        return fn.bind(null, parseInt(this.data[0].pageIndex, 10) - 1, undefined);
      case 'next':
        return fn.bind(null, parseInt(this.data[0].pageIndex, 10) + 1, undefined);
      case 'last':
        return fn.bind(null, this.data[0].pageCount, undefined);
      default:
        return fn.bind(null, undefined, undefined);
    }
  }
});