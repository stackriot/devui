'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _simpleElementResizeDetector = require('simple-element-resize-detector');

var _simpleElementResizeDetector2 = _interopRequireDefault(_simpleElementResizeDetector);

var _angleDoubleRight = require('react-icons/lib/fa/angle-double-right');

var _angleDoubleRight2 = _interopRequireDefault(_angleDoubleRight);

var _ContextMenu = require('../ContextMenu');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsWrapper = (0, _createStyledComponent2.default)(styles);

var TabsHeader = function (_Component) {
  _inherits(TabsHeader, _Component);

  function TabsHeader(props) {
    _classCallCheck(this, TabsHeader);

    var _this = _possibleConstructorReturn(this, (TabsHeader.__proto__ || Object.getPrototypeOf(TabsHeader)).call(this, props));

    _this.collapse = function () {
      if (_this.state.subMenuOpened) _this.hideSubmenu();

      var _this$props = _this.props,
          selected = _this$props.selected,
          tabs = _this$props.tabs;

      var tabsWrapperRef = _this.tabsWrapperRef;
      var tabsRef = _this.tabsRef;
      var tabButtons = _this.tabsRef.children;
      var visibleTabs = _this.state.visibleTabs;
      var hiddenTabs = _this.state.hiddenTabs;
      var tabsWrapperRight = tabsWrapperRef.getBoundingClientRect().right;
      if (!tabsWrapperRight) return; // tabs are hidden

      var tabsRefRight = tabsRef.getBoundingClientRect().right;
      var i = visibleTabs.length - 1;
      var hiddenTab = void 0;

      if (tabsRefRight >= tabsWrapperRight - _this.iconWidth) {
        if (_this.props.position === 'right' && hiddenTabs.length > 0 && tabsRef.getBoundingClientRect().width + _this.hiddenTabsWidth[0] < tabsWrapperRef.getBoundingClientRect().width) {
          while (i < tabs.length - 1 && tabsRef.getBoundingClientRect().width + _this.hiddenTabsWidth[0] < tabsWrapperRef.getBoundingClientRect().width) {
            hiddenTab = hiddenTabs.shift();
            visibleTabs.splice(Number(hiddenTab.key), 0, hiddenTab);
            i++;
          }
        } else {
          while (i > 0 && tabButtons[i] && tabButtons[i].getBoundingClientRect().right >= tabsWrapperRight - _this.iconWidth) {
            if (tabButtons[i].value !== selected) {
              hiddenTabs.unshift.apply(hiddenTabs, _toConsumableArray(visibleTabs.splice(i, 1)));
              _this.hiddenTabsWidth.unshift(tabButtons[i].getBoundingClientRect().width);
            } else {
              tabsWrapperRight -= tabButtons[i].getBoundingClientRect().width;
            }
            i--;
          }
        }
      } else {
        while (i < tabs.length - 1 && tabButtons[i] && tabButtons[i].getBoundingClientRect().right + _this.hiddenTabsWidth[0] < tabsWrapperRight - _this.iconWidth) {
          hiddenTab = hiddenTabs.shift();
          visibleTabs.splice(Number(hiddenTab.key), 0, hiddenTab);
          _this.hiddenTabsWidth.shift();
          i++;
        }
      }
      _this.setState({ visibleTabs: visibleTabs, hiddenTabs: hiddenTabs });
    };

    _this.hideSubmenu = function () {
      _this.setState({ subMenuOpened: false, contextMenu: undefined });
    };

    _this.getTabsWrapperRef = function (node) {
      _this.tabsWrapperRef = node;
    };

    _this.getTabsRef = function (node) {
      _this.tabsRef = node;
    };

    _this.expandMenu = function (e) {
      var rect = e.currentTarget.children[0].getBoundingClientRect();
      _this.setState({
        contextMenu: {
          top: rect.top + 10,
          left: rect.left
        },
        subMenuOpened: true
      });
    };

    _this.state = {
      visibleTabs: props.tabs.slice(),
      hiddenTabs: [],
      subMenuOpened: false,
      contextMenu: undefined
    };
    _this.iconWidth = 0;
    _this.hiddenTabsWidth = [];
    return _this;
  }

  _createClass(TabsHeader, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.tabs !== this.props.tabs || nextProps.selected !== this.props.selected || nextProps.collapsible !== this.props.collapsible) {
        this.setState({ hiddenTabs: [], visibleTabs: nextProps.tabs.slice() });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.collapsible) {
        this.collapse();
        this.enableResizeEvents();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var collapsible = this.props.collapsible;

      if (!collapsible) {
        if (prevProps.collapsible !== collapsible) this.disableResizeEvents();
        return;
      }

      var shouldCollapse = false;
      if (this.iconWidth === 0) {
        var tabButtons = this.tabsRef.children;
        if (this.tabsRef.children[tabButtons.length - 1].value === 'expandIcon') {
          this.iconWidth = tabButtons[tabButtons.length - 1].getBoundingClientRect().width;
          shouldCollapse = true;
        }
      } else if (this.state.hiddenTabs.length === 0) {
        this.iconWidth = 0;
      }

      if (prevProps.collapsible !== collapsible) {
        this.enableResizeEvents();
        shouldCollapse = true;
      }

      if (shouldCollapse || this.props.selected !== prevProps.selected) {
        this.collapse();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disableResizeEvents();
    }
  }, {
    key: 'enableResizeEvents',
    value: function enableResizeEvents() {
      this.resizeDetector = (0, _simpleElementResizeDetector2.default)(this.tabsWrapperRef, this.collapse);
      window.addEventListener('mousedown', this.hideSubmenu);
    }
  }, {
    key: 'disableResizeEvents',
    value: function disableResizeEvents() {
      this.resizeDetector.remove();
      window.removeEventListener('mousedown', this.hideSubmenu);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          visibleTabs = _state.visibleTabs,
          hiddenTabs = _state.hiddenTabs,
          contextMenu = _state.contextMenu;

      return _react2.default.createElement(
        TabsWrapper,
        {
          innerRef: this.getTabsWrapperRef,
          main: this.props.main,
          position: this.props.position
        },
        _react2.default.createElement(
          'div',
          { ref: this.getTabsRef },
          visibleTabs,
          this.props.collapsible && visibleTabs.length < this.props.items.length && _react2.default.createElement(
            'button',
            { onClick: this.expandMenu, value: 'expandIcon' },
            _react2.default.createElement(_angleDoubleRight2.default, null)
          )
        ),
        this.props.collapsible && contextMenu && _react2.default.createElement(_ContextMenu2.default, {
          items: hiddenTabs,
          onClick: this.props.onClick,
          x: contextMenu.left,
          y: contextMenu.top,
          visible: this.state.subMenuOpened
        })
      );
    }
  }]);

  return TabsHeader;
}(_react.Component);

exports.default = TabsHeader;


TabsHeader.propTypes = {
  tabs: _propTypes2.default.array.isRequired,
  items: _propTypes2.default.array.isRequired,
  main: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  position: _propTypes2.default.string,
  collapsible: _propTypes2.default.bool,
  selected: _propTypes2.default.string
};