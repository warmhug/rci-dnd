// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import InfiniteScrollFn from 'react-infinite-scroll';
// const InfiniteScroll = InfiniteScrollFn(React);
import Infinite from 'react-infinite';
import ReactList from 'react-list';
import './demo.less';

function buildElements(start, end) {
  var elements = [];
  for (var i = start; i < end; i++) {
    elements.push(<div key={i} className="infi-item">
      List Item {i}
    </div>);
  }
  return elements;
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfiniteLoading: false,
      elements: buildElements(0, 20),
    };
  }
  handleInfiniteLoad() {
    console.log('load', arguments);
    this.setState({
      isInfiniteLoading: true
    });
    setTimeout(() => {
      var elemLength = this.state.elements.length,
          newElements = buildElements(elemLength, elemLength + 30);
      this.setState({
        isInfiniteLoading: false,
        elements: this.state.elements.concat(newElements)
      });
    }, 1000);
  }
  renderItem(index, key) {
    return (<div key={key} className="infi-item">item {index}</div>)
  }
  render() {
    const infi = <Infinite elementHeight={40} className="infi"
      containerHeight={250}
      infiniteLoadBeginEdgeOffset={200}
      onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
      loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
      isInfiniteLoading={this.state.isInfiniteLoading}>
      {this.state.elements}
    </Infinite>;
    return (<div>
      <h3>react-infinite</h3>
      {infi}
      <h3>react-list</h3>
      <div className="infi" style={{overflow: 'auto', maxHeight: 400}}>
        <ReactList
          itemRenderer={this.renderItem.bind(this)}
          length={1000}
        />
      </div>
    </div>);
  }
}


ReactDOM.render(<div>
  <p>Github：
  <a href="https://github.com/warmhug/rci-dnd">https://github.com/warmhug/rci-dnd</a>
  </p>
  <Demo />
</div>, document.getElementById('__react-content'));
