// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'rci-dnd/assets/index.less';
import './demo.less';
import Dnd from 'rci-dnd';
import data from './data';

// import InfiniteScrollFn from 'react-infinite-scroll';
// const InfiniteScroll = InfiniteScrollFn(React);
import Infinite from 'react-infinite';

const Block = Dnd.Block;
const Card = Dnd.Card;

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
      data,
      isInfiniteLoading: false,
      elements: buildElements(0, 20),
    };
  }
  handleInfiniteLoad(bIndex) {
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
  onEndDrag(data) {
    this.setState({data});
  }
  render() {
    const infi = <Infinite elementHeight={40}
      containerHeight={250}
      infiniteLoadBeginEdgeOffset={200}
      onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
      loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
      isInfiniteLoading={this.state.isInfiniteLoading}>
      {this.state.elements}
    </Infinite>;

    return (<div>
      <Dnd data={this.state.data}
        onEndDrag={this.onEndDrag.bind(this)}
        onDrop={this.onEndDrag.bind(this)}
        onMoveCard={this.onEndDrag.bind(this)}
        onEnterBlock={this.onEndDrag.bind(this)}
        >
        {data.map((block, index) => {
          return (<Block key={index}>
            <div>
            {block.cards.map((card, i) => {
              return (<Card key={card.id}
                  placeholder={card._placeholder}
                  bIndex={index}
                  content={card.content} />)
            })}
            </div>
          </Block>);
        })}
      </Dnd>
    </div>);
  }
}


ReactDOM.render(<div>
  <p>Github：
  <a href="https://github.com/warmhug/rci-dnd">https://github.com/warmhug/rci-dnd</a>
  </p>
  <Demo />
</div>, document.getElementById('__react-content'));
