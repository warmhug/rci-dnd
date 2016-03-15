import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from './card';

// @DragDropContext(HTML5Backend)
class Dnd extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      blocks: [
        {
          cards: [{
            id: 1,
            text: '♘ 1'
          }, {
            id: 2,
            text: '♘ 2'
          }, {
            id: 3,
            text: '♘ 3'
          }, {
            id: 4,
            text: '♘ 4'
          }]
        },
        {
          cards: [{
            id: 11,
            text: '♘ 11'
          }, {
            id: 22,
            text: '♘ 22'
          }]
        }
      ]
    };
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
    console.log('xx', blocks);
    return (<div className="container">
      {blocks.map((block, index) => {
        return (<div key={index} className="block">
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
