import { Component, PropTypes, Children } from 'react';
import { tmplByKey, registerComponent } from 'nornj';
const T = tmplByKey('fj-Gesture');
import { isMobile } from '../../utils/browsers';

class Gesture extends Component {
  static propTypes = {
    onTapStart: PropTypes.func,    //触摸开始
    onTap: PropTypes.func,         //轻触
    onPan: PropTypes.func,         //平移
    onTapEnd: PropTypes.func,      //触摸结束
    onTapHold: PropTypes.func,     //长按
    onSwipe: PropTypes.func,       //扫动
    onSwipeLeft: PropTypes.func,   //左扫动
    onSwipeRight: PropTypes.func,  //右扫动
    onSwipeTop: PropTypes.func,    //上扫动
    onSwipeBottom: PropTypes.func, //下扫动
    onScrollEnd: PropTypes.func,   //滚动结束
    onPinch: PropTypes.func,       //双指缩放
    onRotate: PropTypes.func,      //双指旋转
    onShake: PropTypes.func        //摇动
  };

  static defaultProps = {
    multiTapStart: false,  //是否执行多点触控的tapStart事件
    preventScroll: true,   //是否阻止滚动
    preventClick: true,    //是否阻止点击
    scrollElemV: null,     //滚动条所在元素(纵向)
    scrollElemH: null,     //滚动条所在元素(横向)
    durationLimitH: 300,   //触摸交互时间如果长于该值则视作按住
    durationLimitS: 150,   //触摸交互时间如果长于该值则不视作扫动
    distanceLimitH: 30,    //扫动水平位移必须大于该值
    distanceLimitV: 75,    //扫动垂直位移必须大于该值
    scrollMaxX: null,      //纵向平移时如x轴位移不大于该值则视为视为满足滚动条件之一,如为null则不发生滚动
    scrollMaxY: null,      //横向平移时如y轴位移不大于该值则视为视为满足滚动条件之一,如为null则不发生滚动
    scrollMinX: 10,        //横向平移时如x轴位移不小于该值则视为视为满足滚动条件之一,另一个条件为scrollMaxY
    scrollMinY: 5,        //纵向平移时如y轴位移不小于该值则视为视为满足滚动条件之一,另一个条件为scrollMaxX
    scalePinchClose: 0.05, //缩小时比例必须小于该阀值
    scalePinchOpen: 0.05,  //放大时比例必须大于该阀值
    durationPinch: 100,    //每次缩放间隔时间
    durationRotate: 100,   //每次旋转间隔时间
    durationPan: null,     //每次平移间隔时间
    rotationCcw: 5,        //顺时间旋转时角度必须大于该阀值
    rotationCw: 5,         //逆时间旋转时角度必须大于该阀值
    tapDuration: 350,      //触摸时间不超过该阀值则视为轻触
    tapLimitX: 0,
    tapLimitY: 0,
    holdLimitX: 1,         //检测长按移动x轴距离阀值
    holdLimitY: 1,         //检测长按移动y轴距离阀值
    shakeLimit: 0.23,      //摇动速度超过该阀值则视为摇动
    shakeDuration: 100,    //每次检测摇动间隔时间
    shakeFreezeDelay: 800  //解除冻结摇动延迟时间
  };

  constructor(props) {
    super(props);

    if (isMobile) {
      this.startPosX = 0;  //起始触摸点x轴坐标
      this.lastPosX = 0;   //最后触摸点x轴坐标
      this.startPosY = 0;  //起始触摸点y轴坐标
      this.lastPosY = 0;   //最后触摸点y轴坐标
      this.dx = 0;         //触摸x轴移动距离
      this.dy = 0;         //触摸y轴移动距离
      this.lastPinchTime = 0;  //最后缩放时间
      this.lastScale = 0;  //最后一次缩放的比例值
      this.lastPanTime = 0;//最后一次平移时间
      this.lastRotateTime = 0;  //最后旋转时间
      this.lastRotation = 0;  //最后一次旋转的角度变化值

      //滚动条所在元素
      if (props.onTapHold) {
        if (props.scrollElemV) {
          this.scrollElemV = props.scrollElemV;
        }
        else {
          this.scrollElemV = document.body;
        }
        if (!props.scrollElemH) {
          this.scrollElemH = this.scrollElemV;
        }
      }

      //是否支持摇动
      this.supportShake = 'DeviceMotionEvent' in window;
      if (this.supportShake && this.props.onShake) {  //记录上一次检测的摇动值
        this.lastShakeX = 0;
        this.lastShakeY = 0;
        this.lastShakeZ = 0;
        this.lastTime = 0;
        this.freezeShake = false;
      }
    }
  }

  render() {
    return T`<#cloneElem {props}>{children}</#cloneElem>`.renderComp([{
      props: {
        onTouchStart: () => {
          console.log(Date.now());
        }
      }
    }, this.props]);
  }
}

registerComponent({
  'fj-Gesture': Gesture
});

export {
  Gesture
};