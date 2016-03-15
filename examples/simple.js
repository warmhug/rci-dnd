// use jsx to render html, do not modify simple.html

// import 'rc-dnd/assets/index.less';
// import Dnd from 'rc-dnd';
import './simple.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dnd from './dnd';

class Demo extends Component {
  render() {
    return <Dnd />;
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
