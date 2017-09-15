'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  height: 100%;\n\n  > div > div:first-child {\n    ', '\n    ', '\n  }\n\n  > div:nth-child(2) {\n    flex: 1;\n    overflow-y: auto;\n    position: relative;\n  }\n'], ['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  height: 100%;\n\n  > div > div:first-child {\n    ', '\n    ', '\n  }\n\n  > div:nth-child(2) {\n    flex: 1;\n    overflow-y: auto;\n    position: relative;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabsContainer = exports.TabsContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.position !== 'left' && '\n      margin-left: auto !important;\n    ';
}, function (props) {
  return props.position === 'center' && '\n      margin-right: auto !important;\n    ';
});