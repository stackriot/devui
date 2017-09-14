'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabsHeader = require('./TabsHeader');

var _TabsHeader2 = _interopRequireDefault(_TabsHeader);

var _common = require('./styles/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.onMouseUp = function (e) {
      e.target.blur();
    };

    _this.onClick = function (e) {
      _this.props.onClick(e.target.value);
    };

    _this.updateTabs(props);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== this.props.selected) {
        this.updateTabs(nextProps);
      }
    }
  }, {
    key: 'updateTabs',
    value: function updateTabs(props) {
      var _this2 = this;

      var tabs = props.tabs;
      var selected = props.selected;

      this.tabsHeader = tabs.map(function (tab, i) {
        var isSelected = void 0;
        var value = typeof tab.value !== 'undefined' ? tab.value : tab.name;
        if (value === selected) {
          isSelected = true;
          if (tab.component) {
            _this2.SelectedComponent = tab.component;
            if (tab.selector) _this2.selector = function () {
              return tab.selector(tab);
            };
          }
        }
        return _react2.default.createElement(
          'button',
          {
            key: i,
            value: value,
            'data-selected': isSelected,
            onMouseUp: _this2.onMouseUp,
            onClick: _this2.onClick
          },
          tab.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var tabsHeader = _react2.default.createElement(_TabsHeader2.default, {
        tabs: this.tabsHeader,
        items: this.props.tabs,
        main: this.props.main,
        collapsible: this.props.collapsible,
        onClick: this.props.onClick,
        selected: this.props.selected,
        position: this.props.position
      });

      if (!this.SelectedComponent) {
        return _react2.default.createElement(
          _common.TabsContainer,
          { position: this.props.position },
          tabsHeader
        );
      }

      return _react2.default.createElement(
        _common.TabsContainer,
        { position: this.props.position },
        tabsHeader,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(this.SelectedComponent, this.selector && this.selector())
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

exports.default = Tabs;


Tabs.propTypes = {
  tabs: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.string,
  main: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  collapsible: _propTypes2.default.bool,
  position: _propTypes2.default.oneOf(['left', 'right', 'center'])
};

Tabs.defaultProps = { position: 'left' };