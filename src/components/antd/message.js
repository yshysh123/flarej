import { registerComponent } from 'nornj';
import Message from 'antd/lib/message';
import 'antd/lib/message/style/index';
//import Global_index from '../../common/index';
//import $ from 'jquery';

registerComponent({
  'ant-Message': Message
});

// let oBody = $('body'),
//   messageMask = $(`<div class="vic-message-mask"></div>`);

// //关闭提示信息框
// const closeMessage = () => {
//   if (Global_index.hideMessage) {
//     messageMask.detach();
//     Global_index.hideMessage();
//   }
// };

// //提示信息promise集合
// let messageList = [];

// //监测并关闭提示信息框
// function monitorMessage(message, times = 2, content = '正在获取数据...') {
//   if (messageList.length < 1) {
//     Global_index.hideMessage = Message.loading(content, 0);
//     oBody.append(messageMask);
//   }
//   messageList.push(message);

//   if (messageList.length >= times) {
//     Promise.all(messageList).then(() => {
//       closeMessage();
//       messageList.length = 0;
//     });
//   }
// }

export {
  Message
};

export default Message;