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
    const rawIndex = phIndex[0] && [...phIndex[0]];
    this.resetPhIndex(blocks);
    // this.setState({blocks});
    this.props.onEndDrag(blocks, rawIndex);
    hoverCardIndex = undefined;
    dropIndex = undefined;
    cardRect = undefined;
    enterB = undefined;
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
      // this.setState({blocks});
      this.props.onMoveCard(blocks, 'across');
      return;
    }

    const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
    blocks[bIndex].cards.splice(hoverIndex, 0, removed[0]);
    // this.setState({blocks});
    this.props.onMoveCard(blocks);
  }

  onEnterBlock(dragBIndex, dragIndex, bIndex, flag, mouseOffset) {
    const _indexs = `${dragBIndex}-${bIndex}`;
    if (dragBIndex === bIndex || enterB === _indexs && flag === 'hover') {
      return;
    }

    const blocks = [...this.props.data];
    let _phIndex;
    if (enterB !== _indexs) {
      // 进入另一个block里
      _phIndex = phIndex[0] && [...phIndex[0]];
      this.resetPhIndex(blocks);
    }
    enterB = _indexs;

    if (cardRect && (mouseOffset.y < cardRect.top || mouseOffset.y > cardRect.bottom)) {
      dropIndex = hoverCardIndex;
    }
    if (!cardRect) {
      // 如果不经过任何一个card，则放到最后
      dropIndex = this.props.data[bIndex].cards.length;
    }

    if (flag === 'hover') {
      blocks[bIndex].cards.splice(dropIndex, 0, {id: makeId(), _placeholder: true, content: ''});
      phIndex[0] = [bIndex, dropIndex];
      // this.setState({blocks});
      this.props.onEnterBlock(blocks, _phIndex ? [...phIndex[0], ..._phIndex] : phIndex[0]);
    } else if (flag == 'drop') {
      if (!cardRect) {
        // 如果不经过任何card，则放到block最后，替换掉占位符。
        dropIndex -= 1;
        dropIndex = dropIndex < 0 ? 0 : dropIndex;
      }
      const removed = blocks[dragBIndex].cards.splice(dragIndex, 1);
      blocks[bIndex].cards[dropIndex] = removed[0];
      phIndex = [];
      // this.setState({blocks});
      this.props.onDrop(blocks, {dragBIndex, dragIndex, bIndex, dropIndex});
    }
  }

  recursiveCloneChildren(children) {
    const props = this.props;
    const newC = React.Children.map(children, (child, index) => {
      let childProps = {};
      if (React.isValidElement(child)) {
        if (child.type == Block) {
          childProps = {
            prefixCls: props.prefixCls,
            // index, // need user config
            onEnterBlock: this.onEnterBlock,
          };
        }
        if (child.type == Card) {
          childProps = {
            prefixCls: props.prefixCls,
            // index,
            onEndDrag: this.onEndDrag,
            onMoveCard: this.onMoveCard,
          };
        }
      }
      if (child && child.props) {
        // null or String has no Prop
        childProps.children = this.recursiveCloneChildren(child.props.children);
        return React.cloneElement(child, childProps);
      }
      return child;
    });
    return newC;
  }

  render() {
    const { className, prefixCls, data, children } = this.props;
    const newChildren = this.recursiveCloneChildren(children);
    return (<div className={classNames(className, prefixCls)}>
      {newChildren}
    </div>);
  }
}

Dnd.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  data: PropTypes.array,
  onEndDrag: PropTypes.func,
};
Dnd.defaultProps = {
  prefixCls: 'rci-dnd',
  onEndDrag: () => {},
}

export default DragDropContext(HTML5Backend)(Dnd);
