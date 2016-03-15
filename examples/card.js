import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const dSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      bIndex: props.bIndex
    };
  },
  isDragging(props, monitor) {
    const item = monitor.getItem();
    // console.log(item);
    return true;
  }
};

const dTarget = {
  hover(props, monitor, component) {
    const dragInfo = monitor.getItem();
    const dragIndex = dragInfo.index;
    const dragBIndex = dragInfo.bIndex;

    const bIndex = props.bIndex;
    const hoverIndex = props.index;
console.log(monitor.canDrop());
    // Don't replace items with themselves
    if (dragBIndex === bIndex && dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
console.log(hoverClientY, hoverMiddleY, dragIndex, hoverIndex);
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    if (dragBIndex !== bIndex) {
      if (hoverClientY < hoverMiddleY) {
        return
      }
    }

    // Time to actually perform the action
    props.moveCard(dragBIndex, dragIndex, bIndex, hoverIndex);
    console.log(dragBIndex, dragIndex, bIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class Card extends Component {
  render() {
    const { isDragging, isOver, text, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
      <div className="card" style={{
        fontSize: 24,
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver ? 'red' : ''
      }}>
        {text}
      </div>
    ));
  }
}

export default flow(
  DragSource('dnd', dSource, (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      // connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }),
  DropTarget('dnd', dTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }))
)(Card);
