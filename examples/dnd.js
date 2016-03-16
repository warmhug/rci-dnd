import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import blocks from './data';
import Card from './card';

// import InfiniteScrollFn from 'react-infinite-scroll';
// const InfiniteScroll = InfiniteScrollFn(React);
import Infinite from 'react-infinite';

function buildElements(start, end) {
  var elements = [];
  for (var i = start; i < end; i++) {
    elements.push(<div key={i} className="infi-item">
      List Item {i}
    </div>);
  }
  return elements;
}

class Dnd extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      blocks,
      isInfiniteLoading: false,
      elements: buildElements(0, 20),
    };
  }

  handleInfiniteLoad() {
    console.log('load');
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

  moveCard(dragBIndex, dragIndex, bIndex, hoverIndex) {
    const blocks = [...this.state.blocks];
    const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
    blocks[bIndex].cards.splice(hoverIndex, 0, removed[0]);
    console.log('xxxdd');
    this.setState({blocks});
  }

  render() {
    const { blocks } = this.state;
    return (<div className="dnd-container">
      {blocks.map((block, index) => {
        return (<div key={index} className="block">
          <Infinite elementHeight={40}
            containerHeight={250}
            infiniteLoadBeginEdgeOffset={200}
            onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
            loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
            isInfiniteLoading={this.state.isInfiniteLoading}>
            {this.state.elements}
          </Infinite>
          {block.cards.map((card, i) => {
            return <Card key={card.id}
              bIndex={index}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={this.moveCard} />
          })}
        </div>);
      })}
    </div>);
  }
}

export default DragDropContext(HTML5Backend)(Dnd);
