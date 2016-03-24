webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactInfinite = __webpack_require__(160);
	
	var _reactInfinite2 = _interopRequireDefault(_reactInfinite);
	
	var _reactList = __webpack_require__(173);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	__webpack_require__(174);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // use jsx to render html, do not modify simple.html
	
	// import InfiniteScrollFn from 'react-infinite-scroll';
	// const InfiniteScroll = InfiniteScrollFn(React);
	
	
	function buildElements(start, end) {
	  var elements = [];
	  for (var i = start; i < end; i++) {
	    elements.push(_react2["default"].createElement(
	      'div',
	      { key: i, className: 'infi-item' },
	      'List Item ',
	      i
	    ));
	  }
	  return elements;
	}
	
	var Demo = function (_Component) {
	  _inherits(Demo, _Component);
	
	  function Demo(props) {
	    _classCallCheck(this, Demo);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));
	
	    _this.state = {
	      isInfiniteLoading: false,
	      elements: buildElements(0, 20)
	    };
	    return _this;
	  }
	
	  _createClass(Demo, [{
	    key: 'handleInfiniteLoad',
	    value: function handleInfiniteLoad() {
	      var _this2 = this;
	
	      console.log('load', arguments);
	      this.setState({
	        isInfiniteLoading: true
	      });
	      setTimeout(function () {
	        var elemLength = _this2.state.elements.length,
	            newElements = buildElements(elemLength, elemLength + 30);
	        _this2.setState({
	          isInfiniteLoading: false,
	          elements: _this2.state.elements.concat(newElements)
	        });
	      }, 1000);
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(index, key) {
	      return _react2["default"].createElement(
	        'div',
	        { key: key, className: 'infi-item' },
	        'item ',
	        index
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var infi = _react2["default"].createElement(
	        _reactInfinite2["default"],
	        { elementHeight: 40, className: 'infi',
	          containerHeight: 250,
	          infiniteLoadBeginEdgeOffset: 200,
	          onInfiniteLoad: this.handleInfiniteLoad.bind(this),
	          loadingSpinnerDelegate: _react2["default"].createElement(
	            'div',
	            { className: 'infi-item' },
	            'Loading...'
	          ),
	          isInfiniteLoading: this.state.isInfiniteLoading },
	        this.state.elements
	      );
	      return _react2["default"].createElement(
	        'div',
	        null,
	        _react2["default"].createElement(
	          'h3',
	          null,
	          'react-infinite'
	        ),
	        infi,
	        _react2["default"].createElement(
	          'h3',
	          null,
	          'react-list'
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: 'infi', style: { overflow: 'auto', maxHeight: 400 } },
	          _react2["default"].createElement(_reactList2["default"], {
	            itemRenderer: this.renderItem.bind(this),
	            length: 1000
	          })
	        )
	      );
	    }
	  }]);
	
	  return Demo;
	}(_react.Component);
	
	_reactDom2["default"].render(_react2["default"].createElement(
	  'div',
	  null,
	  _react2["default"].createElement(
	    'p',
	    null,
	    'Github：',
	    _react2["default"].createElement(
	      'a',
	      { href: 'https://github.com/warmhug/rci-dnd' },
	      'https://github.com/warmhug/rci-dnd'
	    )
	  ),
	  _react2["default"].createElement(Demo, null)
	), document.getElementById('__react-content'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = global.React || __webpack_require__(2);
	var ReactDOM = global.ReactDOM || __webpack_require__(159);
	
	__webpack_require__(161);
	var scaleEnum = __webpack_require__(164);
	var infiniteHelpers = __webpack_require__(165);
	var _isFinite = __webpack_require__(170);
	
	var preloadType = __webpack_require__(171).preloadType;
	var checkProps = checkProps = __webpack_require__(172);
	
	var Infinite = React.createClass({
	  displayName: 'Infinite',
	
	  propTypes: {
	    children: React.PropTypes.any,
	
	    handleScroll: React.PropTypes.func,
	
	    // preloadBatchSize causes updates only to
	    // happen each preloadBatchSize pixels of scrolling.
	    // Set a larger number to cause fewer updates to the
	    // element list.
	    preloadBatchSize: preloadType,
	    // preloadAdditionalHeight determines how much of the
	    // list above and below the container is preloaded even
	    // when it is not currently visible to the user. In the
	    // regular scroll implementation, preloadAdditionalHeight
	    // is equal to the entire height of the list.
	    preloadAdditionalHeight: preloadType, // page to screen ratio
	
	    // The provided elementHeight can be either
	    //  1. a constant: all elements are the same height
	    //  2. an array containing the height of each element
	    elementHeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.arrayOf(React.PropTypes.number)]).isRequired,
	    // This is the total height of the visible window. One
	    // of
	    containerHeight: React.PropTypes.number,
	    useWindowAsScrollContainer: React.PropTypes.bool,
	
	    displayBottomUpwards: React.PropTypes.bool.isRequired,
	
	    infiniteLoadBeginEdgeOffset: React.PropTypes.number,
	    onInfiniteLoad: React.PropTypes.func,
	    loadingSpinnerDelegate: React.PropTypes.node,
	
	    isInfiniteLoading: React.PropTypes.bool,
	    timeScrollStateLastsForAfterUserScrolls: React.PropTypes.number,
	
	    className: React.PropTypes.string,
	
	    styles: React.PropTypes.shape({
	      scrollableStyle: React.PropTypes.object
	    }).isRequired
	  },
	  statics: {
	    containerHeightScaleFactor: function containerHeightScaleFactor(factor) {
	      if (!_isFinite(factor)) {
	        throw new Error('The scale factor must be a number.');
	      }
	      return {
	        type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	        amount: factor
	      };
	    }
	  },
	
	  // Properties currently used but which may be
	  // refactored away in the future.
	  computedProps: {},
	  utils: {},
	  shouldAttachToBottom: false,
	  preservedScrollState: 0,
	  loadingSpinnerHeight: 0,
	  deprecationWarned: false,
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      handleScroll: function handleScroll() {},
	
	      useWindowAsScrollContainer: false,
	
	      onInfiniteLoad: function onInfiniteLoad() {},
	      loadingSpinnerDelegate: React.createElement('div', null),
	
	      displayBottomUpwards: false,
	
	      isInfiniteLoading: false,
	      timeScrollStateLastsForAfterUserScrolls: 150,
	
	      className: '',
	
	      styles: {}
	    };
	  },
	
	  // automatic adjust to scroll direction
	  // give spinner a ReactCSSTransitionGroup
	  getInitialState: function getInitialState() {
	    var nextInternalState = this.recomputeInternalStateFromProps(this.props);
	
	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;
	    this.shouldAttachToBottom = this.props.displayBottomUpwards;
	
	    var state = nextInternalState.newState;
	    state.scrollTimeout = undefined;
	    state.isScrolling = false;
	
	    return state;
	  },
	
	  generateComputedProps: function generateComputedProps(props) {
	    // These are extracted so their type definitions do not conflict.
	    var containerHeight = props.containerHeight;
	    var preloadBatchSize = props.preloadBatchSize;
	    var preloadAdditionalHeight = props.preloadAdditionalHeight;
	
	    var oldProps = _objectWithoutProperties(props, ['containerHeight', 'preloadBatchSize', 'preloadAdditionalHeight']);
	
	    var newProps = {};
	    containerHeight = typeof containerHeight === 'number' ? containerHeight : 0;
	    newProps.containerHeight = props.useWindowAsScrollContainer ? window.innerHeight : containerHeight;
	
	    if (oldProps.infiniteLoadBeginBottomOffset !== undefined) {
	      newProps.infiniteLoadBeginEdgeOffset = oldProps.infiniteLoadBeginBottomOffset;
	      if (!this.deprecationWarned) {
	        console.error('Warning: React Infinite\'s infiniteLoadBeginBottomOffset prop\n        has been deprecated as of 0.6.0. Please use infiniteLoadBeginEdgeOffset.\n        Because this is a rather descriptive name, a simple find and replace\n        should suffice.');
	        this.deprecationWarned = true;
	      }
	    }
	
	    var defaultPreloadBatchSizeScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 0.5
	    };
	    var batchSize = preloadBatchSize && preloadBatchSize.type ? preloadBatchSize : defaultPreloadBatchSizeScaling;
	
	    if (typeof preloadBatchSize === 'number') {
	      newProps.preloadBatchSize = preloadBatchSize;
	    } else if (typeof batchSize === 'object' && batchSize.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadBatchSize = newProps.containerHeight * batchSize.amount;
	    } else {
	      newProps.preloadBatchSize = 0;
	    }
	
	    var defaultPreloadAdditionalHeightScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 1
	    };
	    var additionalHeight = preloadAdditionalHeight && preloadAdditionalHeight.type ? preloadAdditionalHeight : defaultPreloadAdditionalHeightScaling;
	    if (typeof preloadAdditionalHeight === 'number') {
	      newProps.preloadAdditionalHeight = preloadAdditionalHeight;
	    } else if (typeof additionalHeight === 'object' && additionalHeight.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadAdditionalHeight = newProps.containerHeight * additionalHeight.amount;
	    } else {
	      newProps.preloadAdditionalHeight = 0;
	    }
	
	    return Object.assign(oldProps, newProps);
	  },
	
	  generateComputedUtilityFunctions: function generateComputedUtilityFunctions(props) {
	    var _this = this;
	
	    var utilities = {};
	    utilities.getLoadingSpinnerHeight = function () {
	      var loadingSpinnerHeight = 0;
	      if (_this.refs && _this.refs.loadingSpinner) {
	        var loadingSpinnerNode = ReactDOM.findDOMNode(_this.refs.loadingSpinner);
	        loadingSpinnerHeight = loadingSpinnerNode.offsetHeight || 0;
	      }
	      return loadingSpinnerHeight;
	    };
	    if (props.useWindowAsScrollContainer) {
	      utilities.subscribeToScrollListener = function () {
	        window.addEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.unsubscribeFromScrollListener = function () {
	        window.removeEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.nodeScrollListener = function () {};
	      utilities.getScrollTop = function () {
	        return window.pageYOffset;
	      };
	      utilities.setScrollTop = function (top) {
	        window.scroll(window.pageXOffset, top);
	      };
	      utilities.scrollShouldBeIgnored = function () {
	        return false;
	      };
	      utilities.buildScrollableStyle = function () {
	        return {};
	      };
	    } else {
	      utilities.subscribeToScrollListener = function () {};
	      utilities.unsubscribeFromScrollListener = function () {};
	      utilities.nodeScrollListener = this.infiniteHandleScroll;
	      utilities.getScrollTop = function () {
	        var scrollable;
	        if (_this.refs && _this.refs.scrollable) {
	          scrollable = ReactDOM.findDOMNode(_this.refs.scrollable);
	        }
	        return scrollable ? scrollable.scrollTop : 0;
	      };
	
	      utilities.setScrollTop = function (top) {
	        var scrollable;
	        if (_this.refs && _this.refs.scrollable) {
	          scrollable = ReactDOM.findDOMNode(_this.refs.scrollable);
	        }
	        if (scrollable) {
	          scrollable.scrollTop = top;
	        }
	      };
	      utilities.scrollShouldBeIgnored = function (event) {
	        return event.target !== ReactDOM.findDOMNode(_this.refs.scrollable);
	      };
	
	      utilities.buildScrollableStyle = function () {
	        return Object.assign({}, {
	          height: _this.computedProps.containerHeight,
	          overflowX: 'hidden',
	          overflowY: 'scroll',
	          WebkitOverflowScrolling: 'touch'
	        }, _this.computedProps.styles.scrollableStyle || {});
	      };
	    }
	    return utilities;
	  },
	
	  recomputeInternalStateFromProps: function recomputeInternalStateFromProps(props) {
	    checkProps(props);
	    var computedProps = this.generateComputedProps(props);
	    var utils = this.generateComputedUtilityFunctions(props);
	
	    var newState = {};
	
	    newState.numberOfChildren = React.Children.count(computedProps.children);
	    newState.infiniteComputer = infiniteHelpers.createInfiniteComputer(computedProps.elementHeight, computedProps.children, computedProps.displayBottomUpwards);
	
	    if (computedProps.isInfiniteLoading !== undefined) {
	      newState.isInfiniteLoading = computedProps.isInfiniteLoading;
	    }
	
	    newState.preloadBatchSize = computedProps.preloadBatchSize;
	    newState.preloadAdditionalHeight = computedProps.preloadAdditionalHeight;
	
	    newState = Object.assign(newState, infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(newState, utils.getScrollTop()));
	
	    return {
	      computedProps: computedProps,
	      utils: utils,
	      newState: newState
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var nextInternalState = this.recomputeInternalStateFromProps(nextProps);
	
	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;
	
	    this.setState(nextInternalState.newState);
	  },
	
	  componentWillUpdate: function componentWillUpdate() {
	    if (this.props.displayBottomUpwards) {
	      this.preservedScrollState = this.utils.getScrollTop() - this.loadingSpinnerHeight;
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this.loadingSpinnerHeight = this.utils.getLoadingSpinnerHeight();
	
	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      } else if (prevProps.isInfiniteLoading && !this.props.isInfiniteLoading) {
	        this.utils.setScrollTop(this.state.infiniteComputer.getTotalScrollableHeight() - prevState.infiniteComputer.getTotalScrollableHeight() + this.preservedScrollState);
	      }
	    }
	
	    var hasLoadedMoreChildren = React.Children.count(this.props.children) !== React.Children.count(prevProps.children);
	    if (hasLoadedMoreChildren) {
	      var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, this.utils.getScrollTop());
	      this.setState(newApertureState);
	    }
	
	    var isMissingVisibleRows = hasLoadedMoreChildren && !this.hasAllVisibleItems() && !this.state.isInfiniteLoading;
	    if (isMissingVisibleRows) {
	      this.onInfiniteLoad();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.utils.subscribeToScrollListener();
	
	    if (!this.hasAllVisibleItems()) {
	      this.onInfiniteLoad();
	    }
	
	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      }
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.utils.unsubscribeFromScrollListener();
	  },
	
	  infiniteHandleScroll: function infiniteHandleScroll(e) {
	    if (this.utils.scrollShouldBeIgnored(e)) {
	      return;
	    }
	    this.computedProps.handleScroll(ReactDOM.findDOMNode(this.refs.scrollable));
	    this.handleScroll(this.utils.getScrollTop());
	  },
	
	  manageScrollTimeouts: function manageScrollTimeouts() {
	    // Maintains a series of timeouts to set this.state.isScrolling
	    // to be true when the element is scrolling.
	
	    if (this.state.scrollTimeout) {
	      clearTimeout(this.state.scrollTimeout);
	    }
	
	    var that = this,
	        scrollTimeout = setTimeout(function () {
	      that.setState({
	        isScrolling: false,
	        scrollTimeout: undefined
	      });
	    }, this.computedProps.timeScrollStateLastsForAfterUserScrolls);
	
	    this.setState({
	      isScrolling: true,
	      scrollTimeout: scrollTimeout
	    });
	  },
	
	  getLowestPossibleScrollTop: function getLowestPossibleScrollTop() {
	    return this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight;
	  },
	
	  hasAllVisibleItems: function hasAllVisibleItems() {
	    return !(_isFinite(this.computedProps.infiniteLoadBeginEdgeOffset) && this.state.infiniteComputer.getTotalScrollableHeight() < this.computedProps.containerHeight);
	  },
	
	  passedEdgeForInfiniteScroll: function passedEdgeForInfiniteScroll(scrollTop) {
	    if (this.computedProps.displayBottomUpwards) {
	      return !this.shouldAttachToBottom && scrollTop < this.computedProps.infiniteLoadBeginEdgeOffset;
	    } else {
	      return scrollTop > this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight - this.computedProps.infiniteLoadBeginEdgeOffset;
	    }
	  },
	
	  onInfiniteLoad: function onInfiniteLoad() {
	    this.setState({ isInfiniteLoading: true });
	    this.computedProps.onInfiniteLoad();
	  },
	
	  handleScroll: function handleScroll(scrollTop) {
	    this.shouldAttachToBottom = this.computedProps.displayBottomUpwards && scrollTop >= this.getLowestPossibleScrollTop();
	
	    this.manageScrollTimeouts();
	
	    var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, scrollTop);
	
	    if (this.passedEdgeForInfiniteScroll(scrollTop) && !this.state.isInfiniteLoading) {
	      this.setState(Object.assign({}, newApertureState));
	      this.onInfiniteLoad();
	    } else {
	      this.setState(newApertureState);
	    }
	  },
	
	  buildHeightStyle: function buildHeightStyle(height) {
	    return {
	      width: '100%',
	      height: Math.ceil(height)
	    };
	  },
	
	  render: function render() {
	    var displayables;
	    if (React.Children.count(this.computedProps.children) > 1) {
	      displayables = this.computedProps.children.slice(this.state.displayIndexStart, this.state.displayIndexEnd + 1);
	    } else {
	      displayables = this.computedProps.children;
	    }
	
	    var infiniteScrollStyles = {};
	    if (this.state.isScrolling) {
	      infiniteScrollStyles.pointerEvents = 'none';
	    }
	
	    var topSpacerHeight = this.state.infiniteComputer.getTopSpacerHeight(this.state.displayIndexStart),
	        bottomSpacerHeight = this.state.infiniteComputer.getBottomSpacerHeight(this.state.displayIndexEnd);
	
	    // This asymmetry is due to a reluctance to use CSS to control
	    // the bottom alignment
	    if (this.computedProps.displayBottomUpwards) {
	      var heightDifference = this.computedProps.containerHeight - this.state.infiniteComputer.getTotalScrollableHeight();
	      if (heightDifference > 0) {
	        topSpacerHeight = heightDifference - this.loadingSpinnerHeight;
	      }
	    }
	
	    var loadingSpinner = this.computedProps.infiniteLoadBeginEdgeOffset === undefined ? null : React.createElement(
	      'div',
	      { ref: 'loadingSpinner' },
	      this.state.isInfiniteLoading ? this.computedProps.loadingSpinnerDelegate : null
	    );
	
	    // topSpacer and bottomSpacer take up the amount of space that the
	    // rendered elements would have taken up otherwise
	    return React.createElement(
	      'div',
	      { className: this.computedProps.className,
	        ref: 'scrollable',
	        style: this.utils.buildScrollableStyle(),
	        onScroll: this.utils.nodeScrollListener },
	      React.createElement(
	        'div',
	        { ref: 'smoothScrollingWrapper', style: infiniteScrollStyles },
	        React.createElement('div', { ref: 'topSpacer',
	          style: this.buildHeightStyle(topSpacerHeight) }),
	        this.computedProps.displayBottomUpwards && loadingSpinner,
	        displayables,
	        !this.computedProps.displayBottomUpwards && loadingSpinner,
	        React.createElement('div', { ref: 'bottomSpacer',
	          style: this.buildHeightStyle(bottomSpacerHeight) })
	      )
	    );
	  }
	});
	
	module.exports = Infinite;
	global.Infinite = Infinite;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	/*
	  A number of polyfills for native functions are consolidated
	  here. We do this instead of using the libraries directly
	  because Flow is designed to make its type refinements
	  with these native functions.
	 */
	
	'use strict';
	
	if (!Object.assign) {
	  Object.assign = __webpack_require__(162);
	}
	
	if (!Array.isArray) {
	  Array.isArray = __webpack_require__(163);
	}

