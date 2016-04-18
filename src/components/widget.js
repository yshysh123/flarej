import { Component } from 'react';
import nj from 'nornj';
import utils from '../utils/utils';
let win = window;

class Widget extends Component {
  static defaultProps = {
    fjType: 'Widget',
    responsive: false,
    responsiveDelay: 70,
    responsiveOnlyWidth: true,
    responsiveParam: {  //响应式配置
      /*
      '(max-width: 768px)|Widget': {  //格式同css媒体查询相同,附加fjType是为了解决mixin时对象名相同
        state: { width: 320 },
        preHandler: function(isInit) {
          ...
        },
        handler: function(isInit) {
          ...
        },
        delay: 100
      }
      */
    }
  };

  state = {
    objId: utils.guid()
  };
  
  constructor(props, initialState) {
    super(props);

    Object.assign(this.state, initialState);
  }

  init() {
    //this.bindResponsiveEvts();
  }

  //绑定响应式事件
  bindResponsiveEvts() {
    const props = this.props;
    if (!props.responsive) {
      return;
    }

    const fn = this.responsiveResize = () => {  //页面尺寸改变时触发响应式处理
      utils.lazyDo(() => {
        var isRh = true;
        if (props.responsiveOnlyWidth) {  //只有在页面宽度改变时执行响应式处理
          var w = utils.pageWidth();
          if (w !== this.globalWidth) {  //页面宽度和上一次不同
            this.globalWidth = w;
            isRh = true;
          }
          else {
            isRh = false;
          }
        }

        if (isRh) {  //响应式处理
          this.responsiveHandle();
        }
      }, props.responsiveDelay, `ld_${props.fjType}_responsive`, this);
    };

    utils.on('resize', fn, win);

    fn(true);  //初始化时执行一次响应式处理
  }

  //响应式处理
  responsiveHandle(isInit) {
    const props = this.props;

    nj.each(props.responsiveParam, (rpp, o) => {
      const fnP = () => {
        if (rpp.preHandler) {  //执行响应前操作
          rpp.preHandler.call(this, isInit);
        }
        if (rpp.state) {  //设置响应状态值
          this.setState(rpp.state);
        }
        if (rpp.handler) {  //执行响应操作
          rpp.handler.call(this, isInit);
        }
      };

      if (fj.mediaQuery(o.split("|")[0])) {  //符合条件时执行响应式处理
        if (rpp.delay) {  //可延迟执行时间
          fj.lazyDo(() => {
            fnP();
          }, rpp.delay);
        }
        else {
          fnP();
        }
      }
    }, false, false);
  }

  componentWillUnmount() {
    const responsiveResize = this.responsiveResize;

    //移除响应式事件
    if (responsiveResize) {
      utils.off("resize", responsiveResize, win);
    }
  }

  show() {
    return this.state.objId;
  }
}

export default Widget;