import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from './card';
import Block from './block';

let _id = 10000;
function makeId() {
  _id++;
  return Date.now() + Math.random() + _id;
}

let hoverCardIndex;
let dropIndex;
let cardRect;
let enterB;
let phIndex = [];

class Dnd extends Component {
  constructor(props) {
    super(props);
    this.onMoveCard = this.onMoveCard.bind(this);
    this.onEnterBlock = this.onEnterBlock.bind(this);
    this.onEndDrag = this.onEndDrag.bind(this);
  }

  resetPhIndex(blocks) {
    if (phIndex[0]) {
      // 删除原来的placeholder
      blocks[phIndex[0][0]].cards.splice(phIndex[0][1], 1);
      phIndex = [];
    }
  }

  onEndDrag() {
    const blocks = [...this.props.data];
    this.resetPhIndex(blocks);
    this.setState({blocks});
    hoverCardIndex = undefined;
    dropIndex = undefined;
    cardRect = undefined;
    enterB = undefined;
    this.props.onEndDrag(blocks);
  }

  onMoveCard(dragBIndex, dragIndex, bIndex, hoverIndex, cr) {
    const blocks = [...this.props.data];
    if (dragBIndex !== bIndex) {
      enterB = false;
      hoverCardIndex = hoverIndex;
      if (!cardRect) {
        cardRect = cr;
      }

      this.resetPhIndex(blocks);
      this.setState({blocks});
      return;
    }

    const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
    blocks[bIndex].cards.splice(hoverIndex, 0, removed[0]);
    this.setState({blocks});
  }

  onEnterBlock(dragBIndex, dragIndex, bIndex, flag, mouseOffset) {
    const _indexs = `${dragBIndex}-${bIndex}`;
    if (dragBIndex === bIndex || enterB === _indexs && flag === 'hover') {
      return;
    }

    const blocks = [...this.props.data];
    if (enterB !== _indexs) {
      // 进入另一个block里
      this.resetPhIndex(blocks);
    }
    enterB = _indexs;

    if (!cardRect) {
      // 如果不经过任何一个card，则放到最后
      dropIndex = this.props.data[bIndex].cards.length;
    } else if (mouseOffset.y < cardRect.top || mouseOffset.y > cardRect.bottom) {
      dropIndex = hoverCardIndex;
    }

    if (flag === 'hover') {
      blocks[bIndex].cards.splice(dropIndex, 0, {id: makeId(), content: '', _placeholder: true});
      phIndex[0] = [bIndex, dropIndex];
      this.setState({blocks});
    } else if (flag == 'drop') {
      if (!cardRect) {
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
    const { className, prefixCls, placeholderCls, data } = this.props;
    return (<div className={classNames(className, prefixCls)}>
      {data.map((block, index) => {
        return (<Block prefixCls={prefixCls}
          key={index}
          index={index}
          onEnterBlock={this.onEnterBlock}
          >
          {block.cards.map((card, i) => {
            return card._placeholder ? <div key={card.id}
                className={classNames(placeholderCls, `${prefixCls}-placeholder`)}></div> :
              <Card prefixCls={prefixCls}
                key={card.id}
                index={i}
                bIndex={index}
                content={card.content}
                onEndDrag={this.onEndDrag}
                onMoveCard={this.onMoveCard} />
          })}
        </Block>);
      })}
    </div>);
  }
}
Dnd.propTypes = {
  prefixCls: PropTypes.string,
  placeholderCls: PropTypes.string,
  data: PropTypes.array,
  onEndDrag: PropTypes.func,
};
Dnd.defaultProps = {
  prefixCls: 'rci-dnd',
  placeholderCls: '',
  onEndDrag: () => {},
}

export default DragDropContext(HTML5Backend)(Dnd);
