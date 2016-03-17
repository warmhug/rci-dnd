// use jsx to render html, do not modify simple.html

// import 'rc-dnd/assets/index.less';
// import Dnd from 'rc-dnd';
import './demo.less';
import './simple.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dnd from './dnd';

ReactDOM.render(<div>
  <p>Github：
  <a href="https://github.com/warmhug/react-dnd-demo">https://github.com/warmhug/react-dnd-demo</a>
  </p>
  <Dnd />
</div>, document.getElementById('__react-content'));
