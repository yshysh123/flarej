import { Component } from 'react';

class Widget extends Component {
  constructor(props) {
    console.log(props);
    super();
  }

  show() {
    return '1';
  }
}

export default Widget;