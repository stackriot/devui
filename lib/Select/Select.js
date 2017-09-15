'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectContainer = (0, _createStyledComponent2.default)(_styles2.default, _reactSelect2.default);

var Select = function (_ref) {
  _inherits(Select, _ref);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(SelectContainer, this.props);
    }
  }]);

  return Select;
}(_react.PureComponent || _react.Component);

exports.default = Select;


Select.propTypes = {
  autosize: _propTypes2.default.bool, // whether to enable autosizing or not
  clearable: _propTypes2.default.bool, // should it be possible to reset value
  disabled: _propTypes2.default.bool, // whether the Select is disabled or not
  isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not
  menuMaxHeight: _propTypes2.default.number, // maximum css height for the opened menu of options
  multi: _propTypes2.default.bool, // multi-value input
  searchable: _propTypes2.default.bool, // whether to enable searching feature or not
  simpleValue: _propTypes2.default.bool, // pass the value with label to onChange
  value: _propTypes2.default.any, // initial field value
  valueKey: _propTypes2.default.string, // path of the label value in option objects
  openOuterUp: _propTypes2.default.bool // value to control the opening direction
};

Select.defaultProps = { autosize: true, clearable: false, simpleValue: true, menuMaxHeight: 200 };