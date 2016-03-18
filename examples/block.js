import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop(props, monitor, component) {
    const dragInfo = monitor.getItem();
    if (monitor.isOver({ shallow: true })) {
      props.enterBlock(dragInfo.bIndex, dragInfo.index, props.index, 'drop', monitor.getClientOffset());
    }
    // component.setState({
    //   hasDropped: true,
    //   hasDroppedOnChild: hasDroppedOnChild
    // });
  },
  hover(props, monitor, component) {
    const dragInfo = monitor.getItem();
    if (dragInfo.bIndex === props.index) {
      return;
    }
    // console.log('block', monitor.isOver({ shallow: true }));
    if (monitor.isOver({ shallow: true })) {
      props.enterBlock(dragInfo.bIndex, dragInfo.index, props.index, 'hover', monitor.getClientOffset());
    }
  }
};

class Block extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.state = {
      hasDropped: false,
      hasDroppedOnChild: false
    };
  }

  render() {
    const { isOver, isOverCurrent, connectDropTarget, children } = this.props;
    const { hasDropped, hasDroppedOnChild } = this.state;

    return connectDropTarget(
      <div className="block">
        {children}
      </div>
    );
  }
}

export default DropTarget('dnd', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true })
}))(Block);
