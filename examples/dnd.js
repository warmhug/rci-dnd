import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import blocks from './data';
import Card from './card';
import Block from './block';

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

let _id = 100;
function makeId() {
  _id++;
  return _id;
}

let hoverCardIndex;
let dropIndex;
let cardRect;
let enterB;
let enterBIndex;
let phIndex = [];

class Dnd extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.enterBlock = this.enterBlock.bind(this);
    this.endDrag = this.endDrag.bind(this);
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

  endDrag() {
    const blocks = [...this.state.blocks];
    if (phIndex[0] !== undefined) {
      blocks[enterBIndex].cards.splice(phIndex[0], 1);
      phIndex = [];
      this.setState({blocks});
    }
    hoverCardIndex = undefined;
    dropIndex = undefined;
    cardRect = undefined;
    enterB = undefined;
    enterBIndex = undefined;
  }

  moveCard(dragBIndex, dragIndex, bIndex, hoverIndex, cr) {
    const blocks = [...this.state.blocks];
    if (dragBIndex !== bIndex) {
      enterB = false;
      hoverCardIndex = hoverIndex;
      if (!cardRect) {
        cardRect = cr;
      }
      // 删除原来的placeholder
      if (phIndex[0] !== undefined) {
        blocks[bIndex].cards.splice(phIndex[0], 1);
        phIndex = [];
        this.setState({blocks});
      }
      return;
    }

    const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
    blocks[bIndex].cards.splice(hoverIndex, 0, removed[0]);
    this.setState({blocks});
  }

  enterBlock(dragBIndex, dragIndex, bIndex, flag, mouseOffset) {
    if (dragBIndex === bIndex || enterB && flag === 'hover') {
      return;
    }
    enterB = true;
    enterBIndex = bIndex;

    const blocks = [...this.state.blocks];

    if (hoverCardIndex === undefined) {
      // 如果不经过任何一个card，则放到最后
      dropIndex = this.state.blocks[bIndex].cards.length;
    } else {
      if (mouseOffset.y < cardRect.top) {
        dropIndex = hoverCardIndex;
        if (dropIndex < 0) {
          dropIndex = 0;
        }
      }
      if (mouseOffset.y > cardRect.bottom) {
        dropIndex = hoverCardIndex + 1;
      }
    }

    if (flag === 'hover') {
      if (phIndex[0] === undefined) {
        blocks[bIndex].cards.splice(dropIndex, 0, {id: makeId(), text: '', placeholder: true});
        phIndex[0] = dropIndex;
        this.setState({blocks});
      }
    } else if (flag == 'drop') {
      if (hoverCardIndex === undefined) {
        dropIndex -= 1;
        dropIndex = dropIndex < 0 ? 0 : dropIndex;
      }
      const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
      blocks[bIndex].cards[dropIndex] = removed[0];
      phIndex = [];
      this.setState({blocks});
    }
  }

  render() {
    const { blocks } = this.state;
    return (<div className="dnd-container">
      {blocks.map((block, index) => {
        return (<Block key={index} index={index} enterBlock={this.enterBlock}>
          <Infinite elementHeight={40}
            containerHeight={250}
            infiniteLoadBeginEdgeOffset={200}
            onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
            loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
            isInfiniteLoading={this.state.isInfiniteLoading}>
            {this.state.elements}
          </Infinite>
          {block.cards.map((card, i) => {
            return card.placeholder ? <div key={card.id} style={{height:'30px',backgroundColor:'#ccc'}}></div> :
              <Card key={card.id}
                bIndex={index}
                index={i}
                id={card.id}
                text={card.text}
                endDrag={this.endDrag}
                moveCard={this.moveCard} />
          })}
        </Block>);
      })}
    </div>);
  }
}

export default DragDropContext(HTML5Backend)(Dnd);
