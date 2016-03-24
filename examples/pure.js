webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(175);


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(174);
	
	__webpack_require__(176);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	// import 'rc-dnd/assets/index.less';
	// import Dnd from 'rc-dnd';
	
	
	var colors = ["Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"];
	var placeholder = document.createElement("li");
	placeholder.className = "placeholder";
	
	var List = _react2["default"].createClass({
	  displayName: 'List',
	
	  getInitialState: function getInitialState() {
	    return { data: this.props.data };
	  },
	  dragStart: function dragStart(e) {
	    this.dragged = e.currentTarget;
	    e.dataTransfer.effectAllowed = 'move';
	    // Firefox requires dataTransfer data to be set
	    e.dataTransfer.setData("text/html", e.currentTarget);
	  },
	  dragEnd: function dragEnd(e) {
	    this.dragged.style.display = "block";
	    this.dragged.parentNode.removeChild(placeholder);
	    // Update data
	    var data = this.state.data;
	    var from = Number(this.dragged.dataset.id);
	    var to = Number(this.over.dataset.id);
	    if (from < to) to--;
	    if (this.nodePlacement == "after") to++;
	    data.splice(to, 0, data.splice(from, 1)[0]);
	    this.setState({ data: data });
	  },
	  dragOver: function dragOver(e) {
	    e.preventDefault();
	    this.dragged.style.display = "none";
	    if (e.target.className == "placeholder") return;
	    this.over = e.target;
	    // Inside the dragOver method
	    var relY = e.clientY - this.over.offsetTop;
	    var height = this.over.offsetHeight / 2;
	    var parent = e.target.parentNode;
	
	    if (relY > height) {
	      this.nodePlacement = "after";
	      parent.insertBefore(placeholder, e.target.nextElementSibling);
	    } else if (relY < height) {
	      this.nodePlacement = "before";
	      parent.insertBefore(placeholder, e.target);
	    }
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      'ul',
	      { onDragOver: this.dragOver },
	      this.state.data.map(function (item, i) {
	        return _react2["default"].createElement(
	          'li',
	          {
	            'data-id': i,
	            key: i,
	            draggable: 'true',
	            onDragEnd: this.dragEnd,
	            onDragStart: this.dragStart
	          },
	          item
	        );
	      }, this)
	    );
	  }
	});
	
	_reactDom2["default"].render(_react2["default"].createElement(
	  'div',
	  null,
	  _react2["default"].createElement(
	    'p',
	    null,
	    'Github：',
	    _react2["default"].createElement(
	      'a',
	      { href: 'https://github.com/warmhug/react-dnd-demo' },
	      'https://github.com/warmhug/react-dnd-demo'
	    )
	  ),
	  _react2["default"].createElement(List, { data: colors })
	), document.getElementById('__react-content'));

/***/ },

/***/ 176:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=pure.js.map