/***/ },

/***/ 162:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 163:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },

/***/ 164:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  CONTAINER_HEIGHT_SCALE_FACTOR: 'containerHeightScaleFactor'
	};

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var ConstantInfiniteComputer = __webpack_require__(166);
	var ArrayInfiniteComputer = __webpack_require__(168);
	var React = global.React || __webpack_require__(2);
	
	function createInfiniteComputer(data, children) {
	  var computer;
	  var numberOfChildren = React.Children.count(children);
	
	  // This should be guaranteed by checkProps
	  if (Array.isArray(data)) {
	    computer = new ArrayInfiniteComputer(data, numberOfChildren);
	  } else {
	    computer = new ConstantInfiniteComputer(data, numberOfChildren);
	  }
	  return computer;
	}
	
	// Given the scrollTop of the container, computes the state the
	// component should be in. The goal is to abstract all of this
	// from any actual representation in the DOM.
	// The window is the block with any preloadAdditionalHeight
	// added to it.
	function recomputeApertureStateFromOptionsAndScrollTop(_ref, scrollTop) {
	  var preloadBatchSize = _ref.preloadBatchSize;
	  var preloadAdditionalHeight = _ref.preloadAdditionalHeight;
	  var infiniteComputer = _ref.infiniteComputer;
	  return (function () {
	    var blockNumber = preloadBatchSize === 0 ? 0 : Math.floor(scrollTop / preloadBatchSize),
	        blockStart = preloadBatchSize * blockNumber,
	        blockEnd = blockStart + preloadBatchSize,
	        apertureTop = Math.max(0, blockStart - preloadAdditionalHeight),
	        apertureBottom = Math.min(infiniteComputer.getTotalScrollableHeight(), blockEnd + preloadAdditionalHeight);
	
	    return {
	      displayIndexStart: infiniteComputer.getDisplayIndexStart(apertureTop),
	      displayIndexEnd: infiniteComputer.getDisplayIndexEnd(apertureBottom)
	    };
	  })();
	}
	
	module.exports = {
	  createInfiniteComputer: createInfiniteComputer,
	  recomputeApertureStateFromOptionsAndScrollTop: recomputeApertureStateFromOptionsAndScrollTop
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InfiniteComputer = __webpack_require__(167);
	
	var ConstantInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ConstantInfiniteComputer, _InfiniteComputer);
	
	  function ConstantInfiniteComputer() {
	    _classCallCheck(this, ConstantInfiniteComputer);
	
	    _get(Object.getPrototypeOf(ConstantInfiniteComputer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ConstantInfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      return this.heightData * this.numberOfChildren;
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      return Math.floor(windowTop / this.heightData);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var nonZeroIndex = Math.ceil(windowBottom / this.heightData);
	      if (nonZeroIndex > 0) {
	        return nonZeroIndex - 1;
	      }
	      return nonZeroIndex;
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      return displayIndexStart * this.heightData;
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      var nonZeroIndex = displayIndexEnd + 1;
	      return Math.max(0, (this.numberOfChildren - nonZeroIndex) * this.heightData);
	    }
	  }]);
	
	  return ConstantInfiniteComputer;
	})(InfiniteComputer);
	
	module.exports = ConstantInfiniteComputer;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// An infinite computer must be able to do the following things:
	//  1. getTotalScrollableHeight()
	//  2. getDisplayIndexStart()
	//  3. getDisplayIndexEnd()
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var InfiniteComputer = (function () {
	  function InfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, InfiniteComputer);
	
	    this.heightData = heightData;
	    this.numberOfChildren = numberOfChildren;
	  }
	
	  _createClass(InfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getTotalScrollableHeight not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getDisplayIndexStart not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getDisplayIndexEnd not implemented.');
	      }
	    }
	
	    // These are helper methods, and can be calculated from
	    // the above details.
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getTopSpacerHeight not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      /* eslint-enable no-unused-vars */
	      if (process.env.NODE_ENV === 'development') {
	        throw new Error('getBottomSpacerHeight not implemented.');
	      }
	    }
	  }]);
	
	  return InfiniteComputer;
	})();
	
	module.exports = InfiniteComputer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InfiniteComputer = __webpack_require__(167),
	    bs = __webpack_require__(169);
	
	var ArrayInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ArrayInfiniteComputer, _InfiniteComputer);
	
	  function ArrayInfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, ArrayInfiniteComputer);
	
	    _get(Object.getPrototypeOf(ArrayInfiniteComputer.prototype), 'constructor', this).call(this, heightData, numberOfChildren);
	    this.prefixHeightData = this.heightData.reduce(function (acc, next) {
	      if (acc.length === 0) {
	        return [next];
	      } else {
	        acc.push(acc[acc.length - 1] + next);
	        return acc;
	      }
	    }, []);
	  }
	
	  _createClass(ArrayInfiniteComputer, [{
	    key: 'maybeIndexToIndex',
	    value: function maybeIndexToIndex(index) {
	      if (typeof index === 'undefined' || index === null) {
	        return this.prefixHeightData.length - 1;
	      } else {
	        return index;
	      }
	    }
	  }, {
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      var length = this.prefixHeightData.length;
	      return length === 0 ? 0 : this.prefixHeightData[length - 1];
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowTop, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowBottom, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      var previous = displayIndexStart - 1;
	      return previous < 0 ? 0 : this.prefixHeightData[previous];
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      if (displayIndexEnd === -1) {
	        return 0;
	      }
	      return this.getTotalScrollableHeight() - this.prefixHeightData[displayIndexEnd];
	    }
	  }]);
	
	  return ArrayInfiniteComputer;
	})(InfiniteComputer);
	
	module.exports = ArrayInfiniteComputer;

