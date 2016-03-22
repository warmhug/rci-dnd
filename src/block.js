import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop(props, monitor, component) {
    const dragInfo = monitor.getItem();
    if (monitor.isOver({ shallow: true })) {
      props.onEnterBlock(dragInfo.bIndex, dragInfo.index, props.index, 'drop', monitor.getClientOffset());
    }
    // component.setState({
    //   hasDropped: true,
    // });
  },
  hover(props, monitor, component) {
    const dragInfo = monitor.getItem();
    if (dragInfo.bIndex === props.index) {
      return;
    }
    if (monitor.isOver({ shallow: true })) {
      props.onEnterBlock(dragInfo.bIndex, dragInfo.index, props.index, 'hover', monitor.getClientOffset());
    }
  }
};

class Block extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   hasDropped: false,
    // };
  }

  render() {
    const { connectDropTarget, children, prefixCls } = this.props;
    // const { hasDropped } = this.state;
// console.log(this.props, 'ddd');
    return connectDropTarget(
      <div className={`${prefixCls}-block`}>
        {children}
      </div>
    );
  }
}

export default DropTarget('dnd', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))(Block);
