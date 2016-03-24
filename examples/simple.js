// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'rci-dnd/assets/index.less';
import './demo.less';
// import 'antd/lib/index.css';
import { Icon } from 'antd';
import Infinite from 'react-infinite';

import Dnd from 'rci-dnd';
import data from './data';
const Block = Dnd.Block;
const Card = Dnd.Card;

let _start = 100;
function addData() {
  var added = [];
  for (let i = 0; i < 10; i++) {
    _start += i;
    added.push({id: _start, content: `item-${_start}`});
  }
  _start += Date.now();
  return added;
}

let defaultElementHeight = 23;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      isInfiniteLoading: false,
      containerHeight: 250,
      elementHeight: data.map(item => item.cards.map(ii => defaultElementHeight)),
    };
  }
  componentDidMount() {
    const elementHeight = [...this.state.elementHeight];
    this.state.data.forEach((block, index) => {
      elementHeight[index] = [];
      block.cards.forEach((card, i) => {
        let height = defaultElementHeight;
        if (this.refs[`block-${index}-card-${i}`]) {
          height = ReactDOM.findDOMNode(this.refs[`block-${index}-card-${i}`]).offsetHeight;
        }
        elementHeight[index].push(height);
      })
    })
    this.setState({
      containerHeight: ReactDOM.findDOMNode(this.refs['block-0']).offsetHeight,
      elementHeight,
    });
  }
  handleInfiniteLoad(bIndex) {
    this.setState({
      isInfiniteLoading: true,
    });
    setTimeout(() => {
      // simulate ajax
      const data = this.state.data;
      const added = addData();
      const nData = [
        ...data.slice(0, bIndex),
        {cards: [...data[bIndex].cards, ...added]},
        ...data.slice(bIndex + 1)
      ];

      this.setState({
        isInfiniteLoading: false,
        data: nData,
        elementHeight: nData.map(item => item.cards.map(ii => defaultElementHeight)),
      });
    }, 1000);

    // after update dom, set new elementHeight
    setTimeout(() => {
      this.componentDidMount();
    }, 100)
  }
  onEndDrag(data) {
    this.setState({
      data,
      elementHeight: data.map(item => item.cards.map(ii => defaultElementHeight)),
    });
  }
  render() {
    return (<div>
      <Dnd data={this.state.data}
        onEndDrag={this.onEndDrag.bind(this)}
        onDrop={this.onEndDrag.bind(this)}
        onMoveCard={this.onEndDrag.bind(this)}
        onEnterBlock={this.onEndDrag.bind(this)}
        >
        {this.state.data.map((block, index) => {
          return (<Block key={index} index={index}>
            <h3>col - {index} <Icon type="link" /></h3>
            <div className="infi-container" ref={`block-${index}`}>
              <Infinite
                elementHeight={this.state.elementHeight[index]}
                containerHeight={this.state.containerHeight}
                infiniteLoadBeginEdgeOffset={20}
                onInfiniteLoad={this.handleInfiniteLoad.bind(this, index)}
                loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
                isInfiniteLoading={this.state.isInfiniteLoading}>
                {block.cards.map((card, i) => {
                  return (<Card key={card.id} index={i} ref={`block-${index}-card-${i}`}
                      bIndex={index}
                      placeholder={card._placeholder}
                      content={card.content} />)
                })}
              </Infinite>
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