/***/ },

/***/ 169:
/***/ function(module, exports) {

	"use strict";
	
	var opts = {
	  CLOSEST_LOWER: 1,
	  CLOSEST_HIGHER: 2
	};
	
	var binaryIndexSearch = function binaryIndexSearch(array, /* : Array<number> */
	item, /* : number */
	opt /* : number */) /* : ?number */{
	  var index;
	
	  var high = array.length - 1,
	      low = 0,
	      middle,
	      middleItem;
	
	  while (low <= high) {
	    middle = low + Math.floor((high - low) / 2);
	    middleItem = array[middle];
	
	    if (middleItem === item) {
	      return middle;
	    } else if (middleItem < item) {
	      low = middle + 1;
	    } else if (middleItem > item) {
	      high = middle - 1;
	    }
	  }
	
	  if (opt === opts.CLOSEST_LOWER && low > 0) {
	    index = low - 1;
	  } else if (opt === opts.CLOSEST_HIGHER && high < array.length - 1) {
	    index = high + 1;
	  }
	
	  return index;
	};
	
	module.exports = {
	  binaryIndexSearch: binaryIndexSearch,
	  opts: opts
	};

/***/ },

/***/ 170:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = global.isFinite;
	
	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(10);
	 * // => true
	 *
	 * _.isFinite('10');
	 * // => false
	 *
	 * _.isFinite(true);
	 * // => false
	 *
	 * _.isFinite(Object(10));
	 * // => false
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 */
	function isFinite(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}
	
	module.exports = isFinite;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var React = global.React || __webpack_require__(2);
	
	module.exports = {
	  preloadType: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.shape({
	    type: React.PropTypes.oneOf(['containerHeightScaleFactor']).isRequired,
	    amount: React.PropTypes.number.isRequired
	  })])
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This module provides a centralized place for
	// runtime checking that the props passed to React Infinite
	// make the minimum amount of sense.
	
	'use strict';
	
	var React = global.React || __webpack_require__(2);
	var _isFinite = __webpack_require__(170);
	
	module.exports = function (props) {
	  var rie = 'Invariant Violation: ';
	  if (!(props.containerHeight || props.useWindowAsScrollContainer)) {
	    throw new Error(rie + 'Either containerHeight or useWindowAsScrollContainer must be provided.');
	  }
	
	  if (!(_isFinite(props.elementHeight) || Array.isArray(props.elementHeight))) {
	    throw new Error(rie + 'You must provide either a number or an array of numbers as the elementHeight.');
	  }
	
	  if (Array.isArray(props.elementHeight)) {
	    if (React.Children.count(props.children) !== props.elementHeight.length) {
	      throw new Error(rie + 'There must be as many values provided in the elementHeight prop as there are children.');
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2), __webpack_require__(159)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('react'), require('react-dom'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.React, global.ReactDOM);
	    global.ReactList = mod.exports;
	  }
	})(this, function (exports, module, _react, _reactDom) {
	  'use strict';
	
	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	  var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	  var _React = _interopRequireDefault(_react);
	
	  var _ReactDOM = _interopRequireDefault(_reactDom);
	
	  var findDOMNode = _ReactDOM['default'].findDOMNode;
	
	  var isEqualSubset = function isEqualSubset(a, b) {
	    for (var key in a) {
	      if (a[key] !== b[key]) return false;
	    }return true;
	  };
	
	  var isEqual = function isEqual(a, b) {
	    return isEqualSubset(a, b) && isEqualSubset(b, a);
	  };
	
	  var CLIENT_SIZE_KEYS = { x: 'clientWidth', y: 'clientHeight' };
	  var CLIENT_START_KEYS = { x: 'clientTop', y: 'clientLeft' };
	  var INNER_SIZE_KEYS = { x: 'innerWidth', y: 'innerHeight' };
	  var OFFSET_SIZE_KEYS = { x: 'offsetWidth', y: 'offsetHeight' };
	  var OFFSET_START_KEYS = { x: 'offsetLeft', y: 'offsetTop' };
	  var OVERFLOW_KEYS = { x: 'overflowX', y: 'overflowY' };
	  var SCROLL_SIZE_KEYS = { x: 'scrollWidth', y: 'scrollHeight' };
	  var SCROLL_START_KEYS = { x: 'scrollLeft', y: 'scrollTop' };
	  var SIZE_KEYS = { x: 'width', y: 'height' };
	
	  var NOOP = function NOOP() {};
	
	  var _default = (function (_Component) {
	    _inherits(_default, _Component);
	
	    _createClass(_default, null, [{
	      key: 'displayName',
	      value: 'ReactList',
	      enumerable: true
	    }, {
	      key: 'propTypes',
	      value: {
	        axis: _react.PropTypes.oneOf(['x', 'y']),
	        initialIndex: _react.PropTypes.number,
	        itemSizeGetter: _react.PropTypes.func,
	        itemRenderer: _react.PropTypes.func,
	        itemsRenderer: _react.PropTypes.func,
	        length: _react.PropTypes.number,
	        pageSize: _react.PropTypes.number,
	        scrollParentGetter: _react.PropTypes.func,
	        threshold: _react.PropTypes.number,
	        type: _react.PropTypes.oneOf(['simple', 'variable', 'uniform']),
	        useTranslate3d: _react.PropTypes.bool
	      },
	      enumerable: true
	    }, {
	      key: 'defaultProps',
	      value: {
	        axis: 'y',
	        initialIndex: null,
	        itemSizeGetter: null,
	        itemRenderer: function itemRenderer(index, key) {
	          return _React['default'].createElement(
	            'div',
	            { key: key },
	            index
	          );
	        },
	        itemsRenderer: function itemsRenderer(items, ref) {
	          return _React['default'].createElement(
	            'div',
	            { ref: ref },
	            items
	          );
	        },
	        length: 0,
	        pageSize: 10,
	        scrollParentGetter: null,
	        threshold: 100,
	        type: 'simple',
	        useTranslate3d: false
	      },
	      enumerable: true
	    }]);
	
	    function _default(props) {
	      _classCallCheck(this, _default);
	
	      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
	      var _props = this.props;
	      var initialIndex = _props.initialIndex;
	      var length = _props.length;
	      var pageSize = _props.pageSize;
	
	      var itemsPerRow = 1;
	      var from = this.constrainFrom(initialIndex, length, itemsPerRow);
	      var size = this.constrainSize(pageSize, length, pageSize, from);
	      this.state = { from: from, size: size, itemsPerRow: itemsPerRow };
	      this.cache = {};
	    }
	
	    _createClass(_default, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(next) {
	        var _state = this.state;
	        var itemsPerRow = _state.itemsPerRow;
	        var from = _state.from;
	        var size = _state.size;
	        var length = next.length;
	        var pageSize = next.pageSize;
	
	        from = this.constrainFrom(from, length, itemsPerRow);
	        size = this.constrainSize(size, length, pageSize, from);
	        this.setState({ from: from, size: size });
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.updateFrame = this.updateFrame.bind(this);
	        window.addEventListener('resize', this.updateFrame);
	        this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(props, state) {
	        return !isEqual(props, this.props) || !isEqual(state, this.state);
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        this.updateFrame();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        window.removeEventListener('resize', this.updateFrame);
	        this.scrollParent.removeEventListener('scroll', this.updateFrame);
	        this.scrollParent.removeEventListener('mousewheel', NOOP);
	      }
	    }, {
	      key: 'getOffset',
	      value: function getOffset(el) {
	        var axis = this.props.axis;
	
	        var offset = el[CLIENT_START_KEYS[axis]] || 0;
	        var offsetKey = OFFSET_START_KEYS[axis];
	        do offset += el[offsetKey] || 0; while (el = el.offsetParent);
	        return offset;
	      }
	    }, {
	      key: 'getScrollParent',
	      value: function getScrollParent() {
	        var _props2 = this.props;
	        var axis = _props2.axis;
	        var scrollParentGetter = _props2.scrollParentGetter;
	
	        if (scrollParentGetter) return scrollParentGetter();
	        var el = findDOMNode(this);
	        var overflowKey = OVERFLOW_KEYS[axis];
	        while (el = el.parentElement) {
	          switch (window.getComputedStyle(el)[overflowKey]) {
	            case 'auto':case 'scroll':case 'overlay':
	              return el;
	          }
	        }
	        return window;
	      }
	    }, {
	      key: 'getScroll',
	      value: function getScroll() {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        var scrollKey = SCROLL_START_KEYS[axis];
	        var scroll = scrollParent === window ?
	        // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
	        // always return document.documentElement[scrollKey] as 0, so take
	        // whichever has a value.
	        document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
	        var el = findDOMNode(this);
	        var target = scroll - (this.getOffset(el) - this.getOffset(scrollParent));
	        var max = this.getScrollSize() - this.getViewportSize();
	        return Math.max(0, Math.min(target, max));
	      }
	    }, {
	      key: 'setScroll',
	      value: function setScroll(offset) {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        if (scrollParent === window) {
	          return window.scrollTo(0, this.getOffset(findDOMNode(this)) + offset);
	        }
	        scrollParent[SCROLL_START_KEYS[axis]] += offset - this.getScroll();
	      }
	    }, {
	      key: 'getViewportSize',
	      value: function getViewportSize() {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        return scrollParent === window ? window[INNER_SIZE_KEYS[axis]] : scrollParent[CLIENT_SIZE_KEYS[axis]];
	      }
	    }, {
	      key: 'getScrollSize',
	      value: function getScrollSize() {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        return scrollParent === window ? document.body[SCROLL_SIZE_KEYS[axis]] : scrollParent[SCROLL_SIZE_KEYS[axis]];
	      }
	    }, {
	      key: 'getStartAndEnd',
	      value: function getStartAndEnd() {
	        var threshold = arguments.length <= 0 || arguments[0] === undefined ? this.props.threshold : arguments[0];
	
	        var start = this.getScroll() - threshold;
	        var end = start + this.getViewportSize() + threshold * 2;
	        return { start: start, end: end };
	      }
	    }, {
	      key: 'getItemSizeAndItemsPerRow',
	      value: function getItemSizeAndItemsPerRow() {
	        var itemEls = findDOMNode(this.items).children;
	        if (!itemEls.length) return {};
	
	        var firstEl = itemEls[0];
	
	        // Firefox has a problem where it will return a *slightly* (less than
	        // thousandths of a pixel) different size for the same element between
	        // renders. This can cause an infinite render loop, so only change the
	        // itemSize when it is significantly different.
	        var itemSize = this.state.itemSize;
	        var axis = this.props.axis;
	
	        var firstElSize = firstEl[OFFSET_SIZE_KEYS[axis]];
	        var delta = Math.abs(firstElSize - itemSize);
	        if (isNaN(delta) || delta >= 1) itemSize = firstElSize;
	
	        if (!itemSize) return {};
	
	        var startKey = OFFSET_START_KEYS[axis];
	        var firstStart = firstEl[startKey];
	        var itemsPerRow = 1;
	        for (var item = itemEls[itemsPerRow]; item && item[startKey] === firstStart; item = itemEls[itemsPerRow]) {
	          ++itemsPerRow;
	        }return { itemSize: itemSize, itemsPerRow: itemsPerRow };
	      }
	    }, {
	      key: 'updateFrame',
	      value: function updateFrame(cb) {
	        this.updateScrollParent();
	        if (typeof cb != 'function') cb = NOOP;
	        switch (this.props.type) {
	          case 'simple':
	            return this.updateSimpleFrame(cb);
	          case 'variable':
	            return this.updateVariableFrame(cb);
	          case 'uniform':
	            return this.updateUniformFrame(cb);
	        }
	      }
	    }, {
	      key: 'updateScrollParent',
	      value: function updateScrollParent() {
	        var prev = this.scrollParent;
	        this.scrollParent = this.getScrollParent();
	        if (prev === this.scrollParent) return;
	        if (prev) {
	          prev.removeEventListener('scroll', this.updateFrame);
	          prev.removeEventListener('mousewheel', NOOP);
	        }
	        this.scrollParent.addEventListener('scroll', this.updateFrame);
	        this.scrollParent.addEventListener('mousewheel', NOOP);
	      }
	    }, {
	      key: 'updateSimpleFrame',
	      value: function updateSimpleFrame(cb) {
	        var _getStartAndEnd = this.getStartAndEnd();
	
	        var end = _getStartAndEnd.end;
	
	        var itemEls = findDOMNode(this.items).children;
	        var elEnd = 0;
	
	        if (itemEls.length) {
	          var axis = this.props.axis;
	
	          var firstItemEl = itemEls[0];
	          var lastItemEl = itemEls[itemEls.length - 1];
	          elEnd = this.getOffset(lastItemEl) + lastItemEl[OFFSET_SIZE_KEYS[axis]] - this.getOffset(firstItemEl);
	        }
	
	        if (elEnd > end) return cb();
	
	        var _props3 = this.props;
	        var pageSize = _props3.pageSize;
	        var length = _props3.length;
	
	        this.setState({ size: Math.min(this.state.size + pageSize, length) }, cb);
	      }
	    }, {
	      key: 'updateVariableFrame',
	      value: function updateVariableFrame(cb) {
	        if (!this.props.itemSizeGetter) this.cacheSizes();
	
	        var _getStartAndEnd2 = this.getStartAndEnd();
	
	        var start = _getStartAndEnd2.start;
	        var end = _getStartAndEnd2.end;
	        var _props4 = this.props;
	        var length = _props4.length;
	        var pageSize = _props4.pageSize;
	
	        var space = 0;
	        var from = 0;
	        var size = 0;
	        var maxFrom = length - 1;
	
	        while (from < maxFrom) {
	          var itemSize = this.getSizeOf(from);
	          if (itemSize == null || space + itemSize > start) break;
	          space += itemSize;
	          ++from;
	        }
	
	        var maxSize = length - from;
	
	        while (size < maxSize && space < end) {
	          var itemSize = this.getSizeOf(from + size);
	          if (itemSize == null) {
	            size = Math.min(size + pageSize, maxSize);
	            break;
	          }
	          space += itemSize;
	          ++size;
	        }
	
	        this.setState({ from: from, size: size }, cb);
	      }
	    }, {
	      key: 'updateUniformFrame',
	      value: function updateUniformFrame(cb) {
	        var _getItemSizeAndItemsPerRow = this.getItemSizeAndItemsPerRow();
	
	        var itemSize = _getItemSizeAndItemsPerRow.itemSize;
	        var itemsPerRow = _getItemSizeAndItemsPerRow.itemsPerRow;
	
	        if (!itemSize || !itemsPerRow) return cb();
	
	        var _props5 = this.props;
	        var length = _props5.length;
	        var pageSize = _props5.pageSize;
	
	        var _getStartAndEnd3 = this.getStartAndEnd();
	
	        var start = _getStartAndEnd3.start;
	        var end = _getStartAndEnd3.end;
	
	        var from = this.constrainFrom(Math.floor(start / itemSize) * itemsPerRow, length, itemsPerRow);
	
	        var size = this.constrainSize((Math.ceil((end - start) / itemSize) + 1) * itemsPerRow, length, pageSize, from);
	
	        return this.setState({ itemsPerRow: itemsPerRow, from: from, itemSize: itemSize, size: size }, cb);
	      }
	    }, {
	      key: 'getSpaceBefore',
	      value: function getSpaceBefore(index) {
	        var cache = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        if (cache[index] != null) return cache[index];
	
	        // Try the static itemSize.
	        var _state2 = this.state;
	        var itemSize = _state2.itemSize;
	        var itemsPerRow = _state2.itemsPerRow;
	
	        if (itemSize) {
	          return cache[index] = Math.floor(index / itemsPerRow) * itemSize;
	        }
	
	        // Find the closest space to index there is a cached value for.
	        var from = index;
	        while (from > 0 && cache[--from] == null);
	
	        // Finally, accumulate sizes of items from - index.
	        var space = cache[from] || 0;
	        for (var i = from; i < index; ++i) {
	          cache[i] = space;
	          var _itemSize = this.getSizeOf(i);
	          if (_itemSize == null) break;
	          space += _itemSize;
	        }
	
	        return cache[index] = space;
	      }
	    }, {
	      key: 'cacheSizes',
	      value: function cacheSizes() {
	        var cache = this.cache;
	        var from = this.state.from;
	
	        var itemEls = findDOMNode(this.items).children;
	        var sizeKey = OFFSET_SIZE_KEYS[this.props.axis];
	        for (var i = 0, l = itemEls.length; i < l; ++i) {
	          cache[from + i] = itemEls[i][sizeKey];
	        }
	      }
	    }, {
	      key: 'getSizeOf',
	      value: function getSizeOf(index) {
	        var cache = this.cache;
	        var items = this.items;
	        var _props6 = this.props;
	        var axis = _props6.axis;
	        var itemSizeGetter = _props6.itemSizeGetter;
	        var type = _props6.type;
	        var _state3 = this.state;
	        var from = _state3.from;
	        var itemSize = _state3.itemSize;
	        var size = _state3.size;
	
	        // Try the static itemSize.
	        if (itemSize) return itemSize;
	
	        // Try the itemSizeGetter.
	        if (itemSizeGetter) return itemSizeGetter(index);
	
	        // Try the cache.
	        if (index in cache) return cache[index];
	
	        // Try the DOM.
	        if (type === 'simple' && index >= from && index < from + size && items) {
	          var itemEl = findDOMNode(items).children[index - from];
	          if (itemEl) return itemEl[OFFSET_SIZE_KEYS[axis]];
	        }
	      }
	    }, {
	      key: 'constrainFrom',
	      value: function constrainFrom(from, length, itemsPerRow) {
	        if (this.props.type === 'simple') return 0;
	        if (!from) return 0;
	        return Math.max(Math.min(from, length - itemsPerRow - length % itemsPerRow), 0);
	      }
	    }, {
	      key: 'constrainSize',
	      value: function constrainSize(size, length, pageSize, from) {
	        return Math.min(Math.max(size, pageSize), length - from);
	      }
	    }, {
	      key: 'scrollTo',
	      value: function scrollTo(index) {
	        if (index != null) this.setScroll(this.getSpaceBefore(index));
	      }
	    }, {
	      key: 'scrollAround',
	      value: function scrollAround(index) {
	        var current = this.getScroll();
	
	        var max = this.getSpaceBefore(index);
	        if (current > max) return this.setScroll(max);
	
	        var min = max - this.getViewportSize() + this.getSizeOf(index);
	        if (current < min) this.setScroll(min);
	      }
	    }, {
	      key: 'getVisibleRange',
	      value: function getVisibleRange() {
	        var _state4 = this.state;
	        var from = _state4.from;
	        var size = _state4.size;
	
	        var _getStartAndEnd4 = this.getStartAndEnd(0);
	
	        var start = _getStartAndEnd4.start;
	        var end = _getStartAndEnd4.end;
	
	        var cache = {};
	        var first = undefined,
	            last = undefined;
	        for (var i = from; i < from + size; ++i) {
	          var itemStart = this.getSpaceBefore(i, cache);
	          var itemEnd = itemStart + this.getSizeOf(i);
	          if (first == null && itemEnd > start) first = i;
	          if (first != null && itemStart < end) last = i;
	        }
	        return [first, last];
	      }
	    }, {
	      key: 'renderItems',
	      value: function renderItems() {
	        var _this = this;
	
	        var _props7 = this.props;
	        var itemRenderer = _props7.itemRenderer;
	        var itemsRenderer = _props7.itemsRenderer;
	        var _state5 = this.state;
	        var from = _state5.from;
	        var size = _state5.size;
	
	        var items = [];
	        for (var i = 0; i < size; ++i) {
	          items.push(itemRenderer(from + i, i));
	        }return itemsRenderer(items, function (c) {
	          return _this.items = c;
	        });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props8 = this.props;
	        var axis = _props8.axis;
	        var length = _props8.length;
	        var type = _props8.type;
	        var useTranslate3d = _props8.useTranslate3d;
	        var _state6 = this.state;
	        var from = _state6.from;
	        var itemsPerRow = _state6.itemsPerRow;
	
	        var items = this.renderItems();
	        if (type === 'simple') return items;
	
	        var style = { position: 'relative' };
	        var cache = {};
	        var bottom = Math.ceil(length / itemsPerRow) * itemsPerRow;
	        var size = this.getSpaceBefore(bottom, cache);
	        if (size) {
	          style[SIZE_KEYS[axis]] = size;
	          if (axis === 'x') style.overflowX = 'hidden';
	        }
	        var offset = this.getSpaceBefore(from, cache);
	        var x = axis === 'x' ? offset : 0;
	        var y = axis === 'y' ? offset : 0;
	        var transform = useTranslate3d ? 'translate3d(' + x + 'px, ' + y + 'px, 0)' : 'translate(' + x + 'px, ' + y + 'px)';
	        var listStyle = {
	          msTransform: transform,
	          WebkitTransform: transform,
	          transform: transform
	        };
	        return _React['default'].createElement(
	          'div',
	          { style: style },
	          _React['default'].createElement(
	            'div',
	            { style: listStyle },
	            items
	          )
	        );
	      }
	    }]);
	
	    return _default;
	  })(_react.Component);
	
	  module.exports = _default;
	});


/***/ }

});
//# sourceMappingURL=infinite.js.map