import { Component } from 'react';
import update from 'react-addons-update';
import { each } from 'nornj';
import utils from '../utils/utils';
import './njHelpers';
let win = window;

class Widget extends Component {
  state = {
    objId: utils.guid()
  };
  
  constructor(props, initialState) {
    super(props);

    Object.assign(this.state, initialState);
    this.init();
  }

  //Initialize
  init() {
    this.bindResponsiveEvts();
  }

  //绑定响应式事件
  bindResponsiveEvts() {
    const props = this.props;
    if (!props.responsive) {
      return;
    }

    //页面尺寸改变时触发响应式处理
    const fn = this.responsiveResize = () => {
      utils.lazyDo(() => {
        let isRh = true;

        //只有在页面宽度改变时执行响应式处理
        if (props.responsiveOnlyWidth) {
          let w = utils.pageWidth();

          //页面宽度和上一次不同
          if (w !== this.globalWidth) {
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

    //初始化时执行一次响应式处理
    this.responsiveHandle(true);
  }

  //响应式处理
  responsiveHandle(isInit) {
    const props = this.props;
    let newState = this.state,
      handlers = [];

    //处理响应参数
    [props.defaultResponsiveParam, props.responsiveParam].forEach((responsiveParam) => {
      each(responsiveParam, (rpp, media) => {
        if (utils.mediaQuery(media)) {  //符合条件时执行响应式处理
          if (rpp.state) {  //设置响应状态值
            newState = update(newState, { $merge: rpp.state });
          }
      
          if (rpp.preHandler) {  //响应前操作
            let ret = rpp.preHandler.call(this, isInit, update(newState, { $merge: {} }));
            if(ret) {
              newState = ret;
            }
          }
      
          if (rpp.handler) {  //响应后操作
            handlers[handlers.length] = {
              handler: rpp.handler,
              delay: rpp.delay
            };
          }
        }
      }, false, false);
    });

    //执行响应后操作
    const runHandlers = () => {
      each(handlers, (h) => {
        const fnH = () => {
          h.handler.call(this, isInit);
        };
      
        if(h.delay) {  //可延迟执行时间
          utils.lazyDo(() => {
            fnH();
          }, h.delay);
        }
        else {
          fnH();
        }
      }, false, true);
    };

    //重置state
    if (isInit) {  //在初始化时需要重新设置state
      this.state = newState;
      runHandlers();
    }
    else {  //非初始化时执行setState
      this.setState(newState, () => runHandlers());
    }
  }

  componentWillUnmount() {
    const responsiveResize = this.responsiveResize;

    //移除响应式事件
    if (responsiveResize) {
      utils.off("resize", responsiveResize, win);
    }
  }
}

export default Widget;