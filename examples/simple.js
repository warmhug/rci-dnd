// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'rci-dnd/assets/index.less';
import './demo.less';
import Infinite from 'react-infinite';

import Dnd from 'rci-dnd';
import data from './data';
const Block = Dnd.Block;
const Card = Dnd.Card;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  componentWillMount() {

  }
  onEndDrag(data) {
    this.setState({data});
  }
  render() {
    const ct = <div><p>params</p>sde</div>;
    const cards = (block, index) => block.cards.map((card, i) => {
      return (<Card key={card.id} index={i}
          bIndex={index}
          placeholder={card._placeholder}
          content={ct || card.content} />)
    });
    return (<div>
      <Dnd data={this.state.data}
        onEndDrag={this.onEndDrag.bind(this)}
        onDrop={this.onEndDrag.bind(this)}
        onMoveCard={this.onEndDrag.bind(this)}
        onEnterBlock={this.onEndDrag.bind(this)}
        >
        {data.map((block, index) => {
          return (<Block key={index} index={index}>
            <h3>col - {index}</h3>
            {cards(block, index)}
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
