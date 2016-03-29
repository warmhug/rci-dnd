import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
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
  static defaultProps = {
    getBlockHeight: () => {},
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   hasDropped: false,
    // };
  }

  componentDidMount() {
    this.props.getBlockHeight(findDOMNode(this).offsetHeight);
  }

  render() {
    const { connectDropTarget, children, className, prefixCls } = this.props;
    // const { hasDropped } = this.state;

    return connectDropTarget(
      <div className={classNames(`${prefixCls}-block`, className)}>
        {children}
      </div>
    );
  }
}

export default DropTarget('dnd', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))(Block);
