// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'rci-dnd/assets/index.less';
import './demo.less';
import Infinite from 'react-infinite';

import Dnd from 'rci-dnd';
const Block = Dnd.Block;
const Card = Dnd.Card;

let _start = 0;
function addData(flag) {
  var added = [];
  for (let i = 0; i < 10; i++) {
    _start++;
    added.push({
      id: _start,
      content: <div><h3>title</h3><p>♘ {_start}</p></div>,
      _height: parseInt(Math.random() * 20 + 40)
    });
  }
  // if (flag) {
    // _start += Date.now();
  // }
  return added;
}

let containerHeight = 250;
let defaultElementHeight = 50;
let elementHeight =[];
let cardsLen = 0;
const cardsHeight = {};

const initState = {
  data: [],
  isInfiniteLoading: [],
  containerHeight,
  elementHeight,
};

function getState() {
  const data = [];
  for (var i = 0; i < 4; i++) {
    data.push({cards: addData()});
  }

  data.forEach((block, index) => {
    cardsLen += block.cards.length;
  });

  return {
    data,
    isInfiniteLoading: data.map(item => false),
    containerHeight,
    elementHeight: data.map(item => item.cards.map(ii => defaultElementHeight)),
  };
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    // this.state = getState();
  }
  componentDidMount() {
    setTimeout(() => {
      // simulate ajax
      this.setState(getState());
    }, 500);
  }
  componentDidUpdate() {}

  getCardHeight(bIndex, index, height) {
    cardsHeight[`block-${bIndex}-card-${index}`] = height;
    cardsLen--;
    if (!cardsLen) {
      // console.log('all did mount');
      this.setState({
        elementHeight: this.getNewInfiElementHeight(this.state.data),
      });
    }
  }

  getNewInfiElementHeight(data) {
    const elementHeight = [...this.state.elementHeight];
    data.forEach((block, index) => {
      elementHeight[index] = [];
      block.cards.forEach((card, i) => {
        elementHeight[index].push(cardsHeight[`block-${index}-card-${i}`] || defaultElementHeight);
      });
    });
    return elementHeight;
  }
  getBlockHeight(bIndex, height) {
    this.setState({
      containerHeight: height - 50 || containerHeight,
    });
  }

  handleInfiniteLoad(bIndex) {
    this.setState({
      isInfiniteLoading: [
        ...this.state.isInfiniteLoading.slice(0, bIndex),
        true,
        ...this.state.isInfiniteLoading.slice(bIndex + 1),
      ],
    });
    setTimeout(() => {
      // simulate ajax
      const data = this.state.data;
      const added = addData(true);
      const nData = [
        ...data.slice(0, bIndex),
        {cards: [...data[bIndex].cards, ...added]},
        ...data.slice(bIndex + 1)
      ];

      cardsLen = added.length;

      const elementHeight = [...this.state.elementHeight];
      elementHeight[bIndex] = [...elementHeight[bIndex], ...added.map(ii => defaultElementHeight)]

      this.setState({
        isInfiniteLoading: nData.map(item => false),
        data: nData,
        elementHeight,
      });

    }, 1000);
  }
  onEndDrag(e, data, extra) {
    let elementHeight = [...this.state.elementHeight];

    if (e === 'moveCard' && extra === 'across') {
      elementHeight = this.getNewInfiElementHeight(data);
    }

    if (e === 'enterBlock') {
      // add placeholder height
      elementHeight[extra[0]].splice(extra[1], 0, defaultElementHeight);
      if (extra.length === 4) {
        elementHeight[extra[2]].splice(extra[3], 1);
      }
    }
    if (e === 'drop') {
      const {dragBIndex, dragIndex, bIndex, dropIndex} = extra;
      const removed = elementHeight[dragBIndex].splice(dragIndex, 1);
      elementHeight[bIndex][dropIndex] = removed[0];
    }
    if (e === 'endDrag' && extra) {
      // delete placeholder height
      elementHeight[extra[0]].splice(extra[1], 1);
    }

    this.setState({
      data,
      elementHeight,
      // elementHeight: data.map(item => item.cards.map(ii => defaultElementHeight)),
    });
  }
  render() {
    const { elementHeight, containerHeight, isInfiniteLoading } = this.state;
    // console.log('render', elementHeight, this.state.data);
    // ajax-data -> render -> get computed size -> apply new size to Infinite
    return (<div>
      <Dnd data={this.state.data}
        onEndDrag={this.onEndDrag.bind(this, 'endDrag')}
        onDrop={this.onEndDrag.bind(this, 'drop')}
        onMoveCard={this.onEndDrag.bind(this, 'moveCard')}
        onEnterBlock={this.onEndDrag.bind(this, 'enterBlock')}
        >
        {this.state.data.length ? this.state.data.map((block, index) => {
          return (<Block key={index} index={index}
              getBlockHeight={this.getBlockHeight.bind(this, index)}>
            <h3 style={{margin: 0, height: 30}}>col - {index}</h3>
            <div className="infi-container" ref={`block-${index}`}>
              <Infinite
                elementHeight={elementHeight[index]}
                containerHeight={containerHeight}
                infiniteLoadBeginEdgeOffset={20}
                onInfiniteLoad={this.handleInfiniteLoad.bind(this, index)}
                loadingSpinnerDelegate={<div className="infi-item">Loading...</div>}
                isInfiniteLoading={isInfiniteLoading[index]}>
                {block.cards.map((card, i) => {
                  return (<Card key={card.id}
                      id={card.id} index={i} ref={`block-${index}-card-${i}`}
                      style={{height: card._height}}
                      getCardHeight={this.getCardHeight.bind(this, index, i)}
                      bIndex={index}
                      placeholder={card._placeholder}
                      content={card._placeholder ? '' : card.content} />)
                })}
              </Infinite>
            </div>
          </Block>);
        }) : <div>loading...</div>}
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